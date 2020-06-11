var radix = 10
var margin = 2

var promise = []

function myimage() {
	for (i = 1; i <= 4; i++) {
		promise[i] = new Promise((resolve, reject) => {
			var background = new Image();
			background.onload = finish(i);
			function finish(i) {
				return function () {
					context[i].beginPath();
					context[i].drawImage(this, 0, 0, elm[i].width, elm[i].height)
					return resolve();
				}
			}
			background.src = `./image/1_2_1_${i}.png`;
		})
	}

	Promise.all([promise[1], promise[2], promise[3], promise[4]]).then(function () {
		getJson()
	});

}

function getJson() {
	$.getJSON("./json/1_2_1.json", function (data) {
		if(tmp1 != null){
			FTR = JSON.parse(tmp1)
			for (i = 1; i < FTR.length; i++) {
				for (j = 0; j < data.length; j++) {
					if (FTR[i].name == data[j].name) {
						var index = parseInt(data[j].canvas);
						posi = getMyImagePosition(data[j].x, data[j].y)
						context[index].beginPath();
						context[index].rect(posi[0], posi[1], posi[2], posi[3]);
						if (FTR[i].data == 1) {
							context[index].fillStyle = "rgba(245,130,174,0.5)";
							context[index].fill();
							break;
						} else if (FTR[i].data == 2) {
							context[index].fillStyle = "rgba(139,211,221,0.5)";
							context[index].fill();
							break;
						}
	
					}
				}
			}
		}
		

		if(tmp2 != null){
			MISC = JSON.parse(tmp2)
			for (i = 1; i < MISC.length; i++) {
				for (j = 0; j < data.length; j++) {
					if (MISC[i].name == data[j].name) {
						var index = parseInt(data[j].canvas);
						posi = getMyImagePosition(data[j].x, data[j].y)
						context[index].beginPath();
						context[index].rect(posi[0], posi[1], posi[2], posi[3]);
						if (MISC[i].data == 1) {
							context[index].fillStyle = "rgba(245,130,174,0.5)";
							context[index].fill();
							break;
						} else if (MISC[i].data == 2) {
							context[index].fillStyle = "rgba(139,211,221,0.5)";
							context[index].fill();
							break;
						}
	
					}
				}
			}
		}


		if(tmp3 != null){
			FTR_WALL = JSON.parse(tmp3)
			for (i = 1; i < FTR_WALL.length; i++) {
				for (j = 0; j < data.length; j++) {
					if (FTR_WALL[i].name == data[j].name) {
						var index = parseInt(data[j].canvas);
						posi = getMyImagePosition(data[j].x, data[j].y)
						context[index].beginPath();
						context[index].rect(posi[0], posi[1], posi[2], posi[3]);
						if (FTR_WALL[i].data == 1) {
							context[index].fillStyle = "rgba(245,130,174,0.5)";
							context[index].fill();
							break;
						} else if (FTR_WALL[i].data == 2) {
							context[index].fillStyle = "rgba(139,211,221,0.5)";
							context[index].fill();
							break;
						}
	
					}
				}
			}
		}

		for(i=1;i<=4;i++){
			$(`#canvasImage${i}`).attr("src",elm[i].toDataURL())	
			$(`#download${i}`).css("display","inline-block");
			$(`#download${i}_dev`).css("display","inline-block");
		}

		$("#message").text("終了！")
	});
}


function getMyImagePosition(i, j) {
	return [(margin * radix) + (2 * radix) + (j * 10 * radix), (margin * radix) + (2 * radix) + (i * 10 * radix), radix * 6, radix * 6]
}
