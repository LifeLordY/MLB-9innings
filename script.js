let playerData = []; // 用於儲存從 data.json 讀取的球員資料

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            playerData = data;
            updatePlayerOptions(); // 初次載入頁面時更新球員選單
        })
        .catch(error => console.error('Error loading data.json:', error));

    // 初始化 指導球員 和 狀態 的數值同步
    updateMentorPlayerValues();
    updateConditionValues();
    updateSpecialTrainingValues(); // 初始化特別訓練
});

function updatePlayerOptions() {
    const teamFilter = document.getElementById('team').value;
    const typeFilter = document.getElementById('type').value;
    const positionFilter = document.getElementById('position-filter').value;
    const playerSelect = document.getElementById('player');

    // 清空之前的選項
    playerSelect.innerHTML = '<option value="">請選擇球員</option>';

    // 篩選球員
    const filteredPlayers = playerData.filter(player => {
        if (teamFilter && player.team !== teamFilter) return false;
        if (typeFilter && player.type !== typeFilter) return false;
        if (positionFilter && positionFilter !== "" && player.position !== positionFilter) return false; // "" 代表不指定位置，此時不篩選位置
        return true;
    });

    // 將篩選後的球員加入選單
    filteredPlayers.forEach(player => {
        const option = document.createElement('option');
        option.value = player.name;
        option.textContent = player.name;
        playerSelect.appendChild(option);
    });
    // 清空能力值
    clearStats();
}

function populateStats() {
    const selectedPlayerName = document.getElementById('player').value;
    if (!selectedPlayerName) {
        clearStats();
        return;
    }

    const selectedPlayer = playerData.find(player => player.name === selectedPlayerName);

    if (selectedPlayer) {
        const stats = selectedPlayer.base_stats;
        const rankupStats = selectedPlayer.rank_up_stats;
        const position = selectedPlayer.position;
        // 填充基本能力值
        document.getElementById('base-contact').textContent = stats.contact || 0;
        document.getElementById('base-power').textContent = stats.power || 0;
        document.getElementById('base-eye').textContent = stats.eye || 0;
        document.getElementById('base-speed').textContent = stats.speed || 0;
        document.getElementById('base-fielding').textContent = stats.fielding || 0;

        let baseAvg = 0;
        let statCount = 0;
        if (stats.contact !== undefined) { baseAvg += stats.contact; statCount++; }
        if (stats.power !== undefined) { baseAvg += stats.power; statCount++; }
        if (stats.eye !== undefined) { baseAvg += stats.eye; statCount++; }
        if (stats.speed !== undefined) { baseAvg += stats.speed; statCount++; }
        if (stats.fielding !== undefined) { baseAvg += stats.fielding; statCount++; }
        document.getElementById('base-avg').textContent = statCount > 0 ? (baseAvg / statCount).toFixed(1) : '0.0';

        // 填充階級上升量 (並放入可編輯的 input 框中)
        document.getElementById('rankup-contact').value = rankupStats.contact || 0;
        document.getElementById('rankup-power').value = rankupStats.power || 0;
        document.getElementById('rankup-eye').value = rankupStats.eye || 0;
        document.getElementById('rankup-speed').value = rankupStats.speed || 0;
        document.getElementById('rankup-fielding').value = rankupStats.fielding || 0;

        let rankupTotal = 0;
        if (rankupStats.contact !== undefined) rankupTotal += rankupStats.contact;
        if (rankupStats.power !== undefined) rankupTotal += rankupStats.power;
        if (rankupStats.eye !== undefined) rankupTotal += rankupStats.eye;
        if (rankupStats.speed !== undefined) rankupTotal += rankupStats.speed;
        if (rankupStats.fielding !== undefined) rankupTotal += rankupStats.fielding;
        document.getElementById('rankup-total').textContent = rankupTotal;


        // 根據位置顯示對應的能力值項目名稱
        updateStatLabels(position);

    } else {
        clearStats();
    }
}
function clearStats() {
    // 基本能力值
    document.getElementById('base-contact').textContent = '0';
    document.getElementById('base-power').textContent = '0';
    document.getElementById('base-eye').textContent = '0';
    document.getElementById('base-speed').textContent = '0';
    document.getElementById('base-fielding').textContent = '0';
    document.getElementById('base-avg').textContent = '0.0';
    // 階級上升量
    document.getElementById('rankup-contact').value = '0';
    document.getElementById('rankup-power').value = '0';
    document.getElementById('rankup-eye').value = '0';
    document.getElementById('rankup-speed').value = '0';
    document.getElementById('rankup-fielding').value = '0';
    document.getElementById('rankup-total').textContent = '0';
}
function updateStatLabels(position) {
    const statCellsHeader = document.querySelectorAll('thead tr:nth-child(3) th');
    let labels;
    if (['SP', 'RP', 'CP'].includes(position)) {
        labels = ['控球', '球威', '體力', '直球', '變化'];
    } else {
        labels = ['接觸', '力量', '選球', '速度', '守備'];
    }

    for (let i = 0; i < labels.length; i++) {
        statCellsHeader[i + 2].textContent = labels[i]; // 從第三個 th 開始 (項目, 接觸...)
    }
}


function updateMentorPlayerValues() {
    const selectedValue = document.getElementById('mentor-player').value;
    document.getElementById('mentor-player-contact').textContent = selectedValue;
    document.getElementById('mentor-player-power').textContent = selectedValue;
    document.getElementById('mentor-player-eye').textContent = selectedValue;
    document.getElementById('mentor-player-speed').textContent = selectedValue;
    document.getElementById('mentor-player-fielding').textContent = selectedValue;
}

function updateConditionValues() {
    const selectedValue = document.getElementById('condition').value;
    document.getElementById('condition-contact').textContent = selectedValue;
    document.getElementById('condition-power').textContent = selectedValue;
    document.getElementById('condition-eye').textContent = selectedValue;
    document.getElementById('condition-speed').textContent = selectedValue;
    document.getElementById('condition-fielding').textContent = selectedValue;
}
function updateSpecialTrainingValues() {
    const selectedValue = document.getElementById('special-training').value;
    document.getElementById('special-training-contact').textContent = selectedValue;
    document.getElementById('special-training-power').textContent = selectedValue;
    document.getElementById('special-training-eye').textContent = selectedValue;
    document.getElementById('special-training-speed').textContent = selectedValue;
    document.getElementById('special-training-fielding').textContent = selectedValue;
}
