$(document).ready(function()
	{
		//These are the formula names whihc will be in the box!
		var formulname =["Na2CO3","NaCl","HCl","H3PO4","NH3","NH4","H20","HNO3","HClO4","NO2","NO3","SO3","SO4","MgSO4","Fe2O3","NH4Cl","PbI2","FeCrO4","SnCl4","Cu(NO3)2"]
		var answer =["sodium bicarbonate","sodium chloride","hydrochloric acid","phosphoric acid","ammonia","ammonium","water","nitric acid","perchloric acid","nitrite","nitrate","sulfite","sulfate","magnesium sulfate","iron(ii) oxide","ammonium chloride","lead(ii) iodide","iron(ii) chromate","tin(iv) chloride","copper nitrate"]

		var numberholder = Math.floor(Math.random() * formulname.length);
		var score = 0;

		$("#pressed").keypress(function(e){
			if (e.which == 13) {
				
				var something = $(this).val();
				if(something.toLowerCase() == answer[numberholder]) {
					score = score + 100;
					$("#score").text("Score: " + score);
					$(".boxes").remove();
					Runner()
				};
				$(this).val("");
			};
		}); 

		$("#score").text("Score: " + score);

		$("#play").click(function()
		{
			var newDiv1 = $("<div class='boxes' id='box1'><p id='Starone'></p></div>");
			var newDiv2 = $("<div class='boxes' id='box2'><p id='Startwo'></p></div>");
			var newDiv3 = $("<div class='boxes' id='box3'><p id='Starthree'></p></div>");
			var flipcounter = 1
			

			function setTxt ()
			{
				newDiv1.html(formulname[numberholder]);
				newDiv2.html(formulname[numberholder]);
				newDiv3.html(formulname[numberholder]);
			}
			/*function setTxt1 (){

				var numberholder = Math.floor(Math.random() * formulname.length);
				newDiv2.html(formulname[numberholder]);
				
			}
			function setTxt2 (){

				var numberholder = Math.floor(Math.random() * formulname.length);
				newDiv3.html(formulname[numberholder]);
			}*/
			function Runner()
			{
				if (flipcounter == 1) {
					$("#framework").append(newDiv1);
					setTxt();
					setTimeout(function(){flipcounter = 2}, 15000);
				};
				if (flipcounter == 2) {
					$("#framework").append(newDiv2);
					setTxt();
					setTimeout(function(){flipcounter = 3}, 15000);
				};
				if (flipcounter == 3) {
					$("#framework").append(newDiv3);
					setTxt();
					setTimeout(function(){flipcounter = 1}, 15000);
				};
			}

			function resetter()
			{
				var positreset = 430 + "px";
				$(".boxes").css({"top": positreset});
			}

			/*function Runner()
			{
				if (flipcounter == 1) {
					$("#framework").append(newDiv1);
					setTxt();
					setTimeout(function(){flipcounter = 2}, 15000);
				};
				if (flipcounter == 2) {
					$("#framework").append(newDiv2);
					setTxt();
					setTimeout(function(){flipcounter = 3}, 15000);
				};
				if (flipcounter == 3) {
					$("#framework").append(newDiv3);
					setTxt();
					setTimeout(function(){flipcounter = 1}, 15000);
				};
			}*/


			function boxDown1()
			{	
				var position = $("#box1").css("top");
				position = position.substring(0 , position.length - 2);
				if (position >= 1000 ) {
					clearInterval(MOVEE);
					$("#box1").remove();

					alert("Game over!")
				};
				position = parseInt(position) + 30 + "px";
				$("#box1").css({"top": position});
			};

			function boxDown2()
			{
				var position = $("#box2").css("top");
				position = position.substring(0 , position.length - 2);
				if (position >= 1000 ) {
					clearInterval(MOVEE2);
					$("#box2").remove();
					alert("Game over!")

				};
				position = parseInt(position) + 30 + "px";
				$("#box2").css({"top": position});
			}

			function boxDown3()
			{
				var position = $("#box3").css("top");
				position = position.substring(0 , position.length - 2);
				if (position >= 1000 ) {
					clearInterval(MOVEE3);
					$("#box3").remove();
					alert("Game over!")

				};
				position = parseInt(position) + 30 + "px";
				$("#box3").css({"top": position});
			}
			Runner()
			var ddooo= setInterval(function(){Runner()},20000)
			var MOVEE= setInterval(function(){boxDown1()},1000);
			var MOVEE2= setInterval(function(){boxDown2()},1000);
			var MOVEE3= setInterval(function(){boxDown3()},1000);
			
		});

});