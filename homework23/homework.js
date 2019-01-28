// 1 задача

const getRandomArray = (len) => new Array(len).fill(1).map(a => Math.random());

// 2 задача

const biggerThenMedium = (arr) => {
  var medium = arr.reduce((acc, element) => acc + element) / arr.length;
  console.log(arr.filter(element => element > medium).toString());
}

// 3 задача

const searchSmallestArrayElement = (arr) => {
  return arr.reduce((acc, element) => element < acc ? element : acc);
}

const twoSmallestElement = () => {
  const firstSmallest = searchSmallestArrayElement(arr);
  const secondSmallest = searchSmallestArrayElement(arr.filter(e => e > firstSmallest));
  return `${firstSmallest}, ${secondSmallest}`;
}

// 4 задача

const filterShiftReplace = (arr) => {
  var newArr = arr.filter(e => e >= 0.3);
  return newArr.concat(new Array(arr.length - newArr.length)).fill(0,newArr.length);
}

// 5 задача

const reverseSum = (arr1, arr2) => {
  var arr3 = new Array(arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[arr1.length - 1 - i];
  }
  return arr3;
}

// 6 задача

const bubbleSort = (arr) => {
  let f;
  do {
    f = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        arr[i - 1] += arr[i]; arr[i] = arr[i - 1] - arr[i]; arr[i - 1] = arr[i - 1] - arr[i];
        f = 1
      }
    }
  } while (f === 1);
  return arr;
}

// 7 задача

const sumPairNearOne = (arr) => {
    let first;
    let second;
    do {
      first = arr.shift();
      second = arr.find(e => e > 0.999 - first && e < 1.001 - first);
      if (second) console.log(first, second);
    } while (arr.length > 1)
  }

// 8 задача

const replaceByOrder = (arr) => {
    let index;
    let subArr = arr.slice();
    let newArr = new Array(arr.length);
    console.log(arr)
    for (let i = arr.length; i > 0; i--) {
      index = subArr.indexOf(searchSmallestArrayElement(subArr))
      newArr[index] = i;
      subArr[index] = 1;
    }
    return newArr;
  }
  
// 9 задача

const cycleShift = (arr,x) => {
    let newArr = arr.slice();
    let element;
    for (let i = 0; i < x; i++) {
      element = newArr.pop();
      newArr.unshift(element);
    }
    return newArr;
  }
  