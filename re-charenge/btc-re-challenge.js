//テストコード
//テストコード
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("TEST PASSED.");
  } else {
    console.error("TEST FAILED.");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

//reverseメソッドを作る
Array.prototype.customReverse = function () {
  for (let i = 0; i < Math.floor(this.length / 2); i++) {
    const temp = this[i];
    this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = temp;
  }
  return this;
};

// arr.customReverse();
// console.log(arr); // Output: [5, 4, 3, 2, 1]

// const reversedArr = customReverse(arr);
// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]

// customMapメソッドをArray.prototypeに追加する
Array.prototype.customMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// customSliceメソッドを作る
Array.prototype.customSlice = function (start, end) {
  const length = this.length;
  let sliced = [];

  // startが負の場合、負のインデックスを正のインデックスに変換
  if (start < 0) {
    start = length + start;
    start = start < 0 ? 0 : start; // 負のインデックスが文字列の先頭よりも前になる場合は、0に設定
  }

  // endが省略された場合、文字列の末尾までとする
  if (end === undefined) {
    end = length;
  }
  // endが負の場合、負のインデックスを正のインデックスに変換
  else if (end < 0) {
    end = length + end;
    end = end < 0 ? 0 : end; // 負のインデックスが文字列の先頭よりも前になる場合は、0に設定
  }

  // startとendの範囲で配列を切り取る
  for (let i = start; i < end && i < length; i++) {
    sliced.push(this[i]);
  }

  return sliced;
};

//someメソッドを作る
Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

//findメソッドを作る
Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

// const a = [1, 2, 3, 4, 5];
// console.log(a.customSlice(0, 3));

// console.log("-------1------");
// //1.swap という関数を作成してください。 この関数はオブジェクトを引数にとり、キー・値のペアを反転させたオブジェクトを返します。

// // ここにコードを書きましょう
// const swap = (obj) => {
//   const swapped = {};
//   for (const key in obj) {
//     if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
//       return "Type of Value doesn't require Array or Object";
//     } else {
//       swapped[obj[key]] = key;
//     }
//   }
//   return swapped;
// };

// test(swap({ a: 1, b: 2, c: 3 }), { 1: "a", 2: "b", 3: "c" });
// test(swap({ 1: 1, 2: 2, 3: 3 }), { 1: "1", 2: "2", 3: "3" });
// test(swap({ a: "b", b: "c", c: "a" }), { b: "a", c: "b", a: "c" });
// test(swap({ a: true, b: false, c: false }), {
//   true: "a",
//   false: "b",
//   false: "c",
// });
// test(
//   swap({ a: [1, 2, 3], b: ["a", "b", "c"], c: 3 }),

//   "Type of Value doesn't require Array or Object"
// );
// test(
//   swap({ a: { 1: "a", 2: "b", 3: "c" }, b: ["a", "b", "c"], c: 3 }),

//   "Type of Value doesn't require Array or Object"
// );

// console.log("------2------");

// //2. calculate という関数を作成してください。
// //この関数は演算の種類と数値を引数にとり、演算の種類に応じた計算結果を返します。
// //演算の種類は、ADD（足し算）, SUBTRACT（引き算）, MULTIPLY（掛け算）, DIVIDE（割り算） とします。

// // ここにコードを書きましょう
// function calculate(methodOfCalculate, num1, num2) {
//   if (arguments.length !== 3) {
//     return "Arguments are invalid";
//   } else {
//     if (typeof arguments[1] !== "number" || typeof arguments[2] !== "number") {
//       return "Arguments are invalid";
//     } else {
//       switch (methodOfCalculate) {
//         case "ADD":
//           return num1 + num2;
//         case "SUBTRACT":
//           return num1 - num2;
//         case "MULTIPLY":
//           return num1 * num2;
//         case "DIVIDE":
//           if (num2 === 0) {
//             return "Can't divide with 0";
//           } else {
//             return num1 / num2;
//           }
//         default:
//           return "Invalid operation";
//       }
//     }
//   }
// }

// test(calculate("ADD", 1, 1), 2); // 2
// test(calculate("SUBTRACT", 4, 1), 3); // 3
// test(calculate("MULTIPLY", 2, 2), 4); // 4
// test(calculate("DIVIDE", 10, 2), 5); // 5
// test(calculate("add", 10, 2), "Invalid operation"); // 5
// test(calculate("SUBTRACT", 1, 2), -1); // 5
// test(calculate("掛け算", 3, 2), "Invalid operation"); // 5
// test(calculate("DIVIDE", "10", 2), "Arguments are invalid"); // 5
// test(calculate("MULTIPLY", 10, Infinity), Infinity); // 5
// test(calculate("DIVIDE", 1, 0), "Can't divide with 0"); // 5

// console.log("------3------");

// //3.makeGrid という関数を作成してください。
// //この関数は数値となんらかの値（文字列や数値）を引数にとり、n x n のグリッド（マス）を作成して返します。

// // ここにコードを書きましょう
// const makeGrid = (n, value) => {
//   if (typeof n !== "number") {
//     return "Put a number for first argument";
//   } else {
//     const grid = [];
//     for (let i = 0; i < n; i++) {
//       const row = [];
//       for (let j = 0; j < n; j++) {
//         row.push(value);
//       }
//       grid.push(row);
//     }
//     return grid;
//   }
// };

// test(makeGrid(2, "x"), [
//   ["x", "x"],
//   ["x", "x"],
// ]);
// test(makeGrid(1, "x"), [["x"]]);
// test(makeGrid(5, 5), [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
// ]);
// test(makeGrid(3, true), [
//   [true, true, true],
//   [true, true, true],
//   [true, true, true],
// ]);
// test(makeGrid(2, ["a", "b"]), [
//   [
//     ["a", "b"],
//     ["a", "b"],
//   ],
//   [
//     ["a", "b"],
//     ["a", "b"],
//   ],
// ]);
// test(makeGrid("a", ["a", "b"]), "Put a number for first argument");

// console.log("------4------");
// //4. report という関数を作成してください。
// //この関数は配列を引数にとり、各生徒の平均点数を計算した結果を返します。
// //与えられる引数の構造、または戻り値の構造は例文と同じだとしてください。

// // ここにコードを書きましょう
// const report = (students) => {
//   let result = [];
//   for (let i = 0; i < students.length; i++) {
//     const eachStudent = {};
//     let sumGrade = 0;
//     for (let j = 0; j < students[i].grades.length; j++) {
//       sumGrade += students[i].grades[j];
//     }
//     eachStudent.name = students[i].name;
//     eachStudent.averageGrade = sumGrade / students[i].grades.length;
//     result.push(eachStudent);
//   }
//   return result;
// };

// const students = [
//   {
//     name: "A",
//     grades: [10, 20, 30],
//   },
//   {
//     name: "B",
//     grades: [40, 50, 60],
//   },
//   {
//     name: "C",
//     grades: [70, 80, 90],
//   },
// ];

// test(report(students), [
//   { name: "A", averageGrade: 20 },
//   { name: "B", averageGrade: 50 },
//   { name: "C", averageGrade: 80 },
// ]);
// // [
// //   { name: 'A', averageGrade: 20 },
// //   { name: 'B', averageGrade: 50 },
// //   { name: 'C', averageGrade: 80 }
// // ]

// console.log("------5------");
// //5. double という関数を作成してください。
// //この関数は配列を引数にとり、配列の要素を2倍にした新しい配列を返します。
// //この問題では JavaScript ネイティブメソッドの .map を使用してください。

// // ここにコードを書きましょう
// const double = (arr) => {
//   let isntNumber = [];
//   arr.map((item) =>
//     typeof item !== "number" ? isntNumber.push(item) : (isntNumber = [])
//   );
//   return isntNumber.length
//     ? "The value of array only accepts number"
//     : arr.map((item) => item * 2);
// };

// test(double([1, 2, 3]), [2, 4, 6]); // [2, 4, 6]
// test(double(["1", "2", "3"]), "The value of array only accepts number");
// test(double([1, 2, Infinity]), [2, 4, Infinity]); // [2, 4, 6]

// console.log("------6------");
// //6. repeat と when という関数を作成してください。
// //repeat 関数は二つの引数をとり、n回コールバックを実行します。 n...number, callback...function
// //when 関数は二つの引数をとり、条件を満たした場合にのみ、コールバックを実行します。 condition...equation, callback...function
// //repeat と when を組み合わせて実行できるように実装してください。

// // ここにコードを書きましょう
// const repeat = (n, callback) => {
//   if (typeof n !== "number") {
//     console.log("Put a number");
//   } else {
//     for (let i = 0; i < n; i++) {
//       callback(i);
//     }
//   }
// };

// const when = (condition, callback) => {
//   if (condition) {
//     callback();
//   }
// };

// repeat(3, (n) => {
//   when(n % 2 === 0, () => {
//     console.log(`${n} is even`);
//   });
// });
// repeat(7, (n) => {
//   when(n % 2 !== 0, () => {
//     console.log(`${n} is odd`);
//   });
// });
// repeat(8, (n) => {
//   when(n % 4 === 0, () => {
//     console.log(`${n} is multiple of 4`);
//   });
// });
// repeat("3", (n) => {
//   when(n % 2 === 0, () => {
//     console.log(`${n} is even`);
//   });
// });

// console.log("------7------");
// //7. reverse という関数を作成してください。
// //この関数は配列を引数にとり、配列の値を直接反転させ、配列への参照を返します。
// //配列の真ん中の値より前の数字を順番に取り出し、反転位置の値と入れ替える

// // ここにコードを書きましょう
// const reverse = (arr) => {
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     const temporary = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temporary;
//   }
//   return arr;
// };

// // const arr1 = [1, 2, 3];
// // const arr2 = [1, 2, 3, 4, 5];
// // const arr3 = [1, 2, "center", 4, 5];
// // const arr4 = [1, 2, 3, 4, 5, 6];
// // const arr5 = [10, 8, 6, 4, 2];
// // const arr6 = ["ONE", "TWO", "THREE"];

// // test(reverse(arr1), [3, 2, 1]);
// // test(reverse(arr2), [5, 4, 3, 2, 1]);
// // test(reverse(arr3), [5, 4, "center", 2, 1]);
// // test(reverse(arr4), [6, 5, 4, 3, 2, 1]);
// // test(reverse(arr5), [2, 4, 6, 8, 10]);
// // test(reverse(arr6), ["THREE", "TWO", "ONE"]);

// console.log("------8------");

// //8. range という関数を作成してください。
// //この関数は三つの引数をとり、開始から終了までの数値の配列を返します。
// //任意の数値を渡し、n段飛ばしで開始から終了までの数値の配列を返すことも可能です。
// //終了のみを指定した場合は、0を開始とします。

// // ここにコードを書きましょう
// const range = (start, end, step) => {
//   if (end === undefined) {
//     end = start;
//     start = 0;
//   }
//   const result = [];

//   if (start < end) {
//     if (step === undefined) {
//       step = 1;
//     } else if (step < 0) {
//       return "Invalied ERROR";
//     }
//     for (let i = start; i < end; i += step) {
//       result.push(i);
//     }
//   } else if (start > end) {
//     if (step === undefined) {
//       step = -1;
//     } else if (step > 0) {
//       return "Invalied ERROR";
//     }
//     for (let i = start; i > end; i += step) {
//       result.push(i);
//     }
//   }

//   return result;
// };
// test(range(0, 3), [0, 1, 2]); // 0から3まで、n段が指定されていないときはn = 1
// test(range(0, 6, 2), [0, 2, 4]); // 0から6まで、n = 2なので、2段飛ばし（終わりの値6は含めない）
// test(range(3), [0, 1, 2]); // 引数がひとつの時は、その数を終わりの数字とみなす。その場合、開始は0から --> 0から3まで　1段飛ばし
// test(range(0, -3), [0, -1, -2]); // 0から-3まで　開始と終わりが負の方向で指定されている場合は、デフォルト―1段飛ばしする
// test(range(2, -6, -2), [2, 0, -2, -4]); // 2から‐6まで　‐2段飛ばし
// test(range(0, 0, 2), []); //
// test(range(0), []); //
// test(range(0, -1), [0]); //
// test(range(0, 9, -2), "Invalied ERROR"); //
// test(range(0, -9, 2), "Invalied ERROR"); //

//TODO:
console.log("------9------");
//9. splice という関数を作成してください。
//この関数は JavaScript ネイティブメソッドの .splice と同じ処理を行います。
//ただし、配列.splice(start, deleteCount, item, ...) ではなく、splice(配列, start, deleteCount, item, ...) で実行します。
//実行内容が不明な場合は、MDN を確認し、同じ処理になるように実装してください。

//基本の動き↓
//arrayのstart番目の値から、順にdeleteCount個値を削除する
//--> メソッドが使えないので、特定の要素を削除する関数を作る
//削除した場所（arrayのstart位置）に...itemsを挿入する
//--> 特定の要素を指定した場所に挿入する関数を作る

//特定の要素を削除する関数
const removeElementFromArray = (array, removeElement) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== removeElement) {
      newArray.push(array[i]);
      //   console.log(array[i] + removeElement);
    }
  }
  return newArray;
};

