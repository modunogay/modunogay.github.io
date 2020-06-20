$(function () {
	//clipboradJSを割り当て
	var urlclipboard = new ClipboardJS('#URLcopy');
	urlclipboard.on("success", function (e) {
		alert("URLをコピーしました！");

		eventGtag("share-btn", "URL")
	});

	var clipboard = new ClipboardJS('#getDOMName', {
		target: function (trigger) {
			$("#DOMNameInput").val(getDOMText())
			$("#DOMNameInput").css("display", "");
			return document.getElementById("DOMNameInput");
		}
	});

	clipboard.on("success", function (e) {
		$("#DOMNameInput").css("display", "none");
		alert("「現在表示されている」アイテム名をコピーしました！");

		eventGtag("share-btn", "Name")
	});

	// ダイアログの初期設定
	$("#mydialog").dialog({
		autoOpen: false,
		width: "80%",
		modal: true,
		close: function () {
			//console.log("close");
			$("#URL-Input").val("");
		},
		buttons: [
			{
				text: '閉じる',
				click: function () {
					$(this).dialog("close");
				}
			}
		]
	});
	$("#sharebtn").click(function () {
		$("#URL-Input").val("");
		//URLを作成
		createURL();
		// ダイアログの呼び出し
		$("#mydialog").dialog("open");

		eventGtag("share-btn", "share")
	});


	$(function () {
		if (THIS_PAGE == "DIY") {
			//下フィルターバーのCSSを動的変更
			if (!param) {
				$(".FilterBar label").css("width", "45%");
				$("#cb-1-label").css("width", "33%");
				$("#cb-1_5-label").css("width", "33%");
				$("#cb-3-label").css("width", "33%");
			}
			height = $(".FilterBar label").height() * 2 + $("#div-serch-area").height() + 20;
			$("#cb-sort-image").css({ "bottom": `${height}px` });
			$("#sharebtn").css({ "bottom": `${height}px` });
		} else {
			if (!param) {
				$(".FilterBar label").css("width", "45%");
			}
			height = $(".FilterBar label").height() * 2 + $("#div-serch-area").height() + 20;
			$("#cb-sort-image").css({ "bottom": `${height}px` });
			$("#sharebtn").css({ "bottom": `${height}px` });
		}
	});


	$(document).ready(function () {
		if (THIS_PAGE == "DIY") {
			$("#NameSearch").on("keyup", function () {
				var value = CharReplace($(this).val());
				var HTGvalue = CharReplace($("#HTGSearch").val());
				if (HTGvalue == "") {
					$(".Name").filter(function () {
						if (CharReplace($(this).text()).indexOf(value) > -1) {
							$(this).parent().removeClass("search-none");
						} else {
							$(this).parent().addClass("search-none");
						}
					});
				} else {
					$(".Name").filter(function () {
						if (CharReplace($(this).text()).indexOf(value) > -1 && CharReplace($(this).next().text()).indexOf(HTGvalue) > -1) {
							$(this).parent().removeClass("search-none");
						} else {
							$(this).parent().addClass("search-none");
						}
					});
				}
			});
			$("#HTGSearch").on("keyup", function () {
				var Namevalue = CharReplace($("#NameSearch").val());
				var value = CharReplace($(this).val());
				if (Namevalue == "") {
					$(".HTG").filter(function () {
						if (CharReplace($(this).text()).indexOf(value) > -1) {
							$(this).parent().removeClass("search-none");
						} else {
							$(this).parent().addClass("search-none");
						}
					});
				} else {
					$(".HTG").filter(function () {
						if (CharReplace($(this).text()).indexOf(value) > -1 && CharReplace($(this).prev().text()).indexOf(Namevalue) > -1) {
							$(this).parent().removeClass("search-none");
						} else {
							$(this).parent().addClass("search-none");
						}
					});
				}
			});
		} else {
			$("#NameSearch").on("keyup", function () {
				var value = CharReplace($(this).val());
				$(".Name").filter(function () {
					if (CharReplace($(this).text()).indexOf(value) > -1) {
						$(this).parent().removeClass("search-none");
					} else {
						$(this).parent().addClass("search-none");
					}
				});
			});
		}

	});

	$(function () {
		add = `<input type="text" id="input-USER_NAME" placeholder="名前入力" maxlength="8"><br>
				<button onclick="setUSER_NAME()" id="btn-USER_NAME">名前をセット</button>`
		$("#USER_NAME_space").append(add)

		if (param) {
			add = `<button class="GetGive-btn" onclick="setGiveItem()" >あげる物</button>
			<button class="GetGive-btn" onclick="setResetItem()" >全て表示</button>
			<button class="GetGive-btn" onclick="setGetItem()" >貰える物</button>`
			$("#Btn_GetAndGive_space").append(add)
		}
	})

	var Analysis = $('#Analysis');
	//スクロールしてページトップから200に達したらボタンを表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			//フェードインで表示
			Analysis.fadeIn();
		} else {
			//フェードアウトで非表示
			Analysis.fadeOut();
		}
	});
});

