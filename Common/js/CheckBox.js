/**
 * チェックボックスが変更された時、LocalStorageに保存する関数
 * @param {int} e CheckBoxのID
 */
function CheckBoxChenge(e) {
	var num = checkBoxCount(e);
	setlocalstorage(num[0], num[1], THIS_PAGE);
}


//0:未取得	不可
//1:取得済	不可	
//2:取得済	可

/**
 * IDから状態，及びアイテム名を返す
 * @param {int} id CheckBoxの状態[id_(get or give) ]
 */
function checkBoxCount(id) {
	var index = id.split("_");
	index[0]++;
	var count = "";


	var Get_CheckBox = $(`#${index[0]}_Get`);
	var Give_CheckBox = $(`#${index[0]}_Give`);
	var Get_CheckBox_Label = $(`#${index[0]}_Get_Label`);
	var Give_CheckBox_Label = $(`#${index[0]}_Give_Label`);

	var ItemName = $(`#${index[0]}_Name`).text();

	if (Get_CheckBox.prop('checked') == false && Give_CheckBox.prop('checked') == false) {
		Get_CheckBox_Label.text("未取得");
		Give_CheckBox_Label.text("不可");
		count = 0;
	} else if (Get_CheckBox.prop('checked') == false && Give_CheckBox.prop('checked') == true) {
		//Getから押された場合両方ともfalse
		if (index[1] == "Get") {
			Give_CheckBox.prop("checked", false);
			Get_CheckBox_Label.text("未取得");
			Give_CheckBox_Label.text("不可");
			count = 0;
		} else {
			Get_CheckBox.prop("checked", true);
			Get_CheckBox_Label.text("取得済");
			Give_CheckBox_Label.text("可");
			count = 2;
		}
	} else if (Get_CheckBox.prop('checked') == true && Give_CheckBox.prop('checked') == false) {
		Get_CheckBox_Label.text("取得済");
		Give_CheckBox_Label.text("不可");
		count = 1;
	} else if (Get_CheckBox.prop('checked') == true && Give_CheckBox.prop('checked') == true) {
		Get_CheckBox_Label.text("取得済");
		Give_CheckBox_Label.text("可");
		count = 2;
	}

	//配布不可の時(countが0か1の時) 「枚数」を0にする
	if (THIS_PAGE == "DIY") {
		if ((count == 1 || count == 0) && ($(`#selectID-${index[0]}`).val() != 0)) {
			setlocalstorage($(`#${index[0]}_Name`).text(), 0, "DIY_COUNT");
			$(`#selectID-${index[0]}`).val(0)
		}
	}
	return [ItemName, count];
};



if (THIS_PAGE == "DIY") {
	//動的に追加した要素にはdocument.onで対応
	$(document).on('click', 'select', function () {
		if ($(this).parent().parent().find(".table-1-column").find(".Give-Label").text() == "不可") {
			alert("エラー!配布可にチェックはしましたか？");
			$(this).val(0);
		}
	});

	$(document).on('change', 'select', function () {

		var selectCount = $(this).val();
		var selectCountName = $(this).parent().parent().find(".Name").text();
		if ($(this).parent().parent().find(".table-1-column").find(".Give-Label").text() == "不可") {
			$(this).val(0);
			selectCount = 0;
			return 0;
		}
		setlocalstorage(selectCountName, selectCount, "DIY_COUNT");
	});
}