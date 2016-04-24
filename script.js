function getRandomColor() {
	 	
	 		var letters = '0123456789ABCDEF'.split('');
	 		
	 		var color = '#';
	 		
	 		for (var i = 0; i < 6; i++) {
	 		
	 			color += letters[Math.round(Math.random() * 15)];
	 		}
	 		
	 		return color;
	 	}
	 	
  		//function to make box appear 
		var clickedTime; var createdTime; var reactionTime;
	
		function makeBox() {
		
			createdTime = Date.now();
		
			var random = Math.random();
		
			setTimeout(function() {
			
			if (Math.random() > 0.5) {
			
			document.getElementById("square").style.borderRadius = "50px";
			
			} else {
			
			document.getElementById("square").style.borderRadius = "0";
			
			}
			
			var top = Math.random();
			
			top = top * 300;
			
			var left = Math.random();
			
			left = left * 500;
			
			document.getElementById("square").style.top = top + "px";
			
			document.getElementById("square").style.left = left+ "px";
			
			document.getElementById("square").style.backgroundColor = getRandomColor();
		
			document.getElementById("square").style.display = "block";
			
			createdTime = Date.now();
		
			}, random * 5000) ;
		
		}
		
		//function to measure reaction time
		
		document.getElementById("square").onclick = function() {
		
			clickedTime = Date.now();
			
			reactionTime = (clickedTime - createdTime) / 1000;
			
			document.getElementById("time").innerHTML = reactionTime;
		
			this.style.display = "none";
			
			makeBox();
			
		}
		
		makeBox();
	