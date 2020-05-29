function sort(){
	$('tbody').html(

		//何もなし DIY:4番目 Name:5番目

		//Give  DIY:6番目 Name:7番目
		//console.log($('tr').find('td').eq(4).text())

		
		$('tr').sort(function (a, b) {
			console.log($(a).find('td').eq(5).text() +"："+ $(b).find('td').eq(5).text())
			return ($(a).find('td').eq(5).text() > $(b).find('td').eq(5).text() ? 1:-1)
		})
	);
}