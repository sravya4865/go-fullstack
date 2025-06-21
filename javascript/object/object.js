let user = {
  name: "John",
  surname: "Smith"
};

user.name = "Pete";
delete user.name;

let schedule = {};

function isEmpty(schedule) {
  for(let key in schedule) {
    return false;
  }
  return true;
}

alert(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
function sumSalaries(salaries) {
  for (let key in salaries) {
    sum = sum + salaries[key];
  }
  return sum;
}

alert(sumSalaries(salaries));