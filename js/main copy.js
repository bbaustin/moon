
//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\
 //\\//\\\//\\//\   -- VARIABLE DECLARATIONS --   //\\\//\\\////\\/\\
//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\

var menu = document.getElementsByTagName('li');

var title = document.getElementsByTagName('h2');
console.log(title[0].innerHTML);
var savedTitle = "Io";

var text = document.getElementById('planetDesc');
	console.log(text.innerHTML);
var savedText = "Io is the innermost of the four Galilean moons of the planet Jupiter. It is the fourth-largest moon, has the highest density of all the moons, and is the driest known object in the Solar System. It was discovered in 1610 and was named after the mythological character Io, a priestess of Hera who became one of Zeus's lovers.";

var savedColor = "#d7f43d";
var savedGradient = "";



//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\
 //\\//\\\//\\//\\/\   -- MOUSE ENTER --   //\\//\\//\\\//\\//\\/\\
//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\


menu[0].addEventListener('mouseenter', function(){
		title[0].innerHTML = "Io";
		text.innerHTML = "Io is the innermost of the four Galilean moons of the planet Jupiter. It is the fourth-largest moon, has the highest density of all the moons, and is the driest known object in the Solar System. It was discovered in 1610 and was named after the mythological character Io, a priestess of Hera who became one of Zeus's lovers.";
		planet.style.backgroundColor = "#d7f43d";
		planet.style.backgroundImage = ""; 
		menu[0].style.color = "#d7f43d"; //this could all be done in css hover, too... 
		menu[0].style.fontWeight = "900";

	})

menu[1].addEventListener('mouseenter', function(){
		title[0].innerHTML = "Europa";
		text.innerHTML = "Slightly smaller than the Moon, Europa is primarily made of silicate rock and has a water-ice crust and probably an iron-nickel core. It has the smoothest surface of any known solid object in the Solar System. The apparent youth and smoothness of the surface have led to the hypothesis that a water ocean exists beneath it, which could conceivably serve as an abode for extraterrestrial life.";		
		planet.style.backgroundImage = "radial-gradient(#ecdeb2, #ea9123)";
		menu[1].style.color = "#ea9123";
		menu[1].style.fontWeight = "900";
	})

menu[2].addEventListener('mouseenter', function(){
		title[0].innerHTML = "Ganymede";
		text.innerHTML = "Ganymede has a diameter of 5,268 km (3,273 mi), 8% larger than the planet Mercury, but its mass is only 45% that of Mercury. Ganymede is 2% larger than Saturn's Titan, the Solar System's second-largest moon. At 2.02 times the mass of the Moon, it is the most massive planetary satellite. It is the ninth-largest object in the Solar System, and the largest without a substantial atmosphere."
		planet.style.backgroundColor = "#a898ec";
		planet.style.backgroundImage = ""; 
		menu[2].style.color = "#a898ec";
		menu[2].style.fontWeight = "900";		
	})

menu[3].addEventListener('mouseenter', function(){
		title[0].innerHTML = "Callisto";
		text.innerHTML = "The surface of Callisto is the oldest and most heavily cratered in the Solar System. Because of its low radiation levels, Callisto has long been considered the most suitable place for a human base for future exploration of the Jovian system."
		planet.style.backgroundImage = "linear-gradient(to bottom right, #bfb892, #2a80a1)";	
		menu[3].style.color = "#2a80a1";
		menu[3].style.fontWeight = "900";
	})


//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\
 //\\//\\\//\\//\\/\   -- MOUSE LEAVE --   //\\//\\//\\\//\\//\\/\\
//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\

//for (var i = 0; i < menu.length; i ++) {
	menu[0].addEventListener('mouseleave', function() {
		menu[0].style.color = "black";
		menu[0].style.fontWeight = "400"; 
		text.innerHTML = savedText;
		title[0].innerHTML = savedTitle;
		planet.style.backgroundColor = savedColor;
		planet.style.backgroundImage = savedGradient;
	})
