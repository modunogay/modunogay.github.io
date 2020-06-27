/**
 * モーダルが開くときの処理 (取得済の枚数等をセット)
 */
function Tweet_Open_Modal() {
	console.log("open_modal");
}

/**
 * ツイート用URLを発行→ツイート画面を表示
 */
function Tweet_Popup() {
	console.log("ツイート画面表示");
}

/**
 * LocalStorageにテキストのCB状態を保存
 */

/**
 * LocalStorageにテキストのCB状態を保存
 * @param {Number} index - セットしたいCBの番号
 */
function Tweet_setCB_Text(index) {
	console.log("LocalStorageにCB状態を保存 ： テキスト", index);
}

/**
 * LocalStorageにタグのCB状態を保存
 * @param {Number} index - セットしたいCBの番号
 */
function Tweet_setCB_Tag(index) {
	console.log("LocalStorageにCB状態を保存 ： タグ", index);
}

$(function () {
	//Tweet_URL_Copyのクリップボード  セット
	$("#Tweet_URL_Copy").click(function () {
		console.log("Tweet_URL_Copy");
	})

	//Tweet_Name_Copyのクリップボード セット
	$("#Tweet_Name_Copy").click(function () {
		console.log("Tweet_Name_Copy");
	})
})