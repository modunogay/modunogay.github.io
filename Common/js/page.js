/**
 * どのページを開いているか[DIY,FTR,MISC,FTR_WALL]
 */
var THIS_PAGE;

//elseはローカルな開発用
if (location.pathname.split("/")[3] == undefined) {
	THIS_PAGE = location.pathname.split("/")[1];
} else {
	THIS_PAGE = location.pathname.split("/")[3];
}
/**
 * キャッシュ制御用の変数
 */
var NOW_VERSION = localStorage.getItem(`NOW_${THIS_PAGE}_VERSION`);
$.get("../Common/version/now.txt", { _: new Date().getTime() }, function (data) {
	if (NOW_VERSION == null) {
		/*

			次回ここ削除

		*/
		localStorage.removeItem(`${THIS_PAGE}_TWITTER`)
		localStorage.setItem(`NOW_${THIS_PAGE}_VERSION`, data);
	} else if (NOW_VERSION != data) {
		localStorage.setItem(`NOW_${THIS_PAGE}_VERSION`, data);
		window.location.reload(true);
	}
});

/**
 * アイテムデータが入っている変数
 */
var USER_JSON = getlocalstorage("All", THIS_PAGE);
if (USER_JSON == null) {
	USER_JSON = [{ "name": "Name", "data": "value" }];
	localStorage.setItem(THIS_PAGE, JSON.stringify(USER_JSON));
}

/**
 * 「相手」のアイテムデータが入っている変数
 */
var OTHER_JSON = [{ "name": "Name", "data": "value" }];
sessionStorage.setItem(THIS_PAGE, JSON.stringify(OTHER_JSON));

/**
 * パラメータが存在するかどうか
 * @type{boolean}
 */
var param;
if (location.search.substring(1) == "") {
	param = false;
} else {
	param = true;
}

var USER_NAME = localStorage.getItem("USER_NAME")
if (USER_NAME == null) {
	USER_NAME = "自分"
}

var OTHER_USER_NAME;