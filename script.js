let playerData = []; // 用於儲存從 data.json 讀取的球員資料

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            playerData = data;
            updatePlayerOptions(); // 初次載入頁面時更新球員選單
        })
        .catch(error => console.error('Error loading data.json:', error));
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
}