// let originalArray = ["a", "b", "c", "d", "e"];
// let removedArray = removeElementFromArray(originalArray, "b");
// console.log(removedArray); // 出力は ["a", "c", "d", "e"]

//特定の要素を指定した場所に挿入する関数
function insertElementIntoArray(array, index, inputElement) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      newArray.push(inputElement);
    }
    newArray.push(array[i]);
  }
  return newArray;
}

let array = ["a", "b", "c", "d", "e"];
array.splice(1, 2, "a");
console.log("array");
console.log(array);
// let originalArray2 = [1, 2, 4, 5];
// let insertedArray = insertElementIntoArray(originalArray2, 2, 3);
// console.log(insertedArray); // 出力は [1, 2, 3, 4, 5]

// ここにコードを書きましょう
function splice(arr, start, deleteCount, ...items) {
  //削除する部分
  let removed = [];

  //最後に付け足す部分
  let tail = [];

  if (start >= 0) {
    removed = arr.customSlice(start, start + deleteCount);
    console.log(removed);
    tail = arr.customSlice(start + deleteCount);
    console.log(tail);

    arr.length = start;
    console.log(arr);
    arr.push(...items, ...tail);
  } else {
    removed = arr.customSlice(
      start + arr.length,
      start + arr.length + deleteCount
    );
    console.log(removed);
    tail = arr.customSlice(start + arr.length + deleteCount);
    console.log(tail);
    arr.length = start + arr.length;
    console.log(arr);
    arr.push(...items, ...tail);
  }

  return removed;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3];

