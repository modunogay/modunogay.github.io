function getDOMText() {
	var num;
	var temp = "";
	if ($("#cb-1_5-column").prop('checked') == false) {
		$("tbody tr:visible").filter(function () {
			num = $(this).find("select").val()
			if (num == "0" || num == "1") {
				temp += $(this).find(".Name").text();
			} else {
				temp += $(this).find(".Name").text() + " " + num;
			}
			temp += "\n";
		})
	} else {
		$("tbody tr:visible").filter(function () {
			temp += $(this).find(".Name").text();
			temp += "\n";
		})
	}
	return temp;
}