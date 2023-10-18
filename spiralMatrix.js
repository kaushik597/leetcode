let matrix = [
  // [1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]
//   [1,2,3,4],[5,6,7,8],[9,10,11,12]
//   [7],
//   [9],
//   [6],
[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]
];

let copy = [...matrix];

var spiralOrder = function (matrix) {
  let totalMatrixLength = 0;
  let resultArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      totalMatrixLength++;
    }
  }
  const parseRight = () => {
    if (copy.length > 0) {
      let value;
      for (let j = 0; j < copy[0].length; j++) {
        value = copy[0][j];
        resultArray.push(value);
      }

      copy.splice(0, 1);
      copy=copy.filter(e=>e.length)
    }
  };
  const parseBottom = () => {
    if (copy.length > 0) {
      for (let i = 0; i < copy.length; i++) {
        let j = copy[i].length - 1;
        resultArray.push(copy[i][j]);
      }

      for (let i = 0; i < copy.length; i++) {
        copy[i].splice(-1, 1);

      }
      copy=copy.filter(e=>e.length)
    }
  };

  const parseLeft = () => {
    if (copy.length > 0) {
      let last = parseInt(copy.length - 1);
      for (let i = copy[last].length - 1; i >= 0; i--) {
        if (copy[last].length > 0) {
          resultArray.push(copy[last][i]);
        }
      }

      let i = copy[last].length - 1;
      copy.splice(-1, 1);
      copy=copy.filter(e=>e.length)


    }
  };
  const parseUp = () => {
    if (copy.length > 0) {
      for (let i = copy.length - 1; i >= 0; i--) {
        if (copy[i].length > 0) {
          console.log(i, "th array");
          console.log("values", copy[i][0], i);
          console.log("=====", resultArray);
          if (i == 0) {
            console.log("i======0", i);
            resultArray.push(copy[i][0]);
            break;
          }
          resultArray.push(copy[i][0]);

          console.log("result array inside for loop", resultArray);
        }
      }

      for (let i = 0; i < copy.length; i++) {
        copy[i].splice(0, 1);
      }
      copy=copy.filter(e=>e.length)

    }
  };

  while (copy.length > 0) {
    parseRight();
    parseBottom();
    parseLeft();
    parseUp();
  }

  return resultArray;
};

const a = spiralOrder(matrix);
  console.log(a);


