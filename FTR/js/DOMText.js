function getDOMText() {
	var temp = "";
		$("tbody tr:visible").filter(function () {
			temp += $(this).find(".Name").text();
			temp += "\n";
		})
	return temp;
}