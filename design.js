//selector.effect( "bounce", {arguments}, speed );
		/*
			direction − The direction of the effect. Can be "up", "down", "left", "right". Default is "up".

    		distance − Distance to bounce. Default is 20

    		mode: The mode of the effect. Can be "show", "hide" or "effect". Default is "effect".

    		times − Times to bounce. Default is 5.
		*/

		$(document).ready(() => {


			$(document).click(() => {

				// $("div.box").children().toggle( "bounce", { times: 5 }, "slow"); // up/down and hidden

  				
  				$( "#toggle-1" ).effect( "bounce", { times: 3 }, "slow").toggle( "bounce", { times: 3 }, "slow");
  				$( "#toggle-2" ).effect( "bounce", { times: 6 }, "slow");
				$( "#toggle-3" ).effect( "bounce", { times: 9 }, "slow");
				$( "#toggle-4" ).effect( "bounce", { times: 9}, "slow");
				$( "#toggle-5" ).effect( "bounce", { times: 6 }, "slow");
  				$( "#toggle-6" ).effect( "bounce", { times: 3 }, "slow");				
				});

		});