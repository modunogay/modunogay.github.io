function header() {
	add = `		<a href="../DIY/index.html">DIYレシピ</a>
	<a href="../FTR/index.html">家具</a>
	<a href="../MISC/index.html">小物家具</a>
	<a href="../FTR_WALL/index.html">壁掛け家具</a>
	<a href="../DIY_IMAGE/index.html?202008271645" style="width:40%">🆕DIYテンプレ</a>
	<a href="../FTR_IMAGE/index.html?202008271645" style="width:40%">家具テンプレ</a>
	<a href="../Analysis/index.html">みんなの取得率</a>
	`
	$("#Header").append(add);
}

//<span style="background-color: #ff9dc3b8; font-weight:bold;">「」</span>
/**
 * ヘッダーにコメントを追加する関数
 */
function headerComment() {
	//tw-align-center
	add = ""
	add = `
	<img src="../Common/image/日本刀.png" alt="日本刀" width="80%" style="max-width: 600px;"><br>
	<span class="headerPlanText">アップデートで一部アイテムの<span class="marker_line">チェック状態が外れます！！！</span></span>
	<div class="modal-open"><a href="#modal">開発者より一言</a></div>
		<div class="modal" id="modal">
			<a href="#!" class="overlay"></a>
			<div class="modal-wrapper">
				<div class="modal-contents">
					<a href="#!" class="modal-close">✕</a>
					<div class="modal-content">
						大変お待たせいたしました。1.3.0対応いたしました。
		  	<div class="mt-2">
							まず初めに一部アイテムの不具合修正を行っております。<br>
							このアップデートにより、<span class="marker_line">「にほんとう」のチェック状態が外れます</span>ので、ご注意ください。
			</div>
			<div class="mt-2">
							また、DIYレシピの方に画像をつけたり、アイテム名を見やすくアップデートしました。<br>
							もし、文字サイズが大きすぎる方は、<span class="marker_line">ページ一番下の「フォントサイズ」</span>から変更してください。<br>
							<div class="headerImage">
							<img class="mt-2" src="../Common/image/FontSize.PNG" alt="フォントサイズ" width="80%" style=""><br>
							</div>
			</div>
			<div class="mt-2">
				他にも、テンプレ画像の方もアップデートしていますので、そちらの方もご確認していただけますと幸いです。
			</div>
			<div class="mt-2">
				現状の課題につきまして、様々な意見を頂いております。<br>
				中でも、<span class="marker_line">「データの消失」</span>に関しては、重篤な不具合だとこちらでも認識しております。<br>
			</div>
			<div class="mt-2">
				と言うのも、iPhoneの制限が厳しすぎる & 独自の仕様が多く、実装が難しい点があります…。<br>
				<s>Appleさんマジでやめてくれ…</s>
			</div>
			<div class="mt-2">
				今考えているのは、サーバー側でアイテムの管理をしようと考えています。<br>
				しかしながら「アイテム数が膨大」な点がネックになりそうで、サーバー維持費も高くつきそうです…。<br>
			</div>
			<div class="mt-2">
				つきましては、<span class="marker_line">広告の導入</span>を考えています。<br>
				ユーザー様の操作を阻害するような広告の置き方はしませんので、ご安心ください。<br>
				ご理解の程、よろしくお願いいたします。<br>
			</div>
			<div class="mt-2">
				また、ページ一番下に、上記画像の<span class="marker_line">「相手のデータを自分のデータにする」</span>ボタンもありますので、<br>
				定期的にURLを発行して頂ければ、データの復元は可能ですので、宜しくお願い致します。
			</div>
			<div class="mt-2">
				2番目の課題はサイトが<span class="marker_line">「見づらい」「重い」</span>といった点です。<br>
				これにつきましては、解決方は見出せたものの、実装が出来ていない現状です。<br>
				もう少しだけお時間をいただけますと幸いです。
			</div>
			<div class="mt-2">
				長くなりましたが、今後ともよろしくお願いいたします。
			</div>
			<div class="mt-2">
				P.S. 就職活動、終了いたしました。ご声援ありがとうございました。
			</div>
			<div class="mt-2">
				Twitter:<a href="https://twitter.com/modunogay" target="_blank" rel="noopener">@modunogay</a>
			</div>
			<div class="mt-2 close">
				<a href="#!">閉じる</a>
			</div>
					</div>
				</div>
			</div>
		</div>
		`;
	add = `一部画像が表示されない不具合を修正しました<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">【皆様にお知らせ】<br>この度 私モギュは、TECH Street様主催の<br>「エンジニアの夏休みの自由研究発表会 」<br>に参加させて頂くことになりました！🥳🥳<br><br>私は技術的なお話はしない（出来ない）ですが、IT系にご興味ある方 良ければご参加くださいませ！🥳🙏<a href="https://t.co/Wl6vDYHe1I">https://t.co/Wl6vDYHe1I</a> <a href="https://twitter.com/hashtag/%E3%83%86%E3%83%83%E3%82%AF%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88?src=hash&amp;ref_src=twsrc%5Etfw">#テックストリート</a> <a href="https://t.co/KRsSR13Iux">pic.twitter.com/KRsSR13Iux</a></p>&mdash; モギュ@某チェッカー制作者.質問お気軽に🥳 (@modunogay) <a href="https://twitter.com/modunogay/status/1296729752280023042?ref_src=twsrc%5Etfw">August 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`	
	$("#HeaderComment").append(add);

	//右上の表示はpage.jsへ

}

function eventGtag(...args) {
	gtag('event', 'click', {
		'event_category': args[0],
		'event_label': args[1]
	});
}
