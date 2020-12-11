const salesPeopleInfo = [
  { name: "Joe", email: "joe@test.com", sales: 53 },
  { name: "Moe", email: "moe@test.com", sales: 53 },
  { name: "Larry", email: "larry@test.com", sales: 53 },
  { name: "Homer", email: "homer@test.com", sales: 53 },
  { name: "Carl", email: "carl@test.com", sales: 53 },
];

const arrayOfEmails = [];

for (let i = 0; i < salesPeopleInfo.length; i++) {
  arrayOfEmails.push(salesPeopleInfo[i].email);
}

console.log(arrayOfEmails);