splice(arr1, 1, 0, "changed");
splice(arr2, 1, 1, "changed");
splice(arr3, -1, 1, "changed");

// console.log(arr1); // [1, 'changed', 2, 3]
// console.log(arr2); // [1, 'changed', 3]
test(arr1, [1, "changed", 2, 3]);
test(arr2, [1, "changed", 3]);
test(arr3, [1, 2, "changed"]);

//TODO:
console.log("------10------");
//10. limited という関数を作成してください。
//この関数は n回のみ実行できる関数を生成します。
//n回を超えた場合は、false を返します。

//実行された回数を数える、nがその回数を超えたらfalseを返す
//limitedは無名関数を返す
//無名関数はfuncの実行結果を返す

// ここにコードを書きましょう
const limited = (func, n) => {
  let runningCount = 0;
  //   console.log(runningCount);
  return function (...argument) {
    if (runningCount < n) {
      runningCount++;
      return func(...argument);
    } else {
      return false;
    }
    // else {
    //   console.log(false);
    //   return false;
    // }
  };
};

const helloOnce = limited(() => console.log("hello"), 1);
const addTwice = limited((n) => n + 1, 2);

console.log(helloOnce()); // hello
test(helloOnce(), false); // false

test(addTwice(1), 2); // 2
test(addTwice(2), 3); // 3
test(addTwice(3), false); // false

