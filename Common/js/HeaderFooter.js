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
	add = `6/6 18:17更新<br>
	<p class= "headerPlanText">治しました…。下記ツイートをご確認ください…。<br>
	ご迷惑をおかけいたしました…。</p>
	
	<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">DIYレシピチェッカー治しました<br>バグが再発する場合この下に続くツイートを確認してください<br><br>また、今回のバグの原因を下記ツイートに繋げます<br><br>⚠️⚠️⚠️<br>URLからデータの復元は出来ます！<br>定期的なバックアップ（URLの発行）をお願いします！</p>&mdash; モギュ (@modunogay) <a href="https://twitter.com/modunogay/status/1270282721793732610?ref_src=twsrc%5Etfw">June 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
	</script>
	`
	//$("#HeaderComment").append(add);

	add = `<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">【カタログテンプレート作成ツール】<br><br>家具チェッカーにカタログのテンプレートを作成する機能が備わりました🥳🥳🥳🥳<br><br>家具の一覧を出力する際に使えますよー🥳🥳<br>今後ともよろしくお願いします🥳<a href="https://twitter.com/hashtag/%E5%AE%B6%E5%85%B7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC?src=hash&amp;ref_src=twsrc%5Etfw">#家具チェッカー</a> <a href="https://twitter.com/hashtag/%E3%81%82%E3%81%A4%E6%A3%AE?src=hash&amp;ref_src=twsrc%5Etfw">#あつ森</a> <a href="https://twitter.com/hashtag/%E3%81%82%E3%81%A4%E6%A3%AE%E4%BA%A4%E6%8F%9B?src=hash&amp;ref_src=twsrc%5Etfw">#あつ森交換</a> <a href="https://twitter.com/hashtag/%E5%AE%B6%E5%85%B7%E4%BA%A4%E6%8F%9B?src=hash&amp;ref_src=twsrc%5Etfw">#家具交換</a> <a href="https://twitter.com/hashtag/%E5%AE%B6%E5%85%B7%E3%81%8A%E3%81%95%E3%82%8F%E3%82%8A?src=hash&amp;ref_src=twsrc%5Etfw">#家具おさわり</a> <a href="https://twitter.com/hashtag/%E3%81%8A%E3%81%95%E3%82%8F%E3%82%8A?src=hash&amp;ref_src=twsrc%5Etfw">#おさわり</a><a href="https://t.co/9ebzqIzn5r">https://t.co/9ebzqIzn5r</a> <a href="https://t.co/vCyBBBSlp5">pic.twitter.com/vCyBBBSlp5</a></p>&mdash; モギュ (@modunogay) <a href="https://twitter.com/modunogay/status/1270652938810044417?ref_src=twsrc%5Etfw">June 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;

	add += `<p class= "headerPlanText">⚠️履歴の削除：消えます<br>⚠️プライベートモード：消えます<br>⚠️キャッシュクリア：消えます<br>ご注意を</p>`
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
	//$("#HeaderComment").after(add);
}

function eventGtag(...args) {
	gtag('event', 'click', {
		'event_category': args[0],
		'event_label': args[1]
	});
}
