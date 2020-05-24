function CheckBoxChenge(e) {
	var num = checkBoxCount(e);
	setlocalstorage(num[0], num[1],"FTR");
}

/*
checkboxのIDから状態，及びアイテム名を返す
	0:未取得	不可
	1:取得済	不可	
	2:取得済	可
*/
function checkBoxCount(id) {
	//index[id, (get or give) ]
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
		if(index[1] == "Get"){
			Give_CheckBox.prop("checked", false);
			Get_CheckBox_Label.text("未取得");
			Give_CheckBox_Label.text("不可");
			count = 0;
		}else{
			Get_CheckBox.prop("checked", true);
			Get_CheckBox_Label.text("取得済");
			Give_CheckBox_Label.text("可");
			count = 2;
		}
	}else if (Get_CheckBox.prop('checked') == true && Give_CheckBox.prop('checked') == false) {
		Get_CheckBox_Label.text("取得済");
		Give_CheckBox_Label.text("不可");
		count = 1;
	}else if (Get_CheckBox.prop('checked') == true && Give_CheckBox.prop('checked') == true) {
		Get_CheckBox_Label.text("取得済");
		Give_CheckBox_Label.text("可");
		count = 2;
	}
	return [ItemName, count];
};
