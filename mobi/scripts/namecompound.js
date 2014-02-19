$(document).ready(function() {
		var formulname =["Na2CO3","NaCl","HCl","H3PO4","NH3","NH4","H20","HNO3","HClO4","NO2","NO3","SO3","SO4","MgSO4","Fe2O3","NH4Cl","PbI2","FeCrO4","SnCl4","Cu(NO3)2"]
		var answer =["sodium bicarbonate","sodium chloride","hydrochloric acid","phosphoric acid","ammonia","ammonium","water","nitric acid","perchloric acid","nitrite","nitrate","sulfite","sulfate","magnesium sulfate","iron(ii) oxide","ammonium chloride","lead(ii) iodide","iron(ii) chromate","tin(iv) chloride","copper nitrate"]

		var numberholder = Math.floor(Math.random() * formulname.length);
		var correctAmount = 0
		$(".masterlink").hide();

		$("#start").click(function() {
			Go();
		});
		$("#submit").click(function() {
			validateForm();
			numberholder = Math.floor(Math.random() * formulname.length);
			Go();
		});


		function Go()
		{
			var y=document.getElementById("Starone");
			y.innerHTML= formulname[numberholder];
		}


		function validateForm()
		{
			var x = document.getElementById("fname").value;
			if(x.toLowerCase() == answer[numberholder] || x.toUpperCase()==answer[numberholder]) 
			{
				alert("Correct!");
				remObj();
				correctAmount++;
				$("#correct").text("Correct: "+correctAmount);
				if (correctAmount >= 5)
				{
					$("#link1").show();
				};
				if (correctAmount >= 10)
				{
					$("#link2").show();
				};
				if (correctAmount >= 15)
				{
					$("#link3").show();
				};
				if (correctAmount == 20)
				{
					$("#link4").show();
				}
			}
			else
				alert("Incorrect!");
		}


		function remObj()
		{
			answer.splice(numberholder,1);
			formulname.splice(numberholder,1);
		}


	});