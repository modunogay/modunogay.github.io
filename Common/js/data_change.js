//ページ一番下のボタン類の関数

/**
 * データ初期化(LocalStorage Clear)
 */
function jsclear() {
	if (window.confirm('初期化をします！\nよろしいですか？(3)')) {
		if (window.confirm('バックアップ（URL）を取ることをお勧めします！(2)')) {
			if (window.confirm('本当によろしいですか？(1)')) {
				localStorage.removeItem(THIS_PAGE);
				window.location.reload(true);
			}
		}
	}
}

/**
 * データ移行(sesionStorageからLocalStorageへ)
 */
function sessionTolocal() {
	if (window.confirm('データを移行します。\nよろしいですか？(3)')) {
		if (window.confirm('バックアップ（URL）を取ることをお勧めします！(2)')) {
			if (window.confirm('本当によろしいですか？(1)')) {
				localStorage.setItem(THIS_PAGE, sessionStorage.getItem(THIS_PAGE))
				window.location.reload(true);
			}
		}
	}
}

/**
 * 全ての枚数を0にする(USER_JSONのcountを全て0にして保存)
 */
function jsCountClear() {
	if (window.confirm('「枚数」を全て「0枚」にします。\nよろしいですか？(3)')) {
		if (window.confirm('バックアップ（URL）を取ることをお勧めします！(2)')) {
			if (window.confirm('本当によろしいですか？(1)')) {
				for (i = 0; i < USER_JSON.length; i++) {
					if (USER_JSON[i].count != 0) {
						USER_JSON[i].count = 0;
					}
				}
				localStorage.setItem(THIS_PAGE, JSON.stringify(USER_JSON));
				window.location.reload(true);
			}
		}
	}
}

/**
 * 配布可を全て0にする(USER_JSONのdataを1 or 0に変更して保存)
 */
function jsGiveClear() {
	if (window.confirm('「配付可」を全て「不可」にします\nよろしいですか？(3)')) {
		if (window.confirm('バックアップ（URL）を取ることをお勧めします！(2)')) {
			if (window.confirm('本当によろしいですか？(1)')) {
				for (i = 0; i < USER_JSON.length; i++) {
					if (USER_JSON[i].data == 2) {
						USER_JSON[i].data = 1;
					}
					if (USER_JSON[i].count != 0) {
						USER_JSON[i].count = 0;
					}
				}
				localStorage.setItem(THIS_PAGE, JSON.stringify(USER_JSON));
				window.location.reload(true);
			}
		}
	}
}
