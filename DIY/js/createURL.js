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
				for (i = 0; i < list.length; i++) {
					if (getlocalstorage(list[i].Name, "") == null) {
						str += 0;
					} else {
						str += getlocalstorage(list[i].Name, "");
					}
				}
				str = encode(str).split("+");
				str = str.join("_")
				var url = "http://" + location.host + "/DIY/index.html?" + str;
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
	if (setName == "DIY") {
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
	}else if(setName == "DIY_TWITTER"){
		for (key in USER_JSON_DIY_TWITTER) {
			if (USER_JSON_DIY_TWITTER[key].name == Name) {
				USER_JSON_DIY_TWITTER[key].data = value;
				flag = false;
				break;
			}
		}
		if (flag) {
			var data = { "name": Name, "data": value };
			USER_JSON_DIY_TWITTER.push(data);
		}
		localStorage.setItem(setName, JSON.stringify(USER_JSON_DIY_TWITTER));
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

function setsessionstorage(Name, value,setName) {
	var data = { "name": Name, "data": value };
	
	OTHER_JSON.push(data);
	sessionStorage.setItem(setName, JSON.stringify(OTHER_JSON));
}