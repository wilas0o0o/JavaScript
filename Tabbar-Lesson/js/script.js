// $('要素[属性 != "値"]')　id="tab-contents"の要素のうち、
// class="tab"であり、id="tab1"ではない要素を非表示にする
$('#tab-contents .tab[id!= "tab1"]').hide();

// "id=tab-menu"のaタグがクリックされたら実行する処理
$("#tab-menu a").on("click",function(event){
  // "id=tab-contents"内のクリックされたtabを非表示にする
  $("#tab-contents .tab").hide();
  // "id=tab-menu"の全てのactiveクラスを削除する
  $("#tab-menu .active").removeClass("active");
  // クリックされたタブのactiveクラスを追加する
  $(this).addClass("active");
  // クリックされたタブのhref属性の中身を表示する
  $($(this).attr("href")).show();
  // aタグを無効にする
  event.preventDefault();
})