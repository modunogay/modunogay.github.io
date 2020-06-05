$(function () {
	$("#textarea-DIY").text(getData("DIY"))
	$("#textarea-FTR").text(getData("FTR"))
	$("#textarea-MISC").text(getData("MISC"))
	$("#textarea-FTR_WALL").text(getData("FTR_WALL"))

	var DIYclipboard = new ClipboardJS('#ClipboardJS-DIY');
	DIYclipboard.on("success", function (e) {
		alert("DIYのデータをコピーしました！");
	});

	var FTRclipboard = new ClipboardJS('#ClipboardJS-FTR');
	FTRclipboard.on("success", function (e) {
		alert("家具のデータをコピーしました！");
	});

	var MISCclipboard = new ClipboardJS('#ClipboardJS-MISC');
	MISCclipboard.on("success", function (e) {
		alert("小物家具のデータをコピーしました！");
	});

	var FTR_WALLclipboard = new ClipboardJS('#ClipboardJS-FTR_WALL');
	FTR_WALLclipboard.on("success", function (e) {
		alert("壁掛け家具のデータをコピーしました！");
	});
})

function getData(key) {
	str =  localStorage.getItem(key);
	return str.replace(/},|[\[ \] \}]/g,"$&\n").replace(/{/g,"\t$&");
}

