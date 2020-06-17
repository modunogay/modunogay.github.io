function header() {
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>
	<a href="../FTR_IMAGE/index.html">カタログテンプレート</a>`
	$("#Header").append(add);
}

//<span style="background-color: #ff9dc3b8; font-weight:bold;">「」</span>
/**
 * ヘッダーにコメントを追加する関数
 */
function headerComment() {
	//tw-align-center
	add = ""
	//add = `<iframe width="560" height="315" src="https://www.youtube.com/embed/DYML9m0PvIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`	

	
	
	if(param){
		var videoWidth = $("#HeaderComment").width();
		var videoHeight = videoWidth*9/15;
		if(videoHeight >= 200){
			videoWidth = 356;
			videoHeight = 200;
		}
		add = `<iframe width="${videoWidth}" height="${videoHeight}" src="https://www.youtube.com/embed/DYML9m0PvIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`	
	}else{
		add = `<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">【<a href="https://twitter.com/hashtag/DIY%E3%83%AC%E3%82%B7%E3%83%94%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC?src=hash&amp;ref_src=twsrc%5Etfw">#DIYレシピチェッカー</a> 】 <a href="https://twitter.com/endo_end?ref_src=twsrc%5Etfw">@endo_end</a> 様より、DIYレシピチェッカーの解説記事が上がりました！🥳🥳🥳🥳🥳<br><br>とても丁寧に、かつ分かーーーりやすく書かれています！！！🥳🥳🥳🥳🥳🥳<br><br>もしお友達に紹介する時は便利なサイトになるかもしれませんね…！🥳🥳🥳<a href="https://t.co/9kFDZqVjPC">https://t.co/9kFDZqVjPC</a> <a href="https://t.co/GNx0WWjDzb">https://t.co/GNx0WWjDzb</a></p>&mdash; モギュ (@modunogay) <a href="https://twitter.com/modunogay/status/1273237232548114442?ref_src=twsrc%5Etfw">June 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
		add += `<p class= "headerPlanText">⚠️履歴の削除：消えます<br>⚠️プライベートモード：消えます<br>⚠️キャッシュクリア：消えます<br>ご注意を</p>`
	}
	$("#HeaderComment").append(add);
}

function eventGtag(...args) {
	gtag('event', 'click', {
		'event_category': args[0],
		'event_label': args[1]
	});
}
