// if,else

// let age = prompt("Yaşınızı daxil edin");

// if (+age >= 18) {
//   alert("Saytımıza xoş gəlmisiniz");
// } else {
//   window.close();
// }

let point = +prompt("Imtahan balınızı daxil edin");

if (point > 90 && point <= 100) {
  alert("Imtahandan A aldınız");
} else if (point > 50 && point<=90) {
  alert("Imtahandan B aldınız");
} else if (point < 50 && point >= 0) {
  alert("Imtahandan kəsildiniz");
} else {
  alert("Doğru dəyər daxil edin");
}
