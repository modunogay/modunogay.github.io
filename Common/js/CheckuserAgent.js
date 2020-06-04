/**
 * iPhoneかAndroidかどうか判定する関数（Bodyにクラスを追加）
 */
function checkuserAgent(){
	if (navigator.userAgent.indexOf('iPhone') > 0) {
		let body = document.getElementsByTagName('body')[0];
		body.classList.add('iPhone');
	}
	if (navigator.userAgent.indexOf('Android') > 0) {
		let body = document.getElementsByTagName('body')[0];
		body.classList.add('Android');
	}
}
