const members = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Evan",
  "Fiona",
  "George",
  "Hannah",
];

let purchaseRecords = [];
let totalPrice = 0;

function addPurchaseRecord(memberName, coursesNum) {
  if (
    typeof memberName !== "string" ||
    typeof coursesNum !== "number" ||
    memberName.length == 0 ||
    coursesNum < 0 ||
    !memberName ||
    !coursesNum
  ) {
    console.error("輸入錯誤，請輸入有效的會員名稱和課程數量。");
    return;
  }

  let price = 0;

  if (coursesNum > 20) {
    price = 1100;
  } else if (10 < coursesNum && coursesNum < 21) {
    price = 1300;
  } else {
    price = 1500;
  }

  const record = {
    name: memberName,
    courses: coursesNum,
    price: price,
    totalPrice: price * coursesNum,
  };

  purchaseRecords.push(record);

  console.log(`新增購買記錄成功！會員 ${record.name} 購買 ${record.courses} 堂課，
  總金額為 ${record.totalPrice} 元。`);

  calculateTotalPrice(record.totalPrice);
}

function calculateTotalPrice(total) {
  totalPrice += total;
  console.log(`目前總營業額為 ${totalPrice} 元`);
}

function filterNoPurchaseMember() {
  let membersWithoutCourse = [];
  members.filter((member) => {
    const purchased = purchaseRecords.find((record) => record.name === member);
    if (!purchased) {
      membersWithoutCourse.push(member);
    }
  });

  let membersWithoutCourseList = membersWithoutCourse.reduce((acc, num) => acc + "、" + num);
  console.log(`未購買課程的會員有：${membersWithoutCourseList}`);
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");

calculateTotalPrice();
filterNoPurchaseMember();
