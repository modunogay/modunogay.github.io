function header(){
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>`
	$("#Header").append(add);
}

function headerComment(){
	add = `5/28 6:08更新<br>
	家具、小物チェッカーを修正。<br>バージョンが1.2.0.bになります。<br><br>
	※現在不具合によりソート機能を停止しています。`
	$("#HeaderComment").append(add);
}

