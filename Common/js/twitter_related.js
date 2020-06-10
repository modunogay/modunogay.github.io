/**
 * タグを管理する変数
 */
var USER_JSON_TWITTER;

/**
 * jQueryのダイアログを用いると、何故かclassが使えなくなるのでlength用に設置
 */
const Tiwtter_CB_LENGTH = 6;

var USER_JSON_TWITTER_TEXT;

const Tiwtter_CB_TEXT_LENGTH = 4;

$(function () {
	//USER_JSON_TWITTERユーザーのハッシュタグ情報を管理
	USER_JSON_TWITTER = getlocalstorage("All", `${THIS_PAGE}_TWITTER`);
	if (USER_JSON_TWITTER == null) {
		USER_JSON_TWITTER = [{ "name": "Name", "data": "value" }];
		var data;
		for (i = 1; i <= Tiwtter_CB_LENGTH; i++) {
			data = { "name": $(`#Twitter-tag-${i}`).val(), "data": 0 };
			USER_JSON_TWITTER.push(data);
		}
		localStorage.setItem(`${THIS_PAGE}_TWITTER`, JSON.stringify(USER_JSON_TWITTER));
	} else {
		for (i = 1; i < USER_JSON_TWITTER.length; i++) {
			if (USER_JSON_TWITTER[i].data == 1) {
				for (j = 1; i <= Tiwtter_CB_LENGTH; j++) {
					if ($(`#Twitter-tag-${j}`).val() == USER_JSON_TWITTER[i].name) {
						$(`#Twitter-tag-${j}`).prop('checked', true);
						break;
					}
				}
			}
		}
	}
	
	
	USER_JSON_TWITTER_TEXT = getlocalstorage("All", `TWITTER_TEXT`);
	if (USER_JSON_TWITTER_TEXT == null) {
		USER_JSON_TWITTER_TEXT = [{ "name": "Name", "data": "value" }];
		var data;
		for (i = 1; i <= Tiwtter_CB_TEXT_LENGTH; i++) {
			data = { "name": `Twitter-text-${i}`, "data": 0 };
			USER_JSON_TWITTER_TEXT.push(data);
		}
		localStorage.setItem(`TWITTER_TEXT`, JSON.stringify(USER_JSON_TWITTER_TEXT));
	} else {
		for (i = 1; i < USER_JSON_TWITTER_TEXT.length; i++) {
			if (USER_JSON_TWITTER_TEXT[i].data == 1) {
				for (j = 1; i <= Tiwtter_CB_TEXT_LENGTH; j++) {
					if (`Twitter-text-${j}` == USER_JSON_TWITTER_TEXT[i].name) {
						$(`#Twitter-text-${j}`).prop('checked', true);
						break;
					}
				}
			}
		}
	}
	
})

/**
 * 選択しているハッシュタグを返す
 * @return {string} HashTags ハッシュタグの配列
 */
function getHashTag() {
	var HashTags = [];
	for (i = 0; i < USER_JSON_TWITTER.length; i++) {
		if (USER_JSON_TWITTER[i].data == 1) {
			HashTags.push(USER_JSON_TWITTER[i].name)
		}
	}
	return HashTags
}

/**
 * ツイッターのタグの状態が変更された時LocalStorageに保存
 * @param {int} index チェックしたID
 */
function TwitterTagfunction(index) {
	if ($(`#Twitter-tag-${index}`).prop('checked')) {
		setlocalstorage($(`#Twitter-tag-${index}`).val(), 1, `${THIS_PAGE}_TWITTER`);
	} else {
		setlocalstorage($(`#Twitter-tag-${index}`).val(), 0, `${THIS_PAGE}_TWITTER`);
	}
}

/**
 * ツイッターのテキスト部分の状態が変更された時LocalStorageに保存
 * @param {int} index チェックしたID
 */
function TwitterTextfunction(index) {
	if ($(`#Twitter-text-${index}`).prop('checked')) {
		setlocalstorage(`Twitter-text-${index}`, 1, `TWITTER_TEXT`);
	} else {
		setlocalstorage(`Twitter-text-${index}`, 0, `TWITTER_TEXT`);
	}
}


/**
 * ツイートするためのURLを発行する関数
 */
function tweetPopup() {
	var text = encodeURI($("#URL-Input").val());
	var tags = "";
	var hashtag = getHashTag();
	if (hashtag.length != 0) {
		tags = "&hashtags=" + hashtag.join(",")
	}
	var data_text = "\n";

	for(i=1;i<=Tiwtter_CB_TEXT_LENGTH;i++){
		if ($(`#Twitter-text-${i}`).prop('checked')) {
			data_text +=  $.trim($(`#Titter-text-${i}-label`).text()) + "\n"
		}
	}
	console.log(data_text)
	data_text = encodeURI(data_text)
	var url;
	switch (THIS_PAGE) {
		case "DIY":
			url = `https://twitter.com/share?url=${text}&text=DIYレシピを更新しました！${data_text}${tags}`;
			break;

		case "FTR":
			url = `https://twitter.com/share?url=${text}&text=家具を更新しました！${data_text}${tags}`;
			break;

		case "MISC":
			url = `https://twitter.com/share?url=${text}&text=小物家具を更新しました！${data_text}${tags}`;
			break;

		case "FTR_WALL":
			url = `https://twitter.com/share?url=${text}&text=壁掛け家具を更新しました！${data_text}${tags}`;
			break;
	}
	window.open(url, "tweet", "width=500,height=300");
};