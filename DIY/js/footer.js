function footer(){
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>`
	$("#Footer").append(add);
}

function footerComment(){
	add = `5/25 20:46更新<br>一部データに誤りがありました。<br>
	修正に伴いデータのバージョンを1.2.0.aにしました`
	$("#FooterComment").append(add);
}