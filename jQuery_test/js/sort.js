function sort() {
	$('tbody').html(
		$('tr').sort(function (a, b) {

			console.log($(a).find('th').eq(5).text() +"："+ $(b).find('th').eq(0).text())

			//昇順
			if ($(a).find('th').eq(0).text() > $(b).find('th').eq(0).text()) {
				// 降順
				// if ($(a).find('td').eq(0).text() < $(b).find('td').eq(0).text()) {
				return 1;
			} else {
				return -1;
			}
		})
	);
}