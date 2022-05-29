const listToSort = [3, 1, 5, 7, 2, 9];
for (let i = 0; i <= listToSort.length; i++) {
  for (let j = 0; j <= listToSort.length; j++) {
    if (listToSort[j] > listToSort[j + 1]) {
      let temp = listToSort[j]; // storing data in temp variable for swaping
      listToSort[j] = listToSort[j + 1];
      listToSort[j + 1] = temp;
    }
  }
}
console.log("Sorted List ", listToSort); // final output of sorted list
