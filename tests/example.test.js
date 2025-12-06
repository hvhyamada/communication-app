function sum(a, b) {
  return a + b;
}

function testSum() {
  const result = sum(2, 3);

  if (result !== 5) {
    throw new Error("sum(2, 3) повинно бути 5, отримано: " + result);
  }
}

testSum();
