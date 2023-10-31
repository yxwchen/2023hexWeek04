// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

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

function printBmi(height, weight) {

  let bmi = (weight / (height / 100) ** 2).toFixed(2);

  console.log(bmi);

  if (bmi < 18.5) {
    console.log(`您的體重${bmiStatesData["overThin"].state}，健康指數為${bmiStatesData["overThin"].color}`);
  } else if (bmi >= 18.5 && bmi < 24) {
    console.log(`您的體重${bmiStatesData["normal"].state}，健康指數為${bmiStatesData["normal"].color}`);
  } else if (bmi >= 24 && bmi < 27) {
    console.log(`您的體重${bmiStatesData["overWeight"].state}，健康指數為${bmiStatesData["overWeight"].color}`);
  } else if (bmi >= 27 && bmi < 30) {
    console.log(`您的體重${bmiStatesData["mildFat"].state}，健康指數為${bmiStatesData["mildFat"].color}`);
  } else if (bmi >= 30 && bmi < 35) {
    console.log(`您的體重${bmiStatesData["moderateFat"].state}，健康指數為${bmiStatesData["moderateFat"].color}`);
  } else if (bmi >= 35) {
    console.log(`您的體重${bmiStatesData["severeFat"].state}，健康指數為${bmiStatesData["severeFat"].color}`);
  } else {
    console.log(`您的數值輸入錯誤，請重新輸入`);
  }
}
printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高", "體重");