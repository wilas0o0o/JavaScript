$(function(){
  // .menu-triggerクリック時に行われる処理
  $(".menu-trigger").on("click",function(event){
    // activeクラスをトグル処理(Class属性の追加と削除の切り替え)をする
    $(this).toggleClass("active");
    // 要素のフェードイン・フェードアウトを切り替える
    $("#sp-menu").fadeToggle();
    event.preventDefault();
  });
});