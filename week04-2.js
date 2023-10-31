// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

let bmiHistoryData= [];
const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}
// s test
// console.log(bmiStatesData["overThin"].color);
function bmiStateText(stateTxt){
  // console.log(state);
  console.log(`您的體重${bmiStatesData[stateTxt].state}，健康指數為${bmiStatesData[stateTxt].color}`);
}


function printBmi(height, weight) {

  let bmi = (weight / (height / 100) ** 2).toFixed(2);

  console.log(bmi);

  if (bmi < 18.5) {
    let obj = {};
    obj.bmi = bmi;
    // console.log(obj);
    bmiHistoryData.push(obj);

    bmiStateText("overThin");
    // console.log(`您的體重${bmiStatesData["overThin"].state}，健康指數為${bmiStatesData["overThin"].color}`);
  } else if (bmi >= 18.5 && bmi < 24) {
    bmiStateText("normal");
    // console.log(`您的體重${bmiStatesData["normal"].state}，健康指數為${bmiStatesData["normal"].color}`);
  } else if (bmi >= 24 && bmi < 27) {
    bmiStateText("overWeight");
    // console.log(`您的體重${bmiStatesData["overWeight"].state}，健康指數為${bmiStatesData["overWeight"].color}`);
  } else if (bmi >= 27 && bmi < 30) {
    bmiStateText("mildFat");
    // console.log(`您的體重${bmiStatesData["mildFat"].state}，健康指數為${bmiStatesData["mildFat"].color}`);
  } else if (bmi >= 30 && bmi < 35) {
    bmiStateText("moderateFat");
        // console.log(`您的體重${bmiStatesData["mildFat"].state}，健康指數為${bmiStatesData["mildFat"].color}`);
  } else if (bmi >= 35) {
    bmiStateText("severeFat");
    // console.log(`您的體重${bmiStatesData["severeFat"].state}，健康指數為${bmiStatesData["severeFat"].color}`);
  } else {
    console.log(`您的數值輸入錯誤，請重新輸入`);
  }
}
function showHistoryData(){
  console.log(`您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！`);
}
printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
showHistoryData();
// printBmi(178, 90);
// printBmi(178, 110);
// printBmi(178, 130);
// printBmi("身高", "體重");
