$(function () {

	var i = 0;
	var libre = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	$(".case").on("click", function (e) {

		// Je récupere l'id de la case joué
		var caseJoue = parseInt($(this).prop("id"));


		// Je parcours mon tableau de case libre et j'en extrait la case joué
		$(libre).each(function (index, elem) {

			if (caseJoue == elem) {
				libre.splice(index, 1);
			}
		});


		// C'est la que j'insere les croix ou les ronds dans le dom
		if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8) {

			if ($(this).css("background-color") == "rgb(240, 248, 255)") {
				$(this).append("<img src=image/croixBlanche.png>").addClass("croix");

			} else {
				$(this).append("<img src=image/croixRouge.png>").addClass("croix");
			}
		} else {

			if ($(this).css("background-color") == "rgb(240, 248, 255)") {
				$(this).append("<img src=image/rondBlanc.png>").addClass("rond");
			} else {
				$(this).append("<img src=image/rondRouge.png>").addClass("rond");
			}
		}
		
		i++

	});


	// Reset de la map
	$("#resetMap").on("click", function (e) {
		window.location.reload();
	});

});