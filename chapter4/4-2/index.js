// 再帰処理を使う
const fs = require("fs");

const writeFile = (i) => {
  if (i >= 100) {
    return;
  }

  const text = `write: ${i}`;
  fs.writeFile("./data.txt", text, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(text);
    writeFile(i + 1);
  });
};
writeFile(0);

// 順序がバラバラ
// const fs = require("fs");

// for (let i = 0; i < 100; i++) {
//   const text = `write: ${i}`;

//   fs.writeFile("./data.txt", text, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(text);
//   });
// }

// const { readFile, writeFile, chmod } = require("fs");

// const backupFile = `${__filename}-${Date.now()}`;

// readFile(__filename, (err, data) => {
//   if (err) {
//     return console.error(err);
//   }
//   writeFile(backupFile, data, (err) => {
//     if (err) {
//       return console.error(err);
//     }
//     chmod(backupFile, 0o400, (err) => {
//       if (err) {
//         return console.error(err);
//       }
//       console.log("done");
//     });
//   });
// });