console.log("------11------");
//11. isPalindrome という関数を作成してください。
//この関数は引数として文字列をとり、回文かを判定して真偽値を返します。
//大文字・小文字は区別されます。
//上から読んでも下から読んでも同じになる文句を回文と言います。

// ここにコードを書きましょう
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    return str[i] === str[str.length - 1 - i];
    //FIXME:これではだめか、テストケース増やして調査する

    // return !(str[i] !== str[str.length - 1 - i]);
  }
  return true; // ループを抜けた場合、すべての文字が一致したのでtrueを返します
}

test(isPalindrome("pop"), true); // true
test(isPalindrome("wow"), true); // true
test(isPalindrome("Pop"), false); // false
test(isPalindrome("Wow"), false); // false
test(isPalindrome("AYAYA"), true); // false
test(isPalindrome("121212"), false); // false
test(isPalindrome("Ww"), false); // false

//TODO:問題の意味がよくわからん
console.log("------12------");
//12. conditions という関数を作成してください。
//この関数は与えられた一つ以上の条件に一致した場合にのみ関数を実行し、
//その実行結果を返します。
//条件を満たさない場合は、false を返します。
//なお、条件数に制限はありません。

const conditions = (...conditionFuncs) => {
  return (n) => {
    const results = conditionFuncs.customMap((func) => func(n));
    return results.customSome((result) => result === false)
      ? false
      : results.customFind((result) => typeof result === "number") || true;
    // (!results.customSome((result) => result === false) &&
    //   results.customFind((result) => typeof result === "number")) ||
    // false
  };
};

const addOne = (n) => n + 1;
const isOverZero = (n) => n > 0;
const isOverFive = (n) => n > 5;

const condition1 = conditions(addOne, isOverZero);
const condition2 = conditions(addOne, isOverZero, isOverFive);
const condition3 = conditions(isOverZero, isOverFive);

test(condition1(1), 2); // 2
test(condition1(-10), false); // false
test(condition2(10), 11); // 11
test(condition2(1), false); // false
test(condition3(6), true); // true
test(condition3(3), false); // false

console.log("------13------");
//13. rotate という関数を作成してください。
//この関数は配列を引数にとり、
//条件に応じて（右か左に）値を直接 n回転させ、配列への参照を返します。
//その時、配列の端の値は反対側に回転されます。
//第二引数の direction の値は RIGHT または LEFT になります。

//direction ... 配列の右側か左側か。count ...動かす個数
//FIXME:テストいろいろ試す
// ここにコードを書きましょう
const rotate = (array, { direction, count }) => {
  if (direction === "RIGHT") {
    for (let i = 0; i < count; i++) {
      array.unshift(array.pop());
    }
  } else if (direction === "LEFT") {
    for (let i = 0; i < count; i++) {
      array.push(array.shift());
    }
  }
};

const arr4 = [1, 2, 3];
const arr5 = [1, 2, 3, 4, 5];
const arr6 = [1, 2, 3, 4, 5];
const arr7 = [1, 2, 3, 4, 5];

rotate(arr4, { direction: "RIGHT", count: 1 });
rotate(arr5, { direction: "LEFT", count: 2 });
rotate(arr6, { direction: "RIGHT", count: 3 });
rotate(arr7, { direction: "LEFT", count: 0 });
test(arr4, [3, 1, 2]);
test(arr5, [3, 4, 5, 1, 2]);
test(arr6, [3, 4, 5, 1, 2]);
test(arr7, [1, 2, 3, 4, 5]);

console.log("------14------");
// TODO:テスト増やす
//14. inOrder という関数を作成してください。
//この関数はコレクション（配列またはオブジェクト）を引数にとり、
//条件に応じて（昇順か降順に）値の位置を直接入れ替え、コレクションへの参照を返します。
//第二引数の条件は ASC（昇順）または DESC（降順）になります。

//ソート関数を作る
//昇順
function sortAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//降順
function sortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ここにコードを書きましょう
const inOrder = (collection, order) => {
  if (Array.isArray(collection)) {
    switch (order) {
      case "ASC":
        return sortAscending(collection);
      case "DESC":
        return sortDescending(collection);
      default:
        return;
    }
  } else if (typeof collection === "object") {
    let arrayOfValue = [];
    for (const key in collection) {
      arrayOfValue.push(collection[key]);
      // console.log(arrayOfValue);
      switch (order) {
        case "ASC":
          sortAscending(arrayOfValue);
          break;
        case "DESC":
          sortDescending(arrayOfValue);
          break;
      }
    }

    // console.log(arrayOfValue);

    let i = 0;
    for (const key in collection) {
      collection[key] = arrayOfValue[i];
      // console.log(arrayOfValue[i]);
      ++i;
    }
    return collection;
  } else {
    return "collection type should be Array or Object";
  }
};

const arr8 = [3, 2, 1];
const arr9 = [1, 2, 3];
const arr10 = ["1", "2", "3"];
const obj3 = { a: 3, b: 2, c: 1 };
const obj4 = { a: 1, b: 2, c: 3 };
const obj5 = { a: "a", b: "b", c: "c" };