function setUSER_NAME() {
	var tmp = $("#input-USER_NAME").val()
	if (tmp == "") {
		alert("名前が入力されていません…。");
	} else {
		var reg = new RegExp(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g);
		var reg2 = new RegExp(/[ぁ-んァ-ン一-龥0-9０-９a-zA-Zａ-ｚＡ-Ｚ]/g);
		if (reg.test(tmp) || !reg2.test(tmp)) {
			alert("特殊文字が含まれています…別の名前でお願いします。");
		} else {
			USER_NAME = tmp
			$("#input-USER_NAME").val("")
			$("#USER_NAME_text").text(USER_NAME)
			localStorage.setItem("USER_NAME", USER_NAME)
			alert("名前をセットしました！")
			eventGtag("setName-btn", "Set")
		}
	}
}


//val 全表示:１
//    取得済 可:2
//    取得済 不可:3
//    未取得 不可:4
//貰える物
function setGetItem() {
	$(`#cb-1-row`).val(4);
	$(`#cb-4-row`).val(2);
	for (i = 1; i <= ListLength; i++) {
		if ($(`#${i}_Get_Label`).text() == "未取得" && $(`#${i}_Peer_Give_Label`).text() == "可") {
			$(`#table-${i}-row`).removeClass(`table-row-1-none`);
			$(`#table-${i}-row`).removeClass(`table-row-4-none`);
		} else {
			$(`#table-${i}-row`).addClass(`table-row-1-none`);
			$(`#table-${i}-row`).addClass(`table-row-4-none`);
		}
	}

	$(`#cb-1-row-label`).html(`<div class="get_text_not">未取得</div> &nbsp; <div class="give_text_not">不可</div>`);
	$(`#cb-4-row-label`).html(`<div class="give_text">可</div> &nbsp; <div class="get_text">取得済</div> `);

	eventGtag("GetGive-btn", "Get");
}
//あげる物
function setGiveItem() {
	$(`#cb-1-row`).val(2);
	$(`#cb-4-row`).val(4);
	for (i = 1; i <= ListLength; i++) {
		if ($(`#${i}_Peer_Get_Label`).text() == "未取得" && $(`#${i}_Give_Label`).text() == "可") {
			$(`#table-${i}-row`).removeClass(`table-row-1-none`);
			$(`#table-${i}-row`).removeClass(`table-row-4-none`);
		} else {
			$(`#table-${i}-row`).addClass(`table-row-1-none`);
			$(`#table-${i}-row`).addClass(`table-row-4-none`);
		}
	}
	$(`#cb-1-row-label`).html(`<div class="get_text">取得済</div> &nbsp; <div class="give_text">可</div>`);
	$(`#cb-4-row-label`).html(`<div class="give_text_not">不可</div> &nbsp; <div class="get_text_not">未取得</div> `);

	eventGtag("GetGive-btn", "Give");
}

//全表示
function setResetItem() {
	$(`#cb-1-row`).val(2);
	$(`#cb-4-row`).val(2);
	$(".table-row").filter(function () {
		$(this).removeClass(`table-row-1-none`);
		$(this).removeClass(`table-row-4-none`);
	})
	$(`#cb-1-row-label`).text(`全表示中`);
	$(`#cb-4-row-label`).text(`全表示中`);

	eventGtag("GetGive-btn", "All");
}



function tableFontSize() {
	//テーブルのフォントサイズを変更
	var fontsize = localStorage.getItem("Table-Font-Size");
	if (fontsize == null) {
		fontsize = 100;
	} else if (fontsize != 100) {
		$('#fav-table').css("fontSize", `${fontsize}%`);
	}

	// 2スライダーを適用
	$('#slider').slider({
		value: fontsize,
		min: 65,
		max: 135,
		step: 1,

		change: function (e, ui) {
			$('#num').text(`${ui.value}%`);
			$('#fav-table').css("fontSize", `${ui.value}%`)
			localStorage.setItem("Table-Font-Size", ui.value);
		},
		// 4スライダーの初期化時に、その値をテキストボックスにも反映
		create: function (e, ui) {
			$('#num').text(`${$(this).slider('option', 'value')}%`);
		}
	});
	$("#slider").draggable();
}
