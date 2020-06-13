var sort_now;

function sortfunction() {
	var val = parseInt($("#sort-column").val());
	if (val == 4) {
		$("#sort-column").val(1);
	} else {
		$("#sort-column").val(val + 1);
	}
	switch (val) {
		case 1: $("#cb-sort-image").attr('src', './image/asc_green.png');
			sort_now = ["asc", "diyid"];
			sort();
			break;
		case 2: $("#cb-sort-image").attr('src', './image/desc_green.png');
			sort_now = ["desc", "diyid"];
			sort();
			break;
		case 3: $("#cb-sort-image").attr('src', './image/asc_blue.png');
			sort_now = ["asc", "nameid"];
			sort();
			break
		case 4: $("#cb-sort-image").attr('src', './image/desc_blue.png');
			sort_now = ["desc", "nameid"];
			sort();
			break;
	};

	eventGtag("sort-btn","sort")
};

function sort() {
	$(function () {
		$('tbody').html(
			$('tbody tr').sort(function (a, b) {

				if(sort_now[0] == "asc"){
					if ($(a).data(sort_now[1]) > $(b).data(sort_now[1])) {
						return 1;
					} else {
						return -1;
					}
				}else{
					if ($(a).data(sort_now[1]) < $(b).data(sort_now[1])) {
						return 1;
					} else {
						return -1;
					}
				}
			})
		);
	})
}