inOrder(arr8, "ASC");
inOrder(arr9, "DESC");
inOrder(arr10, "DESC");
inOrder(obj3, "ASC");
inOrder(obj4, "DESC");
inOrder(obj5, "DESC");

test(arr8, [1, 2, 3]); // [1, 2, 3]
test(arr9, [3, 2, 1]); // [3, 2, 1]
test(arr10, ["3", "2", "1"]); // ["3", "2", "1"]
test(obj3, { a: 1, b: 2, c: 3 }); // { a: 1, b: 2, c: 3 }
test(obj4, { a: 3, b: 2, c: 1 }); // { a: 3, b: 2, c: 1 }
test(obj5, { a: "c", b: "b", c: "a" }); // { a: "c", b: "b", c: "a" }

console.log("------15------");
// TODO:数字が二桁になると、実装できない、、、
//15. decrypt という関数を作成してください。
//この関数は暗号化された文字列を引数にとり、複合化した文字列を返します。
//暗号化された文字列には、単語の位置を示す番号が含まれています。
//番号を取り除いた文字列に書き換え、正しい順番で複合化してください。
//暗号化された文字列に文字数の制限はありません。

//文字列で区切るための関数を定義
function splitWords(sentence) {
  const words = [];
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    // console.log(word);
    const char = sentence[i];
    if (char === " ") {
      words.push(word);
      // console.log(word);
      word = "";
    } else {
      word += char;
    }
  }
  if (word !== "") {
    words.push(word);
  }
  return words;
}

//sliceメソッドを作る
function customSlice(str, start, end) {
  const length = str.length;
  let sliced = "";

  // startが負の場合、負のインデックスを正のインデックスに変換
  if (start < 0) {
    start = length + start;
    start = start < 0 ? 0 : start; // 負のインデックスが文字列の先頭よりも前になる場合は、0に設定
  }

  // endが省略された場合、文字列の末尾までとする
  if (end === undefined) {
    end = length;
  }
  // endが負の場合、負のインデックスを正のインデックスに変換
  else if (end < 0) {
    end = length + end;
    end = end < 0 ? 0 : end; // 負のインデックスが文字列の先頭よりも前になる場合は、0に設定
  }

  // startとendの範囲で文字列を切り取る
  for (let i = start; i < end && i < length; i++) {
    sliced += str[i];
  }

  return sliced;
}

//joinメソッドを作る
function customJoin(array, separator) {
  // 空文字列を初期化
  let result = "";

  // 配列の要素を結合
  for (let i = 0; i < array.length; i++) {
    // 最後の要素以外はセパレーターを付けて結合
    if (i !== 0) {
      result += separator;
    }
    // 要素を結合
    result += array[i];
  }

  return result;
}

// const sentence = "cod3e m1y se2cret";
// const words = splitWords(sentence);
// console.log(words); // ["cod3e", "m1y", "se2cret"]
// ここにコードを書きましょう
// const decrypt = (password) => {
//   const words = splitWords(password);
//   // console.log(words);
//   const decryptedWords = [];
//   for (const word of words) {
//     for (let i = 0; i < word.length; i++) {
//       if (!isNaN(word[i])) {
//         const index = word[i];
//         // console.log(index);
//         decryptedWords[index - 1] =
//           customSlice(word, 0, i) + customSlice(word, i + 1); // 数字を削除
//         break;
//       }
//     }
//   }
//   // console.log(decryptedWords);
//   // console.log(customJoin(decryptedWords, " "));
//   return customJoin(decryptedWords, " ");
// };

// function customSwap(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   return [a, b];
// }

// // 使い方の例
// let x = 5;
// let y = 10;
// [x, y] = customSwap(x, y);
// console.log(x, y); // 出力は "10 5"

function customReplaceString(originalString, pattern, replacementWord) {
  let result = "";
  let found = false;

  for (let i = 0; i < originalString.length; i++) {
    let currentChar = originalString[i];
    let isDigit = "0" <= currentChar && currentChar <= "9";

    if (isDigit) {
      // 数字が見つかった場合、置き換える言葉を結果に追加
      result += replacementWord;
      found = true;
    } else {
      // 数字でない場合、元の文字列を結果に追加
      result += currentChar;
    }
  }

  // 数字が見つからなかった場合、元の文字列をそのまま返す
  if (!found) {
    return originalString;
  }

  return result;
}

// 使い方の例
const originalString = "ap1le";
const replacedString = customReplaceString(originalString, /\D/g, "");
console.log(replacedString); // 出力は "aorangeple"

console.log("removeNonDigits");
function removeNonDigits(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (/\d/.test(word[i])) {
      result += word[i];
    }
  }
  return result;
}

// 使用例
const word = "abc123def456ghi";
const cleanedWord = removeNonDigits(word);
console.log(cleanedWord); // 出力: "123456"

function removeDigits(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char < "0" || char > "9") {
      result += char;
    }
  }
  return result;
}

// 使用例
const word2 = "abc123def456ghi";
const cleanedWord2 = removeDigits(word2);
console.log(cleanedWord2); // 出力: "abcdefghi"

