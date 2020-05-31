function header(){
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>`
	$("#Header").append(add);
}

function headerComment(){
	add = `5/31 15:55更新<br>
	<image src="../image/caution-01.png" style="width: 100px; height: 100px;"></image><br>
	DIYレシピチェッカーに<span style="background-color: #ff9dc3b8;">「枚数」</span>を編集出来る機能を追加しました。<br><br>
	この枚数は<span style="background-color: #ff9dc3b8;">コピペが出来ません。</span><br>
	また、<span style="background-color: #ff9dc3b8;">枚数の共有もされません。</span><br><br>
	そこで、シェアボタンから<span style="background-color: #ff9dc3b8;">「表示しているアイテム名をコピー」</span>する機能を実装しました。<br>
	（もちろんフィルタ機能、並び替え機能にも対応しております。）<br><br>
	さらに、DIYレシピチェッカーでは<span style="background-color: #ff9dc3b8;">「枚数」を表示</span>させた状態で名前をコピーすると、<br>
	<span style="background-color: #ff9dc3b8;">自動的に名前の後ろに枚数(数字)</span>が付きます。<br>
	(もし枚数を初期化したい場合ページ一番下より可能です。)<br><br>
	遅くなりましたが、<span style="background-color: #ff9dc3b8;">「家具チェッカー」</span>も作成いたしました。ページ上部からアクセスできます。<br>
	今後ともよろしくお願い致します。@modunogay
	`
	$("#HeaderComment").append(add);
}

