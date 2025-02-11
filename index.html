<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MLB九局職棒 球員能力值</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="container">
        <h1>MLB九局職棒 球員能力值</h1>

        <div class="selectors">
            <div class="selector">
                <label for="team">球隊:</label>
                <select id="team" onchange="updatePlayerOptions()">
                    <option value="">請選擇球隊</option>
                    <option value="NYY">NYY</option>
                    <option value="BOS">BOS</option>
                </select>
            </div>
            <div class="selector">
                <label for="type">類型:</label>
                <select id="type" onchange="updatePlayerOptions()">
                    <option value="">請選擇類型</option>
                    <option value="一般">一般</option>
                    <option value="經典">經典</option>
                    <option value="全盛">全盛</option>
                    <option value="簽名">簽名</option>
                    <option value="傳說">傳說</option>
                    <option value="史詩">史詩</option>
                </select>
            </div>
        </div>

        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th rowspan="2" class="position-header">位置</th>
                        <th colspan="5" class="player-header">球員</th>
                        <th rowspan="2" class="rank-header">階級</th>
                    </tr>
                    <tr>
                        <th>
                            <select id="position-filter" onchange="updatePlayerOptions()">
                                <option value="">不指定</option>
                                <optgroup label="打者">
                                    <option value="C">C</option>
                                    <option value="1B">1B</option>
                                    <option value="2B">2B</option>
                                    <option value="3B">3B</option>
                                    <option value="SS">SS</option>
                                    <option value="OF">OF</option>
                                    <option value="DH">DH</option>
                                </optgroup>
                                <optgroup label="投手">
                                    <option value="SP">SP</option>
                                    <option value="RP">RP</option>
                                    <option value="CP">CP</option>
                                </optgroup>
                            </select>
                        </th>
                        <th colspan="4">
                            <select id="player" onchange="populateStats(); calculateTotals()">
                                <option value="">請選擇球員</option>
                            </select>
                        </th>
                        <th>
                            <select id="rank" onchange="calculateTotals()">
                                <option value="白金">白金</option>
                                <option value="黑鑽">黑鑽</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th><input type="checkbox" checked disabled></th>
                        <th>項目</th>
                        <th>接觸</th>
                        <th>力量</th>
                        <th>選球</th>
                        <th>速度</th>
                        <th>守備</th>
                        <th>值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><input type="checkbox" checked disabled></th>
                        <td>基本能力值</td>
                        <td id="base-contact">0</td>
                        <td id="base-power">0</td>
                        <td id="base-eye">0</td>
                        <td id="base-speed">0</td>
                        <td id="base-fielding">0</td>
                        <td id="base-avg">0.0</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" checked disabled></th>
                        <td>階級上升量</td>
                        <td><input type="number" value="0" id="rankup-contact" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="rankup-power" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="rankup-eye" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="rankup-speed" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="rankup-fielding" onchange="calculateTotals()"></td>
                        <td id="rankup-total">0</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-enforce" onchange="calculateTotals()"></th>
                        <td>強化量</td>
                        <td><input type="number" value="0" id="enforce-contact" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="enforce-power" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="enforce-eye" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="enforce-speed" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="enforce-fielding" onchange="calculateTotals()"></td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-coach" onchange="calculateTotals()"></th>
                        <td>教練</td>
                        <td><input type="number" value="0" id="coach-contact" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="coach-power" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="coach-eye" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="coach-speed" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="coach-fielding" onchange="calculateTotals()"></td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-special" onchange="calculateTotals()"></th>
                        <td>特別訓練</td>
                        <td id="special-training-contact"></td>
                        <td id="special-training-power"></td>
                        <td id="special-training-eye"></td>
                        <td id="special-training-speed"></td>
                        <td id="special-training-fielding"></td>
                        <td>
                            <select id="special-training" onchange="updateSpecialTrainingValues(); calculateTotals()">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-mentor" onchange="calculateTotals()"></th>
                        <td>指導球員</td>
                        <td id="mentor-player-contact"></td>
                        <td id="mentor-player-power"></td>
                        <td id="mentor-player-eye"></td>
                        <td id="mentor-player-speed"></td>
                        <td id="mentor-player-fielding"></td>
                        <td>
                            <select id="mentor-player" onchange="updateMentorPlayerValues(); calculateTotals()">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-black" onchange="calculateTotals()"></th>
                        <td>黑鑽</td>
                        <td id="black-diamond-contact"></td>
                        <td id="black-diamond-power"></td>
                        <td id="black-diamond-eye"></td>
                        <td id="black-diamond-speed"></td>
                        <td id="black-diamond-fielding"></td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-team" onchange="calculateTotals()"></th>
                        <td>團隊加成</td>
                        <td><input type="number" value="0" id="team-contact" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="team-power" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="team-eye" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="team-speed" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="team-fielding" onchange="calculateTotals()"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">一般陣容能力值</td>
                        <td id="normal-contact">0</td>
                        <td id="normal-power">0</td>
                        <td id="normal-eye">0</td>
                        <td id="normal-speed">0</td>
                        <td id="normal-fielding">0</td>
                        <td id="normal-avg">0.0</td>
                    </tr>
                    <tr class="empty-row"><td colspan="8"></td></tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-condition" onchange="calculateTotals()"></th>
                        <td>狀態</td>
                        <td id="condition-contact"></td>
                        <td id="condition-power"></td>
                        <td id="condition-eye"></td>
                        <td id="condition-speed"></td>
                        <td id="condition-fielding"></td>
                        <td>
                            <select id="condition" onchange="updateConditionValues(); calculateTotals()">
                                <option value="-3">-3</option>
                                <option value="0" selected>0</option>
                                <option value="3">3</option>
                                <option value="6">6</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-equipment" onchange="calculateTotals()"></th>
                        <td>裝備</td>
                        <td><input type="number" value="0" id="equipment-contact" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="equipment-power" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="equipment-eye" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="equipment-speed" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="equipment-fielding" onchange="calculateTotals()"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" id="checkbox-skill" onchange="calculateTotals()"></th>
                        <td>技能</td>
                        <td><input type="number" value="0" id="skill-contact" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="skill-power" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="skill-eye" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="skill-speed" onchange="calculateTotals()"></td>
                        <td><input type="number" value="0" id="skill-fielding" onchange="calculateTotals()"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">上場能力值</td>
                        <td id="final-contact">0</td>
                        <td id="final-power">0</td>
                        <td id="final-eye">0</td>
                        <td id="final-speed">0</td>
                        <td id="final-fielding">0</td>
                        <td id="final-avg">0.0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
