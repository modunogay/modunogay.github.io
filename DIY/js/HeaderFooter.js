function header(){
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>`
	$("#Header").append(add);
}

function headerComment(){
	add = `5/29 15:05更新<br>
	※緊急のお知らせ<br>
	画像取得に問題があったため一時的に機能を停止します<br><br>
	※現在不具合によりソート機能を停止しています。`
	$("#HeaderComment").append(add);
}

