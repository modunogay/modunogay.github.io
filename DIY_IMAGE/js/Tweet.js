/**
 * モーダルが開くときの処理 (取得済の枚数等をセット)
 */

var ver = "1_2_1_a";
var USER_NAME = localStorage.getItem("USER_NAME")

/**
 * タグを管理する変数
 */

var USER_JSON_TWITTER_TAG = JSON.parse(localStorage.getItem("DIY_TWITTER"));
var USER_JSON_TWITTER_TEXT = JSON.parse(localStorage.getItem("TWITTER_TEXT"));

$(function () {
	for (var i = 1; i < USER_JSON_TWITTER_TEXT.length; i++) {
		if (USER_JSON_TWITTER_TEXT[i].data != 0) {
			$(`#Twitter-Text-CB-${i}`).prop('checked', true);
		}
	}

	for (var i = 1; i < USER_JSON_TWITTER_TAG.length; i++) {
		if (USER_JSON_TWITTER_TAG[i].data != 0) {
			$(`#Twitter-Tag-CB-${i}`).prop('checked', true);
		}
	}

})


function Tweet_Open_Modal() {
	$("#Tweet_URL_Input").val("");
	$.getJSON(`/DIY/json/${ver}.json`, function (list) {

		var dt = new Date();
		var year = dt.getFullYear();
		var month = dt.getMonth() + 1; //0が1月 11が12月なため
		var date = dt.getDate();
		var hours = dt.getHours();
		var minutes = dt.getMinutes();

		var str = `${ver}&${year}_${month}_${date}_${hours}_${minutes}&`;

		var tmp;
		var count_data0 = 0;
		var count_data1 = 0;
		var count_data2 = 0;

		for (var i = 0; i < list.length; i++) {
			tmp = getUserItemStatus(list[i].Name)
			if (tmp == null) {
				str += 0;
				count_data0++;
			} else {
				str += tmp;
				if (tmp == "1") {
					count_data1++;
				} else if (tmp == "2") {
					count_data1++;
					count_data2++;
				} else {
					count_data0++;
				}
			}

		}

		$("#Twitter-Text-1").text(count_data2)
		$("#Twitter-Text-2").text(count_data1)
		$("#Twitter-Text-3").text(count_data0)
		sum = count_data0 + count_data1;
		num = count_data1;
		var n = 1;	// 小数点第n位まで残す
		$("#Twitter-Text-4").text(Math.floor((num / sum * 100) * Math.pow(10, n)) / Math.pow(10, n))

		if (USER_NAME != "自分" && USER_NAME != "" && USER_NAME != null) {
			str += `&${USER_NAME}`
		}

		str = encode(str).split("+");
		str = str.join("_")
		var url = `https://modunogay.github.io/DIY/index.html?` + str;
		$("#Tweet_URL_Input").val(url);

	});

}

function encode(str) {
	return LZString.compressToEncodedURIComponent(str);
}

function getUserItemStatus(getName) {
	var tmp = null;
	for (var i = 0; i < DIY.length; i++) {
		if (getName == DIY[i].name) {
			tmp = DIY[i].data;
			break;
		}
	}
	return tmp;
}


/**
 * ツイート用URLを発行→ツイート画面を表示
 */
function Tweet_Popup() {
	var tweetText = "DIYレシピ一覧を作成しました！%0a%0a"
	$("#collapseOne input[type='checkbox']").filter(":checked").each(function (index, elm) {
		tweetText += $.trim($('label[for="' + elm.id + '"]').text()).replace(/%/, "%25") + "%0a";
	})
	tweetText += "%0a";
	$("#collapseTwo input[type='checkbox']").filter(":checked").each(function (index, elm) {
		tweetText += $.trim($('label[for="' + elm.id + '"]').text()).replace(/#/gi, "%23") + "%20%0a";
	})
	var userURL = $("#Tweet_URL_Input").val();
	var url = "https://twitter.com/share?url=" + userURL + "&text=" + tweetText + "&related=modunogay";

	window.open(url, "tweet", "width=500,height=300");
}

/**
 * LocalStorageにテキストのCB状態を保存
 */

/**
 * LocalStorageにテキストのCB状態を保存
 * @param {Number} index - セットしたいCBの番号
 */
function Tweet_setCB_Text(index) {
	if (!$(`#Twitter-Text-CB-${index}`).prop('checked')) {
		USER_JSON_TWITTER_TEXT[index].data = 0;
	} else {
		USER_JSON_TWITTER_TEXT[index].data = 1;
	}
	localStorage.setItem("TWITTER_TEXT", JSON.stringify(USER_JSON_TWITTER_TEXT))
}

/**
 * LocalStorageにタグのCB状態を保存
 * @param {Number} index - セットしたいCBの番号
 */
function Tweet_setCB_Tag(index) {
	if (!$(`#Twitter-Tag-CB-${index}`).prop('checked')) {
		USER_JSON_TWITTER_TAG[index].data = 0;
	} else {
		USER_JSON_TWITTER_TAG[index].data = 1;
	}
	localStorage.setItem("DIY_TWITTER", JSON.stringify(USER_JSON_TWITTER_TAG))
}

$(function () {
	//Tweet_URL_Copyのクリップボード  セット
	$("#Tweet_URL_Copy").click(function () {
		var urlclipboard = new ClipboardJS('#Tweet_URL_Copy');
		urlclipboard.on("success", function (e) {
			alert("URLをコピーしました！");
		});
	})

	//Tweet_Name_Copyのクリップボード セット
	$("#Tweet_Name_Copy").click(function () {
		console.log("Tweet_Name_Copy");
	})
})

function DIYImageShare(){
	var tweetText = "【DIYレシピ テンプレ作成ツール】%0aDIYレシピの一覧を作成出来るサイト%0a%0a"
	tweetText += "%23あつ森%20%20%23テンプレ%20%20%23DIYレシピ%20%20%23DIYレシピ一覧%20%20%23レシピ一覧"
	var url = "https://twitter.com/share?url=" + "https://modunogay.github.io/DIY_IMAGE/index.html" + "&text=" + tweetText + "&related=modunogay";
	window.open(url, "tweet", "width=500,height=300");
}