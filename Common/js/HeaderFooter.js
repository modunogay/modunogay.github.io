function header(){
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>`
	$("#Header").append(add);
}

/**
 * ヘッダーにコメントを追加する関数
 */
function headerComment(){
	add = `6/6 17:05更新<br>
	<image src="../image/caution-01.png" style="width: 100px; height: 100px; "></image><br>
	<p class= "headerPlanText">現在データが<span style="background-color: #ff9dc3b8; font-weight:bold;">「全て未チェックになる不具合」</span>が発生しております。<br>
	原因調査中です。<br>
	<span style="background-color: #ff9dc3b8; font-weight:bold;">ページをリロード(再読み込み)</span>するとデータきちんと表示されることを確認しています。<br>
	本バグに合われましたら一度ページを更新して頂けますようお願いいたします。
	`
	$("#HeaderComment").append(add);

	add = `<br><div id="HeaderComment2">
	6/5 8:23更新<br>
	<image src="../Common/image/001.png" style="width: 30%; height: 30%; border: solid 2px #172c66;"></image><br>
	<p class= "headerPlanText">名前機能を追加しました<span style="background-color: #ff9dc3b8;">URL発行時にも適応</span>され、より見やすくなりました。<br>
	また、リファクタリングを行いました。（簡単に言うとコードの整形）<br>
	バグが多く出そうなアップデートですので、何かありましたら（どんな些細な事でも）リプ、DM等下さると助かります。よろしくお願い致します[*'ω'*]</p>
	</div>`
	//$("#HeaderComment").after(add);
}

