function header() {
	add = `		<a href="../DIY/index.html">DIYレシピ</a>
	<a href="../FTR/index.html">家具</a>
	<a href="../MISC/index.html">小物家具</a>
	<a href="../FTR_WALL/index.html">壁掛け家具</a>
	<a href="../DIY_IMAGE/index.html" style="width:40%">🆕DIYテンプレ</a>
	<a href="../FTR_IMAGE/index.html" style="width:40%">家具テンプレ</a>
	<a href="../Analysis/index.html">みんなの取得率</a>
	`
	$("#Header").append(add);
}

//<span style="background-color: #ff9dc3b8; font-weight:bold;">「」</span>
/**
 * ヘッダーにコメントを追加する関数
 */
function headerComment() {
	//tw-align-center
	add = ""
	add = `<div class="modal-open"><a href="#modal">モーダルを開く</a></div>
	<div class="modal" id="modal">
	  <a href="#!" class="overlay"></a>
	  <div class="modal-wrapper">
		<div class="modal-contents">
		  <a href="#!" class="modal-close">✕</a>
		  <div class="modal-content">
		  大変お待たせいたしました。1.3.0対応いたしました。
		  	<div class="mt-2">
			  まず初めに一部アイテムの不具合修正を行っております。
			</div>
			<a href="#!">閉じる</a>
		  </div>
		</div>
	  </div>
	</div>`

	add = "アップデート準備中………。"
	$("#HeaderComment").append(add);

	//右上の表示はpage.jsへ

}

function eventGtag(...args) {
	gtag('event', 'click', {
		'event_category': args[0],
		'event_label': args[1]
	});
}
