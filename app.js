// write code here

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sumKeys = Object.keys(salaries).reduce((sum, key) => sum + salaries[key], 0);
console.log("ผลรวมโดยใช้ Object.keys:", sumKeys);

let sumValues = Object.values(salaries).reduce((sum, value) => sum + value, 0);
console.log("ผลรวมโดยใช้ Object.values:", sumValues);

let sumEntries = Object.entries(salaries).reduce((sum, [key, value]) => sum + value, 0);
console.log("ผลรวมโดยใช้ Object.entries:", sumEntries);
