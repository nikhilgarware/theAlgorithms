const givenList = [10, 3, 45, 90, 8, 9, 1];
const elementToFind = 1;
for (let i = 0; i <= givenList.length; i++) {
  if (elementToFind === givenList[i]) {
    console.log("Element Found at index", i);
  }
}
