var stage;
var queue = new createjs.LoadQueue(true);
var isNum4;

function setImage(num) {
	$("#message").text("処理中…")
	$("#selectImageNum").hide(200)
	var canvasSpace = document.getElementById("CanvasSpace");

	if (num == 4) {
		isNum4 = true;
	}

	var width = 2160, height = 3414, CanvasName = "myCanvas";
	if (isNum4) {
		width = 4330
		CanvasName = "Matome_Canvas"
	}

	for (let i = 1; i <= num; i++) {
		var canvas = document.createElement("canvas");
		canvas.setAttribute("id", `${CanvasName + i}`)
		canvas.setAttribute("width", `${width}`)
		canvas.setAttribute("height", `${height}`)
		canvasSpace.append(canvas)
	}

	//Canvasセット
	for (let i = 1; i <= num; i++) {
		elm[i] = document.getElementById(`${CanvasName + i}`)
		context[i] = elm[i].getContext("2d");
		if (context[i] == null) {
			alert("メモリが不足しています…。一度【タスクキル】【他のタブを閉じる】をしてからもう一度お願い致します。")
			break;
		}
	}

	setBack(num, CanvasName);

}




function setBack(num, CanvasName) {

	var array = [];
	for (var i = 0; i < num; i++) {
		array[i] = (new createjs.Stage(`${CanvasName + (i + 1)}`))
	}

	console.log(array);

	stage = array;

	var manifest = [
		{ "src": "./image/FTR_1.png", "id": "1" },
		{ "src": "./image/FTR_2.png", "id": "2" },
		{ "src": "./image/FTR_3.png", "id": "3" },
		{ "src": "./image/FTR_4.png", "id": "4" },
		{ "src": "./image/FTR_5.png", "id": "5" },
		{ "src": "./image/FTR_6.png", "id": "6" },
		{ "src": "./image/FTR_7.png", "id": "7" },
		{ "src": "./image/FTR_8.png", "id": "8" }]
	queue.loadManifest(manifest, true);
	queue.addEventListener("fileload", handleFileLoadComplete);
	queue.addEventListener("complete", handleComplete);


	function handleFileLoadComplete(event) {
		var id = parseInt(event.item.id)
		if (isNum4) {
			var img = new createjs.Bitmap(event.result);
			if ((id % 2) == 0) {
				img.x = 2160 + 10;
			} else {
				img.x = 0;
			}
			img.y = 0;
			stage[Math.ceil(id / 2) - 1].addChild(img);
		} else {
			var img = new createjs.Bitmap(event.result);
			img.x = 0;
			img.y = 0;
			stage[id - 1].addChild(img);
		}
	}
	function handleComplete(event) {
		for (i = 0; i < num; i++) {
			stage[i].update();
		}
		myimage(num, CanvasName);
	}
}



var colorPink = "#f5568f80";
var colorBlue = "#3FA9F573";

function setColor(num){
	if(num == 1){
		colorPink = "#FF7BAC73"
		$("#cardImage").attr("src","./image/FTR_ピンク.png");
		$("#cardText").text("デフォルト");
	}else{
		colorPink = "#3d3d3dCC"
		$("#cardImage").attr("src","./image/FTR_黒.png");
		$("#cardText").text("真っ暗")
	}
}

