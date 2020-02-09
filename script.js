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

const tl = new TimelineLite({ paused: true, reversed: true });
const ab = new TimelineLite({ paused: true });
const co = new TimelineLite({ paused: true });

tl.to(
	"nav", 
	1, 
	{
		height: "70%",
		ease: Power2.easeOut
	},
	"-=0.1"
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
//			navOpen.style.pointerEvents = "auto";
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
	}
);


//navButton.addEventListener("mouseenter", () => {toggleTween(tl);});
navButton.addEventListener("click", () => {toggleTween(tl);});
/*
navEl.addEventListener("mouseleave", () =>{
	rev = setTimeout(oneWayToggle(tl), 500);
});
*/
//aboutB.addEventListener("mouseenter", () => {toggleTween(ab);});
aboutB.addEventListener("click", () => {toggleTween(ab);});
//aboutB.addEventListener("mouseleave", () => {toggleTween(ab);});

contactsB.addEventListener("click", () => {toggleTween(co);});
// setFocus("forma-name");

//aboutW.addEventListener("mouseleave", () =>{
//	revA = setTimeout(allAnimReset(), 100);});
/*
function allAnimReset(){
	if (!tl.reversed()){tl.reverse()};
	if (!ab.reversed()){ab.reverse()};
	if (!co.reversed()){co.reverse()};
	
//	tl.reversed() ? void() : tl.reverse();
//	ab.reversed() ? void() : ab.reverse();
};
*/
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
*/
function toggleTween (tween){
	tween.reversed() ? tween.play() : tween.reverse();
};

/*
function oneWayToggle (tweenAn){
	if(tweenAn.reversed()) {tweenAn.reverse();}
};

		<iframe class="iFrame" src="https://docs.google.com/forms/d/e/1FAIpQLSfIafL3AONbtcK8KmTUCaXg8IyFQSmJlUQC1BeLEp19h18_dw/viewform?embedded=true">Loading…</iframe>
*/

