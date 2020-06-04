/**
 * 全角英数字を半角英数字に変換
 * カタカナをひらがなに変換
 * 大文字を小文字に変換する関数
 * @param {string} str 変換したい文字列
*/
function CharReplace(str) {
	return str.toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
		return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
	}).replace(/[\u30a1-\u30f6]/g, function (s2) {
		return String.fromCharCode(s2.charCodeAt(0) - 0x60);
	});
};


/**
 * 指定されたテーブル列を非表示にする関数
 * @param {int} index 非表示にしたい列(column)
 */
function ClassReplace(index) {
	if ($(`#cb-${index}-column`).prop('checked')) {
		$(`.table-${index}-column`).hide();
		$(`#table-${index}-width`).hide();
	} else {
		$(`.table-${index}-column`).show();
		$(`#table-${index}-width`).show();
	}
	cssChenge();
};



/**
 * その他や非売品の「行」を表示/非表示にする関数
 * @param {int} index 対応するチェックボックスのID
 */
function row_Other_ClassReplace(index) {
	//toggleやshow,hideなどで対応すると「列」の表示を変更した際、
	//整合性が保てずバグるのでクラス追加で対
	//DIYならその他を非表示に
	if (THIS_PAGE == "DIY") {
		if ($(`#cb-${index}-row`).prop('checked')) {
			$(".HTG").filter(function () {
				if ($(this).text() == "その他") {
					$(this).parent().addClass("table-row-other-none");
				}
			})
		} else {
			$(".HTG").filter(function () {
				if ($(this).text() == "その他") {
					$(this).parent().removeClass("table-row-other-none");
				};
			});
		};
	} else {
		//それ以外なら「NFS」クラスを非表示に
		if ($(`#cb-${index}-row`).prop('checked')) {
			$(".NFS").filter(function () {
				$(this).parent().addClass("table-row-other-none");
			})
		} else {
			$(".NFS").filter(function () {
				$(this).parent().removeClass("table-row-other-none");
			});
		};
	}
};

/**
 * 画面下の「取得済」「可」などのフィルター部分
 * checkboxの値を参照し、対応する状態で「行」を表示/非表示
 * @param {int} index 対応するチェックボックスのID
 */
function row_ClassReplace(index) {
	//lazyloadを一旦noneにすることで画像取得を停止
	$(".lazyload").css("display", "none");

	var val = parseInt($(`#cb-${index}-row`).val());
	if (val == 4) {
		$(`#cb-${index}-row`).val(1);
	} else {
		$(`#cb-${index}-row`).val(val + 1);
	};
	switch (val) {
		//全部
		case 1:
			$(".table-row").filter(function () {
				$(`#cb-${index}-row-label`).text(`全表示中`);
				$(this).removeClass(`table-row-${index}-none`);
			})
			break;

		//取得済_可
		case 2:
			if (index == 1) {
				$(`#cb-${index}-row-label`).html(`<div class="get_text">取得済</div> &nbsp; <div class="give_text">可</div>`);
			} else {
				$(`#cb-${index}-row-label`).html(`<div class="give_text">可</div> &nbsp; <div class="get_text">取得済</div> `);
			}
			$(".table-row").filter(function () {
				if ($(this).find(`.table-${index}-column .Get-Label`).text() == "取得済" && $(this).find(`.table-${index}-column .Give-Label`).text() == "可") {
					$(this).removeClass(`table-row-${index}-none`);
				} else {
					$(this).addClass(`table-row-${index}-none`);
				}
			})
			break;

		//取得済_不可
		case 3:
			if (index == 1) {
				$(`#cb-${index}-row-label`).html(`<div class="get_text">取得済</div> &nbsp; <div class="give_text_not">不可</div>`);
			} else {
				$(`#cb-${index}-row-label`).html(`<div class="give_text_not">不可</div> &nbsp; <div class="get_text">取得済</div> `);
			}
			$(".table-row").filter(function () {
				if ($(this).find(`.table-${index}-column .Get-Label`).text() == "取得済" && $(this).find(`.table-${index}-column .Give-Label`).text() == "不可") {
					$(this).removeClass(`table-row-${index}-none`);
				} else {
					$(this).addClass(`table-row-${index}-none`);
				}
			})
			break;

		//未取得_不可
		case 4:
			if (index == 1) {
				$(`#cb-${index}-row-label`).html(`<div class="get_text_not">未取得</div> &nbsp; <div class="give_text_not">不可</div>`);
			} else {
				$(`#cb-${index}-row-label`).html(`<div class="give_text_not">不可</div> &nbsp; <div class="get_text_not">未取得</div> `);
			}
			$(".table-row").filter(function () {
				if ($(this).find(`.table-${index}-column .Get-Label`).text() == "未取得" && $(this).find(`.table-${index}-column .Give-Label`).text() == "不可") {
					$(this).removeClass(`table-row-${index}-none`);
				} else {
					$(this).addClass(`table-row-${index}-none`);
				}
			})
			break;
	}
	$(".lazyload").css("display", "");
};


/**
 * 表示される列に対し動的に文字サイズを変更する関数
 */
function cssChenge() {
	$(function cssChenge() {
		var len = $('.colTitle th').filter(':visible').length;
		var font1 = $('.table-1-column');
		var font2 = $('.table-2-column');
		var font4 = $('.table-4-column');


		switch (len) {
			case 2:
				font2.css("fontSize", "1.2em");
				break;
			case 3:
				font1.css("fontSize", "1em");
				font2.css("fontSize", `1em`);
				font4.css("fontSize", "1em");
				break;
			case 4:
				font1.css("fontSize", "0.8em");
				font4.css("fontSize", "0.8em");
				break;
		}
	})
}
