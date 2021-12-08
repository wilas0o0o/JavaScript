$(function(){
  // #back内のaタグがクリックされたとき処理
  $("#back a").on("click",function(event){
    // bodyまたはhtmlにアニメーション効果を設定する
    $("body,html").animate({
      // アニメーションの変化値
      scrollTop:0
    // アニメーションの動作時間
    },800);
    // aタグを無効にするメソッド
    event.preventDefault();
  });
});

