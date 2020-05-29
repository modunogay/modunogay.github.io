function sort() {
	$(function () {
		//console.log($('tbody > tr').text())
		$('tbody').html(
			$('tbody tr').sort(function (a, b) {
				if (parseInt($(a).find('td.NameID').text()) > parseInt($(b).find('td.NameID').text())) {
					return 1;
				} else {
					return -1;
				}
			})
		);
	})
}