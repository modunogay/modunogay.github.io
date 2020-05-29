function sort() {
	$(function () {
		$('tbody').html(
			$('tr').sort(function (a, b) {
				//昇順
				if (parseInt($(a).find('td.NameID').text()) > parseInt($(b).find('td.NameID').text())) {
					// 降順
					console.log($(b).find('td.NameID').text())
					// if ($(a).find('td').eq(0).text() < $(b).find('td').eq(0).text()) {
					return 1;
				} else {
					return -1;
				}
			})
		);
	});
}