var stage;
var queue = new createjs.LoadQueue(true);

function setBack() {
	$("#selectImageNum").hide(200)
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

var DIY;
var pinkColor = "#FF7BAC73"
var blueColor = "#3FA9F573"


function setColor(num){
	if(num == 1){
		pinkColor = "#FF7BAC73"
		$("#cardImage").attr("src","./image/DIY_ピンク.png");
		$("#cardText").text("デフォルト");
	}else{
		pinkColor = "#3d3d3dCC"
		$("#cardImage").attr("src","./image/DIY_黒.png");
		$("#cardText").text("真っ暗")
	}
}

function myimage() {
	$.getJSON("./json/1_3_0.json", function (data) {
		DIY = JSON.parse(tmp)
		for (i = 0; i < data.length; i++) {
			for (j = 1; j < DIY.length; j++) {
				if (data[i].Name == DIY[j].name) {
					if (parseInt(DIY[j].data) == 1) {
						setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), pinkColor);
						break;
					} else if (parseInt(DIY[j].data) == 2) {
						setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), blueColor);
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

		var el = document.getElementById('Image');   // 要素を指定
			el.style.display = "block";

		$("#message").text("終了！")
	})
}

var kihon = [22.5, 209.5]
var padding = [31.7,38.3]

function getMyImagePosition(j, i) {
	return [kihon[0] + (75 * (i - 1)) + (padding[0] * (i - 1)), kihon[1] + (75 * (j - 1)) + (padding[1] * (j - 1)), 75, 75]
}

function setBackColor(page, posi, color) {
	var shape = new createjs.Shape();
	shape.graphics.beginFill(color);
	shape.graphics.drawRoundRect(posi[0], posi[1], posi[2], posi[3], 10, 10); //100pxの正方形を描画。10pxの角丸を設定。
	stage[page - 1].addChild(shape); // 表示リストに追加
}
