function createURL() {
	$(function () {
		$.get("./version/now.txt", function (data) {
			$.getJSON(`./json/${data}.json`, function (list) {
				var ver = data;
				var dt = new Date();
				var year = dt.getFullYear();
				var month = dt.getMonth() + 1; //0が1月 11が12月なため
				var date = dt.getDate();
				var hours = dt.getHours();
				var minutes = dt.getMinutes();
				var str = `${ver}&${year}_${month}_${date}_${hours}_${minutes}&`;

				var tmp;
				var count_data0 = 0;
				var count_data1 = 0;
				var count_data2 = 0;

				for (i = 0; i < list.length; i++) {
					tmp = getlocalstorage(list[i].Name, "")
					if ( tmp == null) {
						str += 0;
						count_data0++;
					} else {
						str += tmp;
						if(tmp == "1"){
							count_data1++;
						}else if(tmp == "2"){
							count_data2++;
						}else{
							count_data0++;
						}
					}
				}
				console.log(count_data0 + " " + count_data1 + " " + count_data2)

				if(USER_NAME != "自分" || USER_NAME == ""){
					str += `&${USER_NAME}`
				}
				str = encode(str).split("+");
				str = str.join("_")
				var url = "http://" + location.host + `/${THIS_PAGE}/index.html?` + str;
				$("#URL-Input").val(url);
			});
		})
	})
};

function encode(str) {
	return LZString.compressToEncodedURIComponent(str);
}

function decode(str) {
	str = str.split("_");
	str = str.join("+");
	return LZString.decompressFromEncodedURIComponent(str);
};


function getlocalstorage(str, getName) {

	if (str == "selectCount") {
		//要素が一致した場合
		for (key in USER_JSON) {
			if (USER_JSON[key].name == getName) {
				if (USER_JSON[key].count == undefined || USER_JSON[key].count == null) {
					return 0;
				}
				return USER_JSON[key].count;
			}
		}
		//要素が一致しなかった場合
		return 0;
	}

	//データをすべて取得
	if (str == "All") {
		if (localStorage.getItem(getName) != null) {
			return JSON.parse(localStorage.getItem(getName));
		} else {
			return null;
		}
	} else {
		//要素が一致した場合
		for (key in USER_JSON) {
			if (USER_JSON[key].name == str) {
				return USER_JSON[key].data;
			}
		}
		//要素が一致しなかった場合
		return 0;
	}
}

function setlocalstorage(Name, value, setName) {
	var flag = true;
	if (setName == THIS_PAGE) {
		for (key in USER_JSON) {
			if (USER_JSON[key].name == Name) {
				USER_JSON[key].data = value;
				flag = false;
				break;
			}
		}
		if (flag) {
			var data = { "name": Name, "data": value };
			USER_JSON.push(data);
		}
		localStorage.setItem(setName, JSON.stringify(USER_JSON));
	} else if (setName == `${THIS_PAGE}_TWITTER`) {
		for (key in USER_JSON_TWITTER) {
			if (USER_JSON_TWITTER[key].name == Name) {
				USER_JSON_TWITTER[key].data = value;
				flag = false;
				break;
			}
		}
		if (flag) {
			var data = { "name": Name, "data": value };
			USER_JSON_TWITTER.push(data);
		}
		localStorage.setItem(setName, JSON.stringify(USER_JSON_TWITTER));
	} else if (setName == "DIY_COUNT") {
		for (key in USER_JSON) {
			if (USER_JSON[key].name == Name) {
				USER_JSON[key].count = parseInt(value);
				flag = false;
				break;
			}
		}
		if (flag) {
			alert("エラー!配布可にチェックはしましたか？");
		}
		localStorage.setItem("DIY", JSON.stringify(USER_JSON));
	}
}
function getsessionstorage(str, setName) {
	//要素が一致した場合
	for (key in OTHER_JSON) {
		if (OTHER_JSON[key].name == str) {
			//console.log("session : " + OTHER_JSON[key].data);
			return OTHER_JSON[key].data;
		}
	}
	//要素が一致しなかった場合
	//console.log("session : " + 0);
	return 0;
}

function setsessionstorage(Name, value, setName) {
	var data = { "name": Name, "data": value };

	OTHER_JSON.push(data);
	sessionStorage.setItem(setName, JSON.stringify(OTHER_JSON));
}