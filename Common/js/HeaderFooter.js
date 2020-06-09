function header(){
	add = `		<a href="../DIY/index.html">DIYレシピ<br>チェッカー</a>
	<a href="../FTR/index.html">家具<br>チェッカー</a>
	<a href="../MISC/index.html">小物家具<br>チェッカー</a>
	<a href="../FTR_WALL/index.html">壁掛け家具<br>チェッカー</a>`
	$("#Header").append(add);
}

//<span style="background-color: #ff9dc3b8; font-weight:bold;">「」</span>
/**
 * ヘッダーにコメントを追加する関数
 */
function headerComment(){
	add = `6/6 18:17更新<br>
	<p class= "headerPlanText">治しました…。下記ツイートをご確認ください…。<br>
	ご迷惑をおかけいたしました…。</p>
	<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">DIYレシピチェッカー治しました<br>バグが再発する場合この下に続くツイートを確認してください<br><br>また、今回のバグの原因を下記ツイートに繋げます<br><br>⚠️⚠️⚠️<br>URLからデータの復元は出来ます！<br>定期的なバックアップ（URLの発行）をお願いします！</p>&mdash; モギュ (@modunogay) <a href="https://twitter.com/modunogay/status/1270282721793732610?ref_src=twsrc%5Etfw">June 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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

