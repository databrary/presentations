$(document).ready(function () {
	var $document = $(document),
		$main = $('main'),
		$articles = $main.find('article'),
		$current = 0;

	for (var i = 0; i < $articles.length; i ++) {
		$($articles[i]).hide();
	}

	var update = function (i) {
		$($articles[$current]).hide();
		$($articles[$current = i]).show();
	};

	var next = function () {
		if ($current < $articles.length-1)
			update($current + 1);
	};

	var back = function () {
		if ($current > 0)
			update($current - 1);
	};

	var first = function () {
		update(0);
	};

	var last = function () {
		update($articles.length-1);
	};

	// bindings

	$document.bind('keydown', function (e) {
		switch (e.which) {
			case 37: // left
			case 8:
				back();
				break;

			case 39: // right
			case 32:
				next();
				break;

			case 38: // up
				last();
				break;

			case 40: // down
				first();
				break;

			default:
				return;
		}
		e.preventDefault();
	});

	// start

	first();

	$main.removeClass('hide');
});
