$(document).ready(function () {
	var $document = $(document),
		$window = $(window),
		$header = $('header'),
		$footer = $('footer'),
		$main = $('main'),
		$articles = $main.find('article'),
		$first = $articles.first(),
		$current = $articles.first();

	var FADE_RATE = 250;

	var update = function (last) {
		$articles = $main.find('article');

		if (last)
			$current = $articles.last();
		else
			$current = $articles.first();
	};

	// moves

	var next = function () {
		update();

		$current.fadeOut(FADE_RATE, function () {
			$main.append($current.remove());
			$current.show();
		});
	};

	var back = function () {
		update(true);

		$current.fadeOut(0, function () {
			$main.prepend($current.remove());
			$current.fadeIn(FADE_RATE);
		});
	};

	var first = function () {
		var index = $articles.index($first);

		$articles.slice(1, 1 + index).hide();

		$current.fadeOut(FADE_RATE, function () {
			$main.append($articles.slice(0, 1 + index).remove());
			$articles.slice(0, 1 + index).show();
		});
	};

	var last = function () {
		var index = $articles.index($first);

		$articles.slice(1, index).hide();

		$current.fadeOut(0, function () {
			$main.append($articles.slice(0, index).remove());
			$articles.slice(0, index).fadeIn(FADE_RATE);
		});
	};

	// bindings

	$document.bind('keydown', function (e) {
		switch (e.which) {
			case 37: // left
				back();
				break;

			case 39: // right
				next();
				break;

			case 38: // up
				first();
				break;

			case 40: // down
				last();
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