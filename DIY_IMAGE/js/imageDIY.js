var radix = 6;
var margin = 2;
var promise = []
var stage;
var queue = new createjs.LoadQueue(true);

function setBack() {

	stage = [new createjs.Stage("myCanvas1"), new createjs.Stage("myCanvas2"), new createjs.Stage("myCanvas3"), new createjs.Stage("myCanvas4")]

	var manifest = [
		{ "src": "./image/DIY_1.png", "id": "1" },
		{ "src": "./image/DIY_2.png", "id": "2" },
		{ "src": "./image/DIY_3.png", "id": "3" },
		{ "src": "./image/DIY_4.png", "id": "4" }]
	queue.loadManifest(manifest, true);
	queue.addEventListener("fileload", handleFileLoadComplete);
	queue.addEventListener("complete", handleComplete);


	function handleFileLoadComplete(event) {
		var img = new createjs.Bitmap(event.result);
		img.x = 0;
		img.y = 0;
		console.log()
		stage[parseInt(event.item.id) - 1].addChild(img);
	}

	function handleComplete(event) {
		for (i = 0; i < 4; i++) {
			stage[i].update();
		}
		myimage();
	}

}

function myimage() {
	$.getJSON("./json/1_2_1.json", function (data) {
		var DIY = JSON.parse(tmp)
		for (i = 0; i < data.length; i++) {
			for (j = 1; j < DIY.length; j++) {
				if (data[i].Name == DIY[j].name) {
					if (parseInt(DIY[j].data) == 1) {
						setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), "#FF7BAC73");
						break;
					} else if (parseInt(DIY[j].data) == 2) {
						setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), "#3FA9F573");
						break;
					} else {
						break;
					}
				}
			}
		}
		for (i = 0; i < 4; i++) {
			stage[i].update();
		}
		for (i = 1; i <= 4; i++) {
			$(`#canvasImage${i}`).attr("src", elm[i].toDataURL())
			$(`#download${i}`).css("display", "inline-block");
			$(`#download${i}_dev`).css("display", "inline-block");
			context[i].width = 0;
			context[i].height = 0;
			delete context[i];
		}
		$("#message").text("終了！")
	})
}

var kihon = [25, 206]
//var padding = [36.7,44.5]

function getMyImagePosition(j, i) {
	return [kihon[0] + (70 * (i - 1)) + (36.7 * (i - 1)), kihon[1] + (70 * (j - 1)) + (44.5 * (j - 1)), 70, 70]
}

function setBackColor(page, posi, color) {
	var shape = new createjs.Shape();
	shape.graphics.beginFill(color);
	shape.graphics.drawRoundRect(posi[0], posi[1], posi[2], posi[3], 10, 10); //100pxの正方形を描画。20pxの角丸を設定。
	stage[page - 1].addChild(shape); // 表示リストに追加
}
