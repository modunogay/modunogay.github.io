var THIS_PAGE;
var USER_JSON;
var OTHER_JSON;
var param;
var USER_NAME = localStorage.getItem("USER_NAME");
var OTHER_USER_NAME;
var isDIY;

if (location.search.substring(1) == "") {
	param = false;
} else {
	param = true;
}

function startPages() {
	//USER_JSON = getlocalstorage("All", THIS_PAGE);
	if (tmp == null) {
		USER_JSON = [{ "name": "Name", "data": "value" }];
		localStorage.setItem(THIS_PAGE, JSON.stringify(USER_JSON));
		$("#Debug-Input").val($("#Debug-Input").val() + "[tmp]:" + "null")
	} else {
		USER_JSON = JSON.parse(tmp);
	}

	/**
	 * キャッシュ制御用の変数
	 */
	NOW_VERSION = localStorage.getItem(`NOW_${THIS_PAGE}_VERSION`);
	$.get("../Common/version/now.txt", { _: new Date().getTime() }, function (data) {
		if (NOW_VERSION == null) {
			NOW_VERSION = data
			localStorage.setItem(`NOW_${THIS_PAGE}_VERSION`, data);
		} else if (NOW_VERSION != data) {
			localStorage.setItem(`NOW_${THIS_PAGE}_VERSION`, data);
			window.location.reload(true);
		}
		//debug
		$("#Debug-Input").val($("#Debug-Input").val() + "\nnow Ver:" + NOW_VERSION)
	});



	if (USER_JSON[1] != undefined || USER_JSON[1] != null) {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n[1]:" + USER_JSON[1].name)
	} else {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n[1]:" + "undefined")
	}

	OTHER_JSON = [{ "name": "Name", "data": "value" }];
	sessionStorage.setItem(THIS_PAGE, JSON.stringify(OTHER_JSON));

	if (USER_NAME == null) {
		USER_NAME = "自分"
	}

	isDIY = (THIS_PAGE == "DIY");


	//DEBUG
	$("#Debug-Input").val($("#Debug-Input").val() + "\n" + new Date())
	$("#Debug-Input").val($("#Debug-Input").val() + "\n" + navigator.userAgent);
	$("#Debug-Input").val($("#Debug-Input").val() + "\nTHIS_PAGE:" + THIS_PAGE)
	$("#Debug-Input").val($("#Debug-Input").val() + "\nparam:" + param)
	$("#Debug-Input").val($("#Debug-Input").val() + "\nisDIY:" + isDIY)
	$("#Debug-Input").val($("#Debug-Input").val() + "\nisPrivate:" + isPrivate)
	if (USER_JSON != undefined || USER_JSON != null) {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n1:" + USER_JSON.length)
	} else {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n1:" + "undefined")
	}
	if (USER_NAME != undefined || USER_NAME != null) {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n2:" + USER_NAME)
	} else {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n2:" + "undefined")
	}
	if (USER_JSON != undefined || USER_JSON != null) {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n3:" + USER_JSON.length)
	} else {
		$("#Debug-Input").val($("#Debug-Input").val() + "\n3:" + "undefined")
	}

}