//} saying that menu[i] is undefined, so... i'll just copy and paste :( 

	menu[1].addEventListener('mouseleave', function() {
		menu[1].style.color = "black";
		menu[1].style.fontWeight = "400"; 
		text.innerHTML = savedText;
		title[0].innerHTML = savedTitle;
		planet.style.backgroundColor = savedColor;
		planet.style.backgroundImage = savedGradient; 		

	})

	menu[2].addEventListener('mouseleave', function() {
		menu[2].style.color = "black";
		menu[2].style.fontWeight = "400"; 
		text.innerHTML = savedText;
		title[0].innerHTML = savedTitle;
		planet.style.backgroundColor = savedColor;
		planet.style.backgroundImage = savedGradient; 

	})

	menu[3].addEventListener('mouseleave', function() {
		menu[3].style.color = "black";
		menu[3].style.fontWeight = "400"; 
		text.innerHTML = savedText;
		title[0].innerHTML = savedTitle;
		planet.style.backgroundColor = savedColor;
		planet.style.backgroundImage = savedGradient; 
	})	


//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\
 //\\//\\\//\\//\\/\   -- MOUSE CLICK --   //\\//\\//\\\//\\//\\/\\
//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\//\\//\\\//\\//\\

//you need to use logic here.
//if clicked, makes something true for that moon and false for the others.

	// for (var i = 0; i < menu.length; i++) {
	// 	menu[i].addEventListener('click', function() {
	// 		menu[i].style.textDecoration = "underline"
	// 	})
	// }

	menu[0].addEventListener('click', function() {
		menu[0].style.textDecoration = "underline";
		menu[1].style.textDecoration = "none";
		menu[2].style.textDecoration = "none";
		menu[3].style.textDecoration = "none";
		savedTitle = "Io";
		savedText =  "Io is the innermost of the four Galilean moons of the planet Jupiter. It is the fourth-largest moon, has the highest density of all the moons, and is the driest known object in the Solar System. It was discovered in 1610 and was named after the mythological character Io, a priestess of Hera who became one of Zeus's lovers.";
		savedColor = "#d7f43d";
		savedGradient = "";
	})
	menu[1].addEventListener('click', function() {
		menu[1].style.textDecoration = "underline";
		menu[0].style.textDecoration = "none";
		menu[2].style.textDecoration = "none";
		menu[3].style.textDecoration = "none";
		savedTitle = "Europa";
		savedText = "Slightly smaller than the Moon, Europa is primarily made of silicate rock and has a water-ice crust and probably an iron-nickel core. It has the smoothest surface of any known solid object in the Solar System. The apparent youth and smoothness of the surface have led to the hypothesis that a water ocean exists beneath it, which could conceivably serve as an abode for extraterrestrial life.";		
		savedColor = "";
		savedGradient = "radial-gradient(#ecdeb2, #ea9123);"

	})
	menu[2].addEventListener('click', function() {
		menu[2].style.textDecoration = "underline";
		menu[0].style.textDecoration = "none";
		menu[1].style.textDecoration = "none";
		menu[3].style.textDecoration = "none";
		savedTitle = "Ganymede";
		savedText = "Ganymede has a diameter of 5,268 km (3,273 mi), 8% larger than the planet Mercury, but its mass is only 45% that of Mercury. Ganymede is 2% larger than Saturn's Titan, the Solar System's second-largest moon. At 2.02 times the mass of the Moon, it is the most massive planetary satellite. It is the ninth-largest object in the Solar System, and the largest without a substantial atmosphere."
		savedColor = "#a898ec";
		savedGradient = "";


	})
	menu[3].addEventListener('click', function() {
		menu[3].style.textDecoration = "underline";
		menu[0].style.textDecoration = "none";
		menu[1].style.textDecoration = "none";
		menu[2].style.textDecoration = "none";
		savedTitle = "Callisto";
		savedText = "The surface of Callisto is the oldest and most heavily cratered in the Solar System. Because of its low radiation levels, Callisto has long been considered the most suitable place for a human base for future exploration of the Jovian system."
		savedColor = "";
		savedGradient = "linear-gradient(to bottom right, #bfb892, #2a80a1)";
	})






