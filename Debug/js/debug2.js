$(function () {
	var DIYclipboard = new ClipboardJS('#ClipboardJS-DIY');
	DIYclipboard.on("success", function (e) {
		alert("データをコピーしました！");
	});
})

function getData() {
	for (i = 0; i < 100; i++) {
		var temp = localStorage.getItem("DIY");
		if (temp == null) {
			$("#textarea-DIY").text($("#textarea-DIY").text() + `${i} null\n`)
		} else {
			var USER = JSON.parse(temp);
			if (USER[1] != null) {
				$("#textarea-DIY").text($("#textarea-DIY").text() + `${i} ${USER[1].name}\n`)
			} else {
				$("#textarea-DIY").text($("#textarea-DIY").text() + `${i} 1件目無し\n`)
			}
		}
	}
}