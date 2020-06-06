$(function () {
	//clipboradJSを割り当て
	var urlclipboard = new ClipboardJS('#URLcopy');
	urlclipboard.on("success", function (e) {
		alert("URLをコピーしました！");
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
	})
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
		}
	}
}

function tableFontSize() {
	//テーブルのフォントサイズを変更
	var fontsize = localStorage.getItem("Table-Font-Size");
	if (fontsize == null) {
		fontsize = 100;
	} else {
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
