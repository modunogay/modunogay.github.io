function replaceVersion(str) {
	var version = str;
	version = version.split("_");
	version = version.join(".");
	return version;
};


var ListLength;
/*
	最新のjsonを取得
	要素を追加
	localStrageから名前に対する状態を取得，checkboxを変更
*/
function getJsonFile() {
	$(function () {
		$.get("./version/now.txt", { _: new Date().getTime() }, function (data) {
			//現在のバージョンを表示
			$("#version").text(replaceVersion(data));

			var param_str = location.search.substring(1);
			var param_data = "";

			if (param_str == "") {
				//パラメータ無し
				$.getJSON(`./json/${data}.json`, { _: new Date().getTime() }, listappend);
			} else {
				//パラメータ有り
				//パラメータのデコード
				var reg = new RegExp(/[!"#$%'()\*\+\-\.,\/:;<=>?@\[\\\]^`{|}~]/g);
				var reg2 = new RegExp(/[ぁ-んァ-ン一-龥0-9０-９a-zA-Zａ-ｚＡ-Ｚ]/g);

				param_data = decode(param_str)
				if (reg.test(param_data) || !reg2.test(param_data)) {
					alert("不正なURLパラメータを検知")
					param_data = 0;
				} else {
					param_data = param_data.split("&");
				}
				//パラメータ分解
				var ver = param_data[0];

				//相手のバージョン表示
				$("#Peer_version").text($("#Peer_version").text() + ver.split("_").join("."));
				var date = param_data[1].split("_");
				//0埋め
				$("#Peer_date").text(date[0] + "/" + date[1] + "/" + date[2] + " " + date[3] + ":" + ('00' + date[4]).slice(-2));

				//バージョンが違うかもしれないためもう一度取得 sessionstorageに保存
				$.getJSON(`./json/${ver}.json`, function (list) {

					for (i = 0; i < list.length; i++) {
						if (param_data[2][i] != 0) {
							setsessionstorage(list[i].Name, param_data[2][i], THIS_PAGE);
						}
					}

					if (param_data[3] == null || param_data[3] == undefined) {
						OTHER_USER_NAME = "相手"
					} else {
						OTHER_USER_NAME = param_data[3]
					}

					$("#OTHER_USER_NAME_text").text(OTHER_USER_NAME)

					$("#cb-3-column").prop("checked", true);
					$.getJSON(`./json/${data}.json`, { _: new Date().getTime() }, listappend);
				}
				);
			}

			function listappend(list) {

				//DEBUG
				if (USER_JSON != undefined || USER_JSON != null) {
					$("#Debug-Input").val($("#Debug-Input").val() + "\n5:" + USER_JSON.length)
				} else {
					$("#Debug-Input").val($("#Debug-Input").val() + "\n5:" + "undefined")
				}

				var add = "";
				var Get_Checked;
				var Give_Checked;
				var Peer_Get_Checked;
				var Peer_Give_Checked;
				var num;
				var selectCount;
				ListLength = list.length

				var tr, tr_root;
				var td, td1_root, td15_root, td2_root, td3_root, td4_root;
				var cb, cb_root;
				var label, Get_Label, Give_Label;
				var select, select_root;
				var option = [];
				var image, image_root;
				var fragment = document.createDocumentFragment();

				//tr 大本
				tr_root = document.createElement('tr');
				tr_root.setAttribute("class", "table-row");

				//td1 大本 自分 取得/配布
				td1_root = document.createElement('td');
				td1_root.setAttribute("class", "table-1-column");

				//td15 大本 DIY枚数
				td15_root = document.createElement('td');
				td15_root.setAttribute("class", "Count table-1_5-column table-column-none");

				//td2 大本 アイテム名
				td2_root = document.createElement('td');
				td2_root.setAttribute("class", "table-2-column Name");

				//td3 大本 入手方法
				td3_root = document.createElement('td');
				td3_root.setAttribute("class", "table-3-column HTG");

				//td4 相手  取得/配布
				td4_root = document.createElement('td');
				td4_root.setAttribute("class", "table-4-column");

				//cb 大本
				cb_root = document.createElement('input')
				cb_root.setAttribute("type", "checkbox");

				//GetLabel 大本
				Get_Label = document.createElement('label');
				Get_Label.setAttribute("class", "Get-Label");

				//GiveLabel 大本
				Give_Label = document.createElement('label');
				Give_Label.setAttribute("class", "Give-Label");

				//Select 大本
				select_root = document.createElement('select');

				//Option 大本
				for (i = 0; i < 10; i++) {
					option[i] = document.createElement('option');
					option[i].value = i;
					option[i].text = i;
					select_root.appendChild(option[i]);
				}
				option[0].text = "--";

				//image 大本
				image_root = document.createElement('img');
				image_root.setAttribute("class", "lazyload");
				image_root.setAttribute("width", "40px");
				image_root.setAttribute("height", "40px");

				for (i = 0; i < list.length; i++) {
					//ローカルストレージ 自分
					num = getlocalstorage(list[i].Name, "");
					if (isDIY) {
						selectCount = getlocalstorage("selectCount", list[i].Name)
					}
					switch (num) {
						case 0:
						case "0":
							Get_Checked = [false, "未取得"];
							Give_Checked = [false, "不可"];
							break;
						case 1:
						case "1":
							Get_Checked = [true, "取得済"];
							Give_Checked = [false, "不可"];
							break;
						case 2:
						case "2":
							Get_Checked = [true, "取得済"];
							Give_Checked = [true, "可"];
							break;
						case "":
							Get_Checked = [false, "未取得"];
							Give_Checked = [false, "不可"];
							break;
						case null:
							Get_Checked = [false, "未取得"];
							Give_Checked = [false, "不可"];
							break;
					};
					if (param) {
						//セッションストレージ 相手
						var peernum = getsessionstorage(list[i].Name, THIS_PAGE);
						switch (peernum) {
							case 0:
							case "0":
								Peer_Get_Checked = [false, "未取得"];
								Peer_Give_Checked = [false, "不可"];
								break;
							case 1:
							case "1":
								Peer_Get_Checked = [true, "取得済"];
								Peer_Give_Checked = [false, "不可"];
								break;
							case 2:
							case "2":
								Peer_Get_Checked = [true, "取得済"];
								Peer_Give_Checked = [true, "可"];
								break;
							case "":
								Peer_Get_Checked = [false, "未取得"];
								Peer_Give_Checked = [false, "不可"];
								break;
							case null:
								Peer_Get_Checked = [false, "未取得"];
								Peer_Give_Checked = [false, "不可"];
								break;
						}
					}

					//tr ここから
					tr = tr_root.cloneNode();
					if (isDIY) {
						tr.setAttribute("id", `table-${i + 1}-row`);
						tr.setAttribute("data-DIYID", `${list[i].DIYID}`);
						tr.setAttribute("data-NameID", `${list[i].NameID}`);
					} else {
						tr.setAttribute("id", `table-${i + 1}-row`);
					}


					//td 自分 取得 ここから
					td = td1_root.cloneNode();

					cb = cb_root.cloneNode();
					cb.setAttribute("id", `${i + 1}_Get`);
					cb.setAttribute("onclick", `CheckBoxChenge('${i}_Get')`);
					cb.checked = Get_Checked[0];

					td.appendChild(cb);


					label = Get_Label.cloneNode();
					label.setAttribute("id", `${i + 1}_Get_Label`);
					label.setAttribute("for", `${i + 1}_Get`);
					label.innerText = Get_Checked[1];

					td.appendChild(label);
					tr.appendChild(td);
					//td 自分 取得 ここまで


					//td 自分 配布 ここから
					td = td1_root.cloneNode();

					cb = cb_root.cloneNode();
					cb.setAttribute("id", `${i + 1}_Give`);
					cb.setAttribute("onclick", `CheckBoxChenge('${i}_Give')`);
					cb.checked = Give_Checked[0];

					td.appendChild(cb);

					label = Give_Label.cloneNode();
					label.setAttribute("id", `${i + 1}_Give_Label`);
					label.setAttribute("for", `${i + 1}_Give`);
					label.innerText = Give_Checked[1];

					td.appendChild(label);
					tr.appendChild(td);
					//td 自分 配布 ここまで


					//td 枚数 ここから
					if (isDIY) {
						td = td15_root.cloneNode();

						select = select_root.cloneNode(true)
						select.setAttribute("id", `selectID-${i + 1}`);
						select.options[selectCount].selected = true;

						td.appendChild(select);
						tr.appendChild(td);
					}
					//td 枚数 ここまで

					//td2 名前 ここから
					td = td2_root.cloneNode();
					td.setAttribute("id", `${i + 1}_Name`);
					td.innerText = list[i].Name

					tr.appendChild(td);
					//td2 名前 ここまで

					//td3 入手方法 ここから
					td = td3_root.cloneNode();

					if (isDIY) {
						if (param) {
							td.classList.add("table-column-none");
							image = image_root.cloneNode();
							image.setAttribute("data-src", `https://acnhcdn.com/latest/FtrIcon/${list[i].Filename}.png`)
							td.appendChild(image);
							td.insertAdjacentHTML('beforeend', list[i].Category);
						} else {
							image = image_root.cloneNode();
							image.setAttribute("data-src", `https://acnhcdn.com/latest/FtrIcon/${list[i].Filename}.png`)
							td.appendChild(image);
							td.insertAdjacentHTML('beforeend', list[i].Category);
						}
					} else if (list[i].Filename == undefined) {
						console.log("undefinedエラー！！！！！ダメ絶対！");
						td.innerText = "undefinedエラー！！ダメ絶対！";
					} else if (param) {
						if (list[i].Buy != "") {
							//特記事項あり paramで非表示
							td.classList.add("NFS", "table-column-none");

							image = image_root.cloneNode();
							image.setAttribute("data-src", `https://acnhapi.com/v1/images/furniture/${list[i].Filename}`)

							td.appendChild(image);

							td.insertAdjacentHTML('beforeend', list[i].Buy);
						} else {
							//特記事項なし paramで非表示
							td.classList.add("table-column-none");

							image = image_root.cloneNode();
							image.setAttribute("data-src", `https://acnhapi.com/v1/images/furniture/${list[i].Filename}`)
							td.appendChild(image);
						}
					} else {
						if (list[i].Buy != "") {
							//特記事項あり
							td.classList.add("NFS");

							image = image_root.cloneNode();
							image.setAttribute("data-src", `https://acnhapi.com/v1/images/furniture/${list[i].Filename}`)

							td.appendChild(image);

							td.insertAdjacentHTML('beforeend', list[i].Buy);
						} else {
							//特記事項なし
							image = image_root.cloneNode();
							image.setAttribute("data-src", `https://acnhapi.com/v1/images/furniture/${list[i].Filename}`)

							td.appendChild(image);
						}
					}

					tr.appendChild(td)
					//td3 入手方法 ここまで

					if (param) {
						//td4 相手 配布 ここから
						td = td4_root.cloneNode();

						cb = cb_root.cloneNode();
						cb.setAttribute("id", `${i + 1}_Peer_Give`);
						cb.setAttribute("disabled",'disabled');
						cb.checked = Peer_Give_Checked[0];

						td.appendChild(cb);


						label = Give_Label.cloneNode();
						label.setAttribute("id", `${i + 1}_Peer_Give_Label`);
						label.setAttribute("for", `${i + 1}_Peer_Give`);
						label.innerText = Peer_Give_Checked[1];

						td.appendChild(label);
						tr.appendChild(td);
						//td4 相手 配布 ここまで



						//td4 相手 取得 ここから
						td = td4_root.cloneNode();

						cb = cb_root.cloneNode();
						cb.setAttribute("id", `${i + 1}_Peer_Get`);
						cb.setAttribute("disabled",'disabled');
						cb.checked = Peer_Get_Checked[0];

						td.appendChild(cb);

						label = Get_Label.cloneNode();
						label.setAttribute("id", `${i + 1}_Peer_Get_Label`);
						label.setAttribute("for", `${i + 1}_Peer_Get`);
						label.innerText = Peer_Get_Checked[1];

						td.appendChild(label);
						tr.appendChild(td);
						//td4 相手 取得 ここから
					};
					fragment.appendChild(tr);
					//tr ここまで
				}
				//document.getElementById('Main_tbody').innerHTML = add;
				document.getElementById('Main_tbody').appendChild(fragment);
				lazy();





				var temp = localStorage.getItem(THIS_PAGE)
				//USER_JSON = getlocalstorage("All", THIS_PAGE);

				if (temp == null) {
					$("#Debug-Input").val($("#Debug-Input").val() + "\n[temp onload]:" + "null")
				} else {
					var temp = JSON.parse(temp);
					if (temp[1] == null) {
						$("#Debug-Input").val($("#Debug-Input").val() + "\n[temp onload [1]]:" + "null")
					} else if (temp[1] == undefined) {
						$("#Debug-Input").val($("#Debug-Input").val() + "\n[temp onload [1]]:" + "undefined")
					} else {
						$("#Debug-Input").val($("#Debug-Input").val() + "\n[temp onload [1]]:" + temp[1].name)
						$("#Debug-Input").val($("#Debug-Input").val() + "\n[temp onload [1]]:" + temp.length)
					}
				}
			}
		})
	})
}

//selectedかどうかを返す
function selectedFunction(val, selectCount) {
	if (val == selectCount) {
		return "selected";
	}
	return "";
}

//テーブルの一番上の挿入
function theadAppend() {
	$(function () {
		var add = `<tr class="colTitle">
			<th id="table-1-width" colspan="2"><span id="USER_NAME_text" >自分</span><br>ver <div id="version" style="display: contents"></div></th>`;
		if (isDIY) {
			add += `<th id="table-1_5-width" rowspan="2" class ="table-column-none">枚数</th>`;
		}
		add += `<th id="table-2-width" rowspan="2" id="th_3">名前</th>`;

		if (param) {
			add += `<th class ="table-column-none" id="table-3-width" rowspan="2" id="th_4">取得方法</th>`;
		} else {
			add += `<th id="table-3-width" rowspan="2" id="th_4">取得方法</th>`;
		}
		if (param) {
			add += `<th id="table-4-width" colspan="2"><span id="OTHER_USER_NAME_text">相手</span><br><div id="Peer_version">ver </div><div id="Peer_date"></div></th>`
		}
		add += `</tr>
			<tr>
			<th class="table-1-column" id="th_1">取得<br>(自分)</th>
			<th class="table-1-column" id="th_2">配布<br>(自分)</th>
			<!--   非表示1_5 -->
			<!--   非表示2   -->
			<!--   非表示3   -->`
		if (param) {
			add += `<th class="table-4-column" id="th_5">配布<br>(相手)</th>
				<th class="table-4-column" id="th_6">取得<br>(相手)</th>`
		}
		add += `</tr>`;
		$("thead").append(add);

		$("#USER_NAME_text").text(USER_NAME)

		//DEBUG
		if (USER_NAME != undefined || USER_NAME != null) {
			$("#Debug-Input").val($("#Debug-Input").val() + "\n4:" + USER_NAME)
		} else {
			$("#Debug-Input").val($("#Debug-Input").val() + "\n4:" + "undefined")
		}
	})
}

//下フィルターバーの表示
function filterBar() {
	$(function () {
		var add = "";
		add = `<div id="div-serch-area">
				<input type="text" name="search" value="" id="NameSearch" placeholder="名前検索">`
		if (isDIY) {
			add += `<input type="text" name="search" value="" id="HTGSearch" placeholder="入手方法検索">`
		}
		add += `</div>
				<input type="checkbox" id="cb-1-column" onchange="ClassReplace('1')">
				<label for="cb-1-column" id="cb-1-label">「自分」<br>を非表示</label>`
		if (isDIY) {
			add += `<input type="checkbox" id="cb-1_5-column" onchange="ClassReplace('1_5')" checked>
			<label for="cb-1_5-column" id="cb-1_5-label">「枚数」<br>を非表示</label>`
		}
		add += `<input type="checkbox" id="cb-3-column" onchange="ClassReplace('3')">
			<label for="cb-3-column" id="cb-3-label">「取得方法」<br>を非表示</label>`;
		if (param) {
			add += `<input type="checkbox" id="cb-4-column" onchange="ClassReplace('4')">
				<label for="cb-4-column" id="cb-4-label">「相手」<br>を非表示</label>`;
		};
		add += ` <br> <input type="checkbox" id="cb-1-row" onchange="row_ClassReplace('1')" value="2">
					<label for="cb-1-row" id="cb-1-row-label">全表示中</label>
					<br> <input type="checkbox" id="cb-2-row" onchange="row_Other_ClassReplace('2')">`

		if (isDIY) {
			add += `<label for="cb-2-row" id="cb-2-row-label">「その他」<br>を非表示</label>`;
		} else {
			add += `<label for="cb-2-row" id="cb-2-row-label">「非売品」<br>を非表示</label>`;
		}
		if (param) {
			add += `<br> <input type="checkbox" id="cb-4-row" onchange="row_ClassReplace('4')" value="2">
				<label for="cb-4-row" id="cb-4-row-label">全表示中</label>`;
		}
		$(".FilterBar").append(add);
	})
}