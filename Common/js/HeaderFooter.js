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
	if(param){
		add = `<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">【あつ森】流星群 完全特定！流れ星が「秒」単位で分かる凄いツールを紹介！【流星群】 <br><br>動画公開致しました！🥳🥳🥳🥳🥳🥳🥳🥳<br>技術の進歩は凄いですね…！🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳<br><br>【参考サイト】<a href="https://t.co/tvPiOGJ98V">https://t.co/tvPiOGJ98V</a><a href="https://t.co/U0OfzI9weA">https://t.co/U0OfzI9weA</a></p>&mdash; モギュ (@modunogay) <a href="https://twitter.com/modunogay/status/1272577731771772929?ref_src=twsrc%5Etfw">June 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`	
	}else{
		add = `<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">【<a href="https://twitter.com/hashtag/DIY%E3%83%AC%E3%82%B7%E3%83%94%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC?src=hash&amp;ref_src=twsrc%5Etfw">#DIYレシピチェッカー</a> 】 <a href="https://twitter.com/endo_end?ref_src=twsrc%5Etfw">@endo_end</a> 様より、DIYレシピチェッカーの解説記事が上がりました！🥳🥳🥳🥳🥳<br><br>とても丁寧に、かつ分かーーーりやすく書かれています！！！🥳🥳🥳🥳🥳🥳<br><br>もしお友達に紹介する時は便利なサイトになるかもしれませんね…！🥳🥳🥳<a href="https://t.co/9kFDZqVjPC">https://t.co/9kFDZqVjPC</a> <a href="https://t.co/GNx0WWjDzb">https://t.co/GNx0WWjDzb</a></p>&mdash; モギュ (@modunogay) <a href="https://twitter.com/modunogay/status/1273237232548114442?ref_src=twsrc%5Etfw">June 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
		add += `<p class= "headerPlanText">⚠️履歴の削除：消えます<br>⚠️プライベートモード：消えます<br>⚠️キャッシュクリア：消えます<br>ご注意を</p>`
	}
	$("#HeaderComment").append(add);

	//右上の表示はpage.jsへ

}

function eventGtag(...args) {
	gtag('event', 'click', {
		'event_category': args[0],
		'event_label': args[1]
	});
}
