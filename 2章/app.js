let orange = 100;
let apple = 120;

//if文　条件分岐
if (orange < apple) {
  console.log("みかんの値段がリンゴより安い");
} else if (orange == apple) {
  console.log("みかんとリンゴが同じ値段");
} else {
  console.log("みかんの値段がリンゴより高い");
}

// while文　繰り返し処理
let max = 100;
let num = 1;
let count = 0;

while(num < max) {
  num = num*2;
  count = count + 1;
}

console.log("2を掛け続けて" + max + "を越えるのに必要だった回数は"　+　count + "回です");

//for文　決められた回数の処理を繰り返す
let i;
let n = 0;

for(i = 1; i < 11; i++ ) {  //for(初期値; 条件式; 増減値)
  n = n + i;
}
//i=1からスタートしてiが11より小さい間iに1を足し続ける

console.log("1から10まで足し算した結果は" + n + "です");

//確認問題
alert(24%7);