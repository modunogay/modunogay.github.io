function replaceVersion(str) {
	var version = str;
	version = version.split("_");
	version = version.join(".");
	return version;
};

/*
	最新のjsonを取得
	要素を追加
	localStrageから名前に対する状態を取得，checkboxを変更
*/
function getJsonFile() {
	$(function () {
		$.get("./version/now.txt",{_: new Date().getTime()}, function (data) {
			//現在のバージョンを表示
			$("#version").text(replaceVersion(data));

			var param_str = location.search.substring(1);
			var param_data = "";

			if (param_str == "") {
				//パラメータ無し
				$.getJSON(`./json/${data}.json`,{_: new Date().getTime()}, listappend);
			} else {
				//パラメータ有り
				//パラメータのデコード
				param_data = decode(param_str).split("&");
				//パラメータ分解
				var ver = param_data[0];

				//相手のバージョン表示
				$("#Peer_version").text($("#Peer_version").text() + ver.split("_").join("."));
				var date = param_data[1].split("_");
				//0埋め
				$("#Peer_date").text(date[0] + "/" + date[1] + "/" + date[2] + " " + date[3] + ":" + ('00' + date[4]).slice(-2));

				//バージョンが違うかもしれないためもう一度取得 sessionstorageに保存
				$.getJSON(`./json/${ver}.json`,{_: new Date().getTime()}, function (list) {
					for (i = 0; i < list.length; i++) {
						if (param_data[2][i] != 0) {
							setsessionstorage(list[i].Name, param_data[2][i],"DIY");
						}
					}
					$("#cb-3-column").prop("checked", true);
					$.getJSON(`./json/${data}.json`,{_: new Date().getTime()}, listappend);
				}
				);
			}

			function listappend(list) {
				var add = "";
				var Get_Checked;
				var Give_Checked;
				var Peer_Get_Checked;
				var Peer_Give_Checked;

				for (i = 0; i < list.length; i++) {
					//ローカルストレージ 自分
					var num = getlocalstorage(list[i].Name,"");
					switch (num) {
						case "":
							Get_Checked = ["", "未取得"];
							Give_Checked = ["", "不可"];
							break;
						case null:
							Get_Checked = ["", "未取得"];
							Give_Checked = ["", "不可"];
							break;
						case 0:
						case "0":
							Get_Checked = ["", "未取得"];
							Give_Checked = ["", "不可"];
							break;
						case 1:
						case "1":
							Get_Checked = ["checked", "取得済"];
							Give_Checked = ["", "不可"];
							break;
						case 2:
						case "2":
							Get_Checked = ["checked", "取得済"];
							Give_Checked = ["checked", "可"];
							break;
					};
					if (param) {
						//セッションストレージ 相手
						var peernum = getsessionstorage(list[i].Name,"DIY");
						switch (peernum) {
							case "":
								Get_Checked = ["", "未取得"];
								Give_Checked = ["", "不可"];
								break;
							case null:
								Peer_Get_Checked = ["", "未取得"];
								Peer_Give_Checked = ["", "不可"];
								break;
							case 0:
							case "0":
								Peer_Get_Checked = ["", "未取得"];
								Peer_Give_Checked = ["", "不可"];
								break;
							case 1:
							case "1":
								Peer_Get_Checked = ["checked", "取得済"];
								Peer_Give_Checked = ["", "不可"];
								break;
							case 2:
							case "2":
								Peer_Get_Checked = ["checked", "取得済"];
								Peer_Give_Checked = ["checked", "可"];
								break;
						}
					}
					add += `<tr class="table-row" id="table-${i + 1}-row">
						<td class="table-1-column">
						<input type="checkbox" id="${i + 1}_Get" onclick=CheckBoxChenge("${i}_Get") ${Get_Checked[0]} >
						<label class="Get-Label" for="${i + 1}_Get" id="${i + 1}_Get_Label">${Get_Checked[1]}</label>
						</td>
						<td class="table-1-column">
						<input type="checkbox" id='${i + 1}_Give' onclick=CheckBoxChenge("${i}_Give") ${Give_Checked[0]}>
						<label class="Give-Label" for="${i + 1}_Give" id="${i + 1}_Give_Label">${Give_Checked[1]}</label>
						</td>
						<td class="Name table-2-column" id="${i + 1}_Name">${list[i].Name}</td>`;
					if (param) {
						add += `<td class="HTG table-3-column table-column-none">${list[i].Category}</td>`;
					} else {
						add += `<td class="HTG table-3-column">${list[i].Category}</td>`;
					}
					if (param) {
						add += `<td class="table-4-column">
							<input type="checkbox" id='${i + 1}_Peer_Give' ${Peer_Give_Checked[0]} disabled='disabled'>
							<label class="Give-Label" for="${i + 1}_Peer_Give" id="${i + 1}_Peer_Give_Label">${Peer_Give_Checked[1]}</label>
							</td>
							<td class="table-4-column">
							<input type="checkbox" id='${i + 1}_Peer_Get' ${Peer_Get_Checked[0]} disabled='disabled'>
							<label class="Get-Label" for="${i + 1}_Peer_Get" id="${i + 1}_Peer_Get_Label">${Peer_Get_Checked[1]}</label>
							</td>`;
					};
					add += `<td class="DIYID">${list[i].DIYID}</td>
						<td class="NameID">${list[i].NameID}</td>
						</tr>`;
				}
				//$("tbody").append(add);
				document.getElementById('Main_tbody').innerHTML = add;

				/*
				$(document).ready(function () {
					$('#fav-table').tablesorter({
						headers: {
							0: { sorter: false },
							1: { sorter: false },
							2: { sorter: false },
							3: { sorter: false },
							4: { sorter: false },
							5: { sorter: false },
							6: { sorter: false },
							7: { sorter: false },
							8: { sorter: false }
						}
					});
				});
				*/
			}
		})
	})
}

