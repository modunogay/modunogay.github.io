function header(){
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>`
	$("#Header").append(add);
}

function headerComment(){
	add = `5/27 1:30更新<br>一部チェッカーに画像を追加しました。<br>
	重い場合は「取得方法」を非表示にする事で<br>読み込みを停止できます<br><br>
	また<br><a href="../DataSource.html">データ提供元・ライセンス<br>プライバシーポリシー・免責事項</a><br>を改めて制定しましたので、ご一読ください。	`
	$("#HeaderComment").append(add);
}

