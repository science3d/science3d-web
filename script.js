const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const aboutW = document.querySelector(".about");
const contactW = document.querySelector(".contact");

const navEl = document.getElementById("navv");
const aboutB = document.getElementById("about-btn");
const contactsB = document.getElementById("contacts-btn");

//alert("It worksss!");
//console.log("Hi!");
const tw = TweenLite.fromTo("nav", 3, {opacity: 0, ease: Power2.easeOut}, {opacity: 0.7});

//const tl = new TimelineLite({ paused: true, reversed: true });

const tl = new TimelineLite({ paused: true });
const ab = new TimelineLite({ paused: true });
const co = new TimelineLite({ paused: true });

tl.to(
	"nav", 
	1, 
	{
		height: "100%",
		ease: Power2.easeOut
	},
	"-=0.5"
)
.fromTo(
	".nav-open", 
	0.5, 
	{
		opacity: 0,
		x: 50,
		ease: Power2.easeOut
	},
	{
		opacity: 1,
		x: 0,
		onComplete: function(){
			navOpen.style.pointerEvents = "auto";
		}
	}
);

ab.to(
	".about", 
	1, 
	{
		height: "70%",
		ease: Power2.easeOut
	},
	"-=0.5"
)
.fromTo(
	".about", 
	0.5, 
	{
		opacity: 0,
		y: 10,
		ease: Power2.easeOut
	},
	{
		opacity: 0.7,
		y: 30,
		onComplete: function(){
			navOpen.style.pointerEvents = "auto"; 
		}
	}
);

co.to(
	".contact", 
	1, 
	{
		height: "60%",
		ease: Power2.easeOut
	},
	"-=0.5"
)
.fromTo(
	".contact", 
	0.5, 
	{
		opacity: 0,
		y: 10,
		ease: Power2.easeOut
	},
	{
		opacity: 0.7,
		y: 30,
		onComplete: function(){
			navOpen.style.pointerEvents = "auto"; 
		}
	}
);


navButton.addEventListener("mouseenter", () => {tl.play();});
navButton.addEventListener("click", () => {tl.play();});
navEl.addEventListener("mouseleave", () =>{
	rev = setTimeout(tl.reverse(), 500);
});

aboutB.addEventListener("mouseenter", () => {ab.play(); if(co.played()){co.reverse()};});
aboutB.addEventListener("click", () => {ab.play();});
aboutB.addEventListener("mouseleave", () => {ab.reverse();});

contactsB.addEventListener("click", () => {co.reversed() ? co.play() : co.play();});
setFocus("forma-name");

aboutW.addEventListener("mouseleave", () =>{
	revA = setTimeout(allAnimReset(), 100);});

function allAnimReset(){
	if (tl.played()){tl.reverse()};
	if (ab.played()){ab.reverse()};
	if (co.played()){co.reverse()};
	
//	tl.reversed() ? void() : tl.reverse();
//	ab.reversed() ? void() : ab.reverse();
};

function setFocus(elementToFocus) 
	{ 
		document.getElementById(elementToFocus).focus() 
	};

/*
navButton.addEventListener ("click", (e) =>{
	if (tl.isActive()){
		e.preventDefault();
		e.stopImmediatePropagation();
		return false;
	}
	toggleTween(tl);
});

function toggleTween (tween){
	tween.reversed() ? tween.play() : tween.reverse();
}

		<iframe class="iFrame" src="https://docs.google.com/forms/d/e/1FAIpQLSfIafL3AONbtcK8KmTUCaXg8IyFQSmJlUQC1BeLEp19h18_dw/viewform?embedded=true">Loading…</iframe>
*/

