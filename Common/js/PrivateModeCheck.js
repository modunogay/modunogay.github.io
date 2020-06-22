var isPrivate = false;
if (navigator.userAgent.indexOf("Android") < 0) {
	try {
		window.openDatabase(null, null, null, null);
	} catch (_) {
		isPrivate = true;
	}
}


if (isPrivate) {
	alert("おっと…！【プライベートモード・シークレットモード】を使用していませんか？\nこのままだとチェックしても【データが消えます！】解除してお使いください。")
}