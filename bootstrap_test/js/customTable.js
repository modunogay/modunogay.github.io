var param = false;

/*
if (confirm("パラメータ有りに")) {
	param = true;
}
*/
var $table = $('#table')

if (param) {
	$("#table tr").append(`<th data-field="Peer_Give">配布(相手)</th>`)
	$("#table tr").append(`<th data-field="Peer_Get">取得(相手)</th>`)
}

$(function () {
	var add = []
	$.getJSON(`./json/1_2_1_a.json`, function (list) {
		for (i = 0; i < list.length; i++) {
			add.push({
				"Get": "未",
				"Give": "不可",
				"Name": list[i].Name,
				"HTG": list[i].Category
			});
		}
		$table.bootstrapTable({
			data: add
		})
		$table.bootstrapTable('resetView')
	});
});

var ps

$(function () {
	$('#table').on('post-body.bs.table', function () {
		if (ps) ps.destroy()
		ps = new window.PerfectScrollbar('.fixed-table-body', {
			minScrollbarLength: 20
		})
	})
})

function cellStyle(value, row, index) {
	return {
		classes: "td-text-center",
	}
}

$('#table').on('click-cell.bs.table', function (e, field, value, row, $element) {
	console.log(field, value, row, $element)
	switch (field) {
		case "Get":
			switch ($element.text()) {
				case "未":
					$element.text("済");
					$element.addClass("GetBackGround");
					break;
				default:
					$element.text("未");
					$element.removeClass("GetBackGround");
					break;
			}
			break;
		case "Give":
			switch ($element.text()) {
				case "不可":
					$element.text("可");
					$element.addClass("GiveBackGround");
					break;
				default:
					$element.text("不可");
					$element.removeClass("GiveBackGround");
					break;
			}
			break;
	}
});

$('#table').on('column-switch.bs.table', function () {
	$table.bootstrapTable('resetView')
});