function decrypt(secret) {
  // 文字列をスペースで分割して単語の配列を取得
  const words = splitWords(secret);

  let result = [];
  // 単語の配列を順番に処理
  words.customMap((word) => {
    // 単語から数字を取り除いて返す
    // console.log(word.replace(/\d/g, ""));
    // const num = parseInt(word.replace(/\D/g, ""));
    const num = parseInt(removeNonDigits(word));
    // const num = parseInt(customReplaceString(word, /\D/g, ""));
    // console.log(num);
    result[num - 1] = removeDigits(word);
    // return word.replace(/\d/g, "");
  });
  // console.log(result);

  // 複合化された文字列を返す
  return result.join(" ");
}

const secret1 = "worl2d h1ello";
const secret2 = "cod3e m1y se2cret";
const secret3 =
  "very1 very2 very3 very4 very5 very6 very7 very8 very9 secret10";

test(decrypt(secret1), "hello world"); // hello world
test(decrypt(secret2), "my secret code"); // my secret code
test(decrypt(secret3), "very very very very very very very very very secret"); // very very very very very very very very very secret

//TODO:もう少しテスト書いて、いろんなパターンで試す。
console.log("------16------");
//16. emailService という関数を作成してください。
//この関数は擬似的な Eメールサービスを作成するための関数です。
//以下の各機能と動作を確認し、実装してください。
//引数に渡す動作名・プロパティ・構造（例：CREATE_ACCOUNT, { accountId: ..., emailId: ... }）や、
//戻り値のプロパティ・構造（例：.emailAddress, { id: ..., name: ...}）
//は例文と同じものにしてください。
//なお、この問題では JavaScript ネイティブメソッドの制限はありませんが、
//グローバル変数の使用は禁止です。
//また、この問題ではどのようなデータモデル（どうデータを整理して格納するか）を
//問題から汲み取って進めてください。

// 動作：

// アカウント作成 - CREATE_ACCOUNT
// アカウント検索 - GET_ACCOUNT
// アカウント削除 - DELETE_ACCOUNT
// メール作成 - CREATE_EMAIL
// メール検索 - GET_EMAIL
// メール削除 - DELETE_EMAIL
// メールの宛先別検索 - GET_EMAIL_BY_SENT_TO
// メールのタイトル別検索 - GET_EMAIL_BY_TITLE
// ここにコードを書きましょう

//emailServiceは関数を返す
//emailServiceで返された関数はemailという変数として定義される。
//emailは引数を二つ持ち、一つ目にはaction名、二つ目はdataが入る。

//accountsのデータ
//{
//   id: 1,
//   name: "TMC",
//   emailAddress: "tmc@email-service.com",
// }

//emailsのデータ
// {
//   id: 1,
//   from: "tmc@email-service.com",
//   to: "dig@email-service.com",
//   title: "Bootcamp",
//   body: "I want to join this bootcamp",
// };