var FTR, MISC, FTR_WALL;
function myimage(num, CanvasName) {
	$.getJSON("./json/1_3_0.json", function (data) {
		FTR = JSON.parse(tmp1)
		MISC = JSON.parse(tmp2)
		FTR_WALL = JSON.parse(tmp3)

		//FTR
		if(FTR == null){
			alert("おや…家具がチェックされていないようです。")
			$("#message").text("エラー！ 家具はチェックしましたか？")
			return;
		}
		for (let j = 1; j < FTR.length; j++) {
			for (let i = 0; i < data.length; i++) {
				if (data[i].Name == FTR[j].name) {
					if (parseInt(FTR[j].data) == 1) {
						if (isNum4) {
							setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorPink);
						} else {
							setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorPink);
						}
						break;
					} else if (parseInt(FTR[j].data) == 2) {
						setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorBlue);
						break;
					} else {
						break;
					}
				}
			}
		}


		//MISC
		if(MISC == null){
			alert("おや…小物家具がチェックされていないようです。ページトップから、【小物家具】を参照してください。")
			$("#message").text("エラー！ 小物家具はチェックしましたか？")
			return;
		}
		for (let j = 1; j < MISC.length; j++) {
			for (let i = 0; i < data.length; i++) {
				if (data[i].Name == MISC[j].name) {
					if (parseInt(MISC[j].data) == 1) {
						if (isNum4) {
							setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorPink);
						} else {
							setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorPink);
						}
						break;
					} else if (parseInt(MISC[j].data) == 2) {
						setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorBlue);
						break;
					} else {
						break;
					}
				}
			}
		}

		//FTR_WALL
		if(FTR_WALL == null){
			alert("おや…壁掛け家具がチェックされていないようです。ページトップから、【壁掛け家具】を参照してください。")
			$("#message").text("エラー！ 壁掛け家具はチェックしましたか？")
			return;
		}
		for (let j = 1; j < FTR_WALL.length; j++) {
			for (let i = 0; i < data.length; i++) {
				if (data[i].Name == FTR_WALL[j].name) {
					if (parseInt(FTR_WALL[j].data) == 1) {
						if (isNum4) {
							setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorPink);
						} else {
							setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorPink);
						}
						break;
					} else if (parseInt(FTR_WALL[j].data) == 2) {
						setBackColor(data[i].page, getMyImagePosition(data[i].row, data[i].col), colorBlue);
						break;
					} else {
						break;
					}
				}
			}
		}

		
		for (i = 0; i < num; i++) {
			if (isNum4) {
				var shape = new createjs.Shape();
				shape.graphics.beginFill("#04ae82");
				shape.graphics.drawRect(2160, 0, 10, 3414);
				stage[i].addChild(shape);
			}
			stage[i].update();
		}
		var downName = "download"
		var canvasImageName = "canvasImage";
		if (isNum4) {
			downName = "MatomeDownload"
			canvasImageName = "MatomeCanvasImage";
		}
		for (i = 1; i <= num; i++) {
			$(`#${canvasImageName + i}`).attr("src", elm[i].toDataURL())
			$(`#${downName + i}`).css("display", "inline-block");
			$(`#${downName + i}_dev`).css("display", "inline-block");
			context[i].width = 0;
			context[i].height = 0;
			delete context[i];
		}

		if (isNum4) {
			var el = document.getElementById('Image4');   // 要素を指定
			el.style.display = "block";
		} else {
			var el = document.getElementById('Image8');   // 要素を指定
			el.style.display = "block";
		}

		//iphoneならダウンロードボタンを非表示に
		if (navigator.userAgent.indexOf("iPhone") > 0) {
			$('.iPhone-none').css('display', 'none');
			$(".iPhone-none-add").text("長押しで保存してください")
		}

		$("#message").text("終了！")
	})
}

var kihon = [18, 450]
var padding = [40.2, 83.8]
//kihon[横,縦]
//padding[横,縦]

function getMyImagePosition(j, i) {
	return [kihon[0] + (104 * (i - 1)) + (padding[0] * (i - 1)), kihon[1] + (104 * (j - 1)) + (padding[1] * (j - 1)), 104, 104]
}
//[起点x,起点y,そこからx,そこからy]

function setBackColor(page, posi, color) {
	var shape = new createjs.Shape();
	shape.graphics.beginFill(color);
	if (isNum4) {
		if ((page % 2) == 0) {
			shape.graphics.drawRoundRect(posi[0] + 2170, posi[1], posi[2], posi[3], 10, 10); //10pxの角丸を設定。
		} else {
			shape.graphics.drawRoundRect(posi[0], posi[1], posi[2], posi[3], 10, 10); //10pxの角丸を設定。
		}
		stage[Math.ceil(page / 2) - 1].addChild(shape);
	} else {
		shape.graphics.drawRoundRect(posi[0], posi[1], posi[2], posi[3], 10, 10); //10pxの角丸を設定。
		stage[page - 1].addChild(shape); // 表示リストに追加
	}
}