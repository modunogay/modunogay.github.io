function setclip(){
	/*
	alert("呼び出し");
	var clipboard = new ClipboardJS('#getDOMName', {
		text: function () {
			return `
		ひえええええええええええええええええええ
		いざん延暦寺
		`;
		}
	});

	clipboard.on("success", function (e) {
		alert("copy")
	});
*/
}

$(document).on('click', '#getDOMName', function () {
	alert("クリック")
	$("#DOMNameInput").val("にゃーん")
	


});