const accounts = [];
const emails = [];
const emailService = () => {
  // const findAccountIndexById = (id) => {
  //   return accounts.findIndex((account) => account.id === id);
  // };

  // const findEmailsByAccountId = (accountId) => {
  //   return emails.filter(
  //     (email) => email.to === accounts[accountId - 1].emailAddress
  //   );
  // };

  //メールの操作をするのは、アカウント保持者であることが前提
  //何回も登場するので、関数定義する
  const findAccount = (id) => {
    return accounts.find((account) => account.id === id);
  };

  return function (action, data) {
    switch (action) {
      //dataがaccountsの中になければ、追加してtrueを返す。あれば、falseを返す。
      case "CREATE_ACCOUNT":
        if (!accounts.some((account) => account.id === data.id)) {
          accounts.push(data);
          return true;
        } else {
          return false;
        }

      //dataの指定されたidをもつ要素をaccountsの中から引っ張ってくる。
      //引っ張ってきた要素に、email:[]の情報をつけて、返す。
      //emailの配列の要素には、emailsのfromとaccounts(data.id)のemailAddressが一致する要素をemailsから探して入れる
      //idがなければfalseを返す。
      case "GET_ACCOUNT":
        const accountIndex = accounts.findIndex(
          (account) => account.id === data.id
        );
        // console.log(accountIndex);
        return accountIndex !== -1
          ? {
              ...accounts[accountIndex],
              email: emails.filter(
                (email) => email.from === accounts[accountIndex].emailAddress
              ),
            }
          : false;

      //指定したユーザーのindexをaccountsから取得して、
      //存在すれば、削除処理してtrueを返す。
      //存在しなければ、falseを返す。
      case "DELETE_ACCOUNT":
        const findAccountIndexById = accounts.findIndex(
          (account) => account.id === data.id
        );
        if (findAccountIndexById !== -1) {
          accounts.splice(findAccountIndexById, 1);
          return true;
        } else {
          return false;
        }

      //CREATE_ACCOUNTとほぼ一緒
      case "CREATE_EMAIL":
        if (!emails.some((email) => email.id === data.id)) {
          emails.push(data);
          return true;
        } else {
          return false;
        }

      //data.idのユーザーをaccountsから引っ張ってくる。
      //引っ張ってきたユーザーのメールアドレスと同じメールアドレスから送られたメールを返す
      //(メールがなかった場合は空の配列が返る)
      //data.idのユーザーがaccountsに存在しなかった場合、falseを返す。
      case "GET_EMAIL":
        // const findAccount = accounts.find((account) => account.id === data.id);
        return findAccount(data.id)
          ? emails.filter(
              (email) => email.from === findAccount(data.id).emailAddress
            )
          : false;

      //GET_EMAILとほぼ一緒。
      //指定した宛先のメールを返す.
      //data.idのユーザーがaccountsに存在しないまたは、emailsに指定した宛先のメールがない場合、false
      case "GET_EMAIL_BY_SENT_TO":
        // const findAccount2 = accounts.find((account) => account.id === data.to);
        return findAccount(data.to) && findAccount(data.id)
          ? emails.filter(
              (email) => email.to === findAccount(data.to).emailAddress
            )
          : false;

      //GET_EMAIL_BY_SENT_TOとほぼ一緒。
      //data.idのユーザーがaccountsに存在しないまたは、emailsに指定したタイトルのメールがない場合、false
      case "GET_EMAIL_BY_TITLE":
        const findEmailByTitle = emails.find(
          (email) => email.title === data.title
        );

        return findAccount(data.id) && findEmailByTitle
          ? emails.filter((email) => email.title === data.title)
          : false;

      //削除したいメールのindexをemailsから取得する。
      //indexが存在する（index !== -1）かつ、ユーザーが存在すれば、削除して、trueを返す。
      //メールがないまたは、ユーザーが存在しない場合、falseを返す。
      case "DELETE_EMAIL":
        const findEmailIndexByEmailId = emails.findIndex(
          (email) => email.id === data.emailId
        );
        if (findAccount(data.accountId) && findEmailIndexByEmailId !== -1) {
          emails.splice(findEmailIndexByEmailId, 1);
          return true;
        } else {
          return false;
        }
    }
  };
  // return (action, data) => {
  //   switch (action) {
  //     case "CREATE_ACCOUNT":
  //       if (
  //         !accounts.some(
  //           (account) => account.emailAddress === data.emailAddress
  //         )
  //       ) {
  //         accounts.push(data);
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     case "GET_ACCOUNT":
  //       const accountIndex = findAccountIndexById(data.id);
  //       return accountIndex !== -1
  //         ? {
  //             ...accounts[accountIndex],
  //             email: findEmailsByAccountId(data.id),
  //           }
  //         : false;
  //     case "DELETE_ACCOUNT":
  //       const indexToDelete = findAccountIndexById(data.id);
  //       if (indexToDelete !== -1) {
  //         accounts.splice(indexToDelete, 1);
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     case "CREATE_EMAIL":
  //       emails.push(data);
  //       return true;
  //     case "GET_EMAIL":
  //       return emails.filter(
  //         (email) => email.from === accounts[data.id - 1].emailAddress
  //       );
  //     case "DELETE_EMAIL":
  //       const emailIndexToDelete = emails.findIndex(
  //         (email) =>
  //           email.id === data.emailId &&
  //           email.from === accounts[data.accountId - 1].emailAddress
  //       );
  //       if (emailIndexToDelete !== -1) {
  //         emails.splice(emailIndexToDelete, 1);
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     case "GET_EMAIL_BY_SENT_TO":
  //       return emails.filter(
  //         (email) => email.to === accounts[data.id - 1].emailAddress
  //       );
  //     case "GET_EMAIL_BY_TITLE":
  //       return emails.filter(
  //         (email) =>
  //           email.title === data.title &&
  //           email.from === accounts[data.id - 1].emailAddress
  //       );
  //     default:
  //       return false;
  //   }
  // };
};

const email = emailService();
// console.log(email);

// --------------------------------------------------

const tmcAccount = {
  id: 1,
  name: "TMC",
  emailAddress: "tmc@email-service.com",
};
const digAccount = {
  id: 2,
  name: "DIG",
  emailAddress: "dig@email-service.com",
};

test(email("CREATE_ACCOUNT", tmcAccount), true); // true
test(email("CREATE_ACCOUNT", digAccount), true); // true
test(email("CREATE_ACCOUNT", tmcAccount), false); // false（同じアカウントは存在できない）

// --------------------------------------------------

test(email("GET_ACCOUNT", { id: tmcAccount.id }), {
  id: 1,
  name: "TMC",
  emailAddress: "tmc@email-service.com",
  email: [],
});

test(email("GET_ACCOUNT", { id: digAccount.id }), {
  id: 2,
  name: "DIG",
  emailAddress: "dig@email-service.com",
  email: [],
});
test(email("GET_ACCOUNT", { id: 1000 }), false); // false（アカウントが存在しない）

// --------------------------------------------------

const emailToDig1 = {
  id: 1,
  from: "tmc@email-service.com",
  to: "dig@email-service.com",
  title: "Bootcamp",
  body: "I want to join this bootcamp",
};
const emailToDig2 = {
  id: 2,
  from: "tmc@email-service.com",
  to: "dig@email-service.com",
  title: "Assessment",
  body: "I will pass this test",
};

test(email("CREATE_EMAIL", emailToDig1), true); // true
test(email("CREATE_EMAIL", emailToDig2), true); // true

// // --------------------------------------------------

test(email("GET_EMAIL", { id: tmcAccount.id }), [
  {
    id: 1,
    from: "tmc@email-service.com",
    to: "dig@email-service.com",
    title: "Bootcamp",
    body: "I want to join this bootcamp",
  },
  {
    id: 2,
    from: "tmc@email-service.com",
    to: "dig@email-service.com",
    title: "Assessment",
    body: "I will pass this test",
  },
]);

test(email("GET_EMAIL", { id: digAccount.id }), []); // []
test(email("GET_EMAIL", { id: 1000 }), false); // false（アカウントが存在しない）

