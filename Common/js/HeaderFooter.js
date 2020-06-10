function header(){
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
function headerComment(){
	add = `6/6 18:17更新<br>
	<p class= "headerPlanText">治しました…。下記ツイートをご確認ください…。<br>
	ご迷惑をおかけいたしました…。</p>
	
	<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">DIYレシピチェッカー治しました<br>バグが再発する場合この下に続くツイートを確認してください<br><br>また、今回のバグの原因を下記ツイートに繋げます<br><br>⚠️⚠️⚠️<br>URLからデータの復元は出来ます！<br>定期的なバックアップ（URLの発行）をお願いします！</p>&mdash; モギュ (@modunogay) <a href="https://twitter.com/modunogay/status/1270282721793732610?ref_src=twsrc%5Etfw">June 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
	</script>
	`
	$("#HeaderComment").append(add);

	add = `<br><div id="HeaderComment2">
	6/10 10:09更新<br>
	<image src="../Common/image/002.png" style="width: 50%; height: 50%; border: solid 2px #172c66;"></image><br>
	<p class= "headerPlanText">ウェディング系を追加しました。<br><br>
	一部機能を追加しました。<br><br>
	<span style="background-color: #ff9dc3b8;">カタログテンプレート</span><br>
	家具チェッカーの情報を用いてテンプレートを作成します。(画像の出力までに時間がかかります。)<br><br>

	<span style="background-color: #ff9dc3b8;">Twitterのツイート情報の追加</span><br>
	選択したテキストを自動的にツイート文に追加します。<br>
	⚠️DIYレシピチェッカー以外でも<span style="background-color: #ff9dc3b8;">「配布可」</span>でツイートされますので、適宜修正してください。<br>
	<br>
	今後ともよろしくお願いいたします。<br><br>
	6/10 追記<br>
	ソートの順番が一部間違っていたので修正。</p>
	</div>`
	$("#HeaderComment").after(add);
}