function theadAppend() {
	$(function () {
		add = "";
		var add = `<tr class="colTitle">
			<th id="table-1-width" colspan="2">自分<br>ver <div id="version" style="display: contents"></div></th>
			<th id="table-2-width" rowspan="2" id="th_3">名前</th>`
		if (param) {
			add += `<th class ="table-column-none" id="table-3-width" rowspan="2" id="th_4">取得方法</th>`;
		} else {
			add += `<th id="table-3-width" rowspan="2" id="th_4">取得方法</th>`;
		}
		if (param) {
			add += `<th id="table-4-width" colspan="2">相手<br><div id="Peer_version">ver </div><div id="Peer_date"></div></th>`
		}
		add += `<th class="Debug" colspan="2">Debug</th>
			</tr>
			<tr>
			<th class="table-1-column" id="th_1">取得<br>(自分)</th>
			<th class="table-1-column" id="th_2">配布<br>(自分)</th>
			<!--   非表示   -->
			<!--   非表示   -->`
		if (param) {
			add += `<th class="table-4-column" id="th_5">配布<br>(相手)</th>
				<th class="table-4-column" id="th_6">取得<br>(相手)</th>`
		}
		add += `<th class="Debug" id="th_7">DIY</th>
			<th class="Debug" id="th_8">NameID</th>
			</tr>`;

		$("thead").append(add);
	})
}

function filterBar() {
	$(function () {
		var add = "";

		add = `<div id="div-serch-area">
				<input type="text" name="search" value="" id="NameSearch" placeholder="名前検索">
				<input type="text" name="search" value="" id="HTGSearch" placeholder="入手方法検索">
				</div>
				<input type="checkbox" id="cb-1-column" onchange="ClassReplace('1')">
				<label for="cb-1-column" id="cb-1-label">「自分」<br>を非表示</label>
				<input type="checkbox" id="cb-3-column" onchange="ClassReplace('3')">
				<label for="cb-3-column" id="cb-3-label">「取得方法」<br>を非表示</label>`;
		if (param) {
			add += `<input type="checkbox" id="cb-4-column" onchange="ClassReplace('4')">
				<label for="cb-4-column" id="cb-4-label">「相手」<br>を非表示</label>`;
		};
		add += ` <br> <input type="checkbox" id="cb-1-row" onchange="row_ClassReplace('1')" value="2">
			<label for="cb-1-row" id="cb-1-row-label">全表示中</label>
			<br> <input type="checkbox" id="cb-2-row" onchange="row_Other_ClassReplace('2')">
			<label for="cb-2-row" id="cb-2-row-label">「その他」<br>を非表示</label>`;
		if (param) {
			add += `<br> <input type="checkbox" id="cb-4-row" onchange="row_ClassReplace('4')" value="2">
				<label for="cb-4-row" id="cb-4-row-label">全表示中</label>`;
		}
		$(".FilterBar").append(add);
	})
}