// // --------------------------------------------------

console.log("GET_EMAIL_BY_SENT_TO");
test(email("GET_EMAIL_BY_SENT_TO", { id: tmcAccount.id, to: digAccount.id }), [
  {
    id: 1,
    from: "tmc@email-service.com",
    to: "dig@email-service.com",
    title: "Bootcamp",
    body: "I want to join this bootcamp",
  },
  {
    id: 2,
    from: "tmc@email-service.com",
    to: "dig@email-service.com",
    title: "Assessment",
    body: "I will pass this test",
  },
]);
test(
  email("GET_EMAIL_BY_SENT_TO", {
    id: 1000,
    to: "not-found@email-service.com",
    // to: "dig@email-service.com",
  }),
  false
); // false（アカウントまたは宛先が存在しない）

// // --------------------------------------------------

test(
  email("GET_EMAIL_BY_TITLE", { id: tmcAccount.id, title: emailToDig1.title }),
  [
    {
      id: 1,
      from: "tmc@email-service.com",
      to: "dig@email-service.com",
      title: "Bootcamp",
      body: "I want to join this bootcamp",
    },
  ]
);
test(
  email("GET_EMAIL_BY_TITLE", { id: 1000, title: "This title was not found" }),
  false
); // false（アカウントまたはタイトルが存在しない）

// // --------------------------------------------------

console.log("DELETE_EMAIL");
test(
  email("DELETE_EMAIL", { accountId: tmcAccount.id, emailId: emailToDig1.id }),
  true
); // true
test(email("GET_EMAIL", { id: tmcAccount.id }), [
  {
    id: 2,
    from: "tmc@email-service.com",
    to: "dig@email-service.com",
    title: "Assessment",
    body: "I will pass this test",
  },
]);
test(email("DELETE_EMAIL", { accountId: 1000, emailId: 2000 }), false); // false（アカウントまたはメールが存在しない）

// // --------------------------------------------------

test(email("DELETE_ACCOUNT", { id: tmcAccount.id }), true); // true
test(email("DELETE_ACCOUNT", { id: 1000 }), false); // false（アカウントが存在しない）

//TODO:.mapとか作る
console.log("------17------");
//17. deepReverse という関数を作成してください。
//この関数は配列を引数にとり、配列の値を直接反転させ、配列への参照を返します。
//階層・入れ子（ネスト）がどれだけ深くても、
//すべての要素を反転させなければいけません。

//mapメソッドを作る（callback()はネイティブメソッドではない）
function customMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

// // 使用例
// const numbers = [1, 2, 3, 4, 5];
// const doubled = customMap(numbers, (num) => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]
const arr = [1, 2, 3, 4, 5];

// //reverseメソッドを作る
// Array.prototype.customReverse = () => {
//   const reversedArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }
//   return reversedArray;
// };
// arr.customReverse();
// console.log(arr);

// arr.map((n) => n + 1);
// console.log(arr);

// ここにコードを書きましょう
function deepReverse(arr) {
  //元の配列を逆順に変更する;
  // 元の配列を逆順に変更する
  // customReverse(arr);
  // // 各要素が配列である場合に再帰的に deepReverse を適用する
  // for (let i = 0; i < arr.length; i++) {
  //   const item = arr[i];
  //   if (Array.isArray(item)) {
  //     deepReverse(item);
  //   }
  // }
  // return arr;
  // arr.reverse();
  // console.log(arr);

  return arr
    .customReverse()
    .customMap((item) => (Array.isArray(item) ? deepReverse(item) : item));
}

// const arr1 = [1, 2, [3, 4]];
// const arr2 = [1, 2, [3, 4, [5, 6]]];

// deepReverse(arr1);
// deepReverse(arr2);

// console.log(arr1); // [[4, 3], 2, 1]
// console.log(arr2); // [[[6, 5], 4, 3], 2, 1]
// test(arr1, [[4, 3], 2, 1]); // [[4, 3], 2, 1]
// test(arr2, [[[6, 5], 4, 3], 2, 1]); // [[[6, 5], 4, 3], 2, 1]

//TODO:
//18. searchObject という関数を作成してください。
//この関数はオブジェクトを引数にとり、
//与えられた条件に一致する値の場所と値のオブジェクトを返します。
//引数のオブジェクトには、文字列・数値・配列・オブジェクトがあると想定し、
//階層・入れ子（ネスト）がどれだけ深くても、
//すべての条件一致した値を探せるようにしなければいけません。
//キーは object. で開始してください。

// ここにコードを書きましょう
function searchObject(obj, condition, path = "object") {
  let result = {};

  for (const key in obj) {
    const value = obj[key];
    const newPath = `${path}.${Array.isArray(obj) ? `[${key}]` : key}`;

    if (condition(value)) {
      result[newPath] = value;
    }

    if (typeof value === "object" && value !== null) {
      const nestedResult = searchObject(value, condition, newPath);
      result = { ...result, ...nestedResult };
    }
  }

  return result;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2, d: [{ e: 3 }, { f: 4 }] } };

console.log(searchObject(obj1, (value) => value === 1));
// {
//   'object.a': 1
// }
console.log(searchObject(obj2, (value) => value > 1));
// {
//   'object.b.c': 2,
//   'object.b.d[0].e': 3,
//   'object.b.d[1].f': 4
// }
