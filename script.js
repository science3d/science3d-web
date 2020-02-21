const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const container = document.querySelector('.container');
const aboutW = document.querySelector(".about");
const about_meW = document.querySelector(".about-me");
const contactW = document.querySelector(".contact");
const covrI = document.querySelector(".cover");

const navEl = document.getElementById("navv");
const aboutB = document.getElementById("about-btn");
const aboutmeB = document.getElementById("about-me-btn");
const contactsB = document.getElementById("contacts-btn");

//alert("It worksss!");
//console.log("Hi!");
const tw = TweenLite.fromTo("nav", 3, {opacity: 0, ease: Power2.easeOut}, {opacity: 0.7});

//const tl = new TimelineLite({ paused: true, reversed: true });

const tl = new TimelineLite({ paused: true, reversed: true });
const ab = new TimelineLite({ paused: true, reversed: true });
const ab_me = new TimelineLite({ paused: true, reversed: true });
const co = new TimelineLite({ paused: true, reversed: true });
const contain = new TimelineLite({ paused: true, reversed: true });
const covr = new TimelineLite();

covr.to(
	".cover",
	100,
	{
		scale: 1.5,
		width: "100%",
		height: "100%",
		ease: Power2.easeOut
	}
);

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
			navOpen.style.pointerEvents = "auto";
		}
	}
);

contain.fromTo(
	".container", 
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
)
.fromTo(
	".forma", 
	0.5, 
	{
		opacity: 1,
		ease: Power2.easeOut
	},
	{
		opacity: 0,
	}
);

ab_me.to(
	".about-me", 
	1, 
	{
		height: "70%",
		ease: Power2.easeOut
	},
	"-=0.5"
)
.fromTo(
	".about-me", 
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
)
.fromTo(
	".forma", 
	0.5, 
	{
		opacity: 1,
		ease: Power2.easeOut
	},
	{
		opacity: 0,
	}
);


co.to(
	".contact", 
	1, 
	{
		height: "55%",
		ease: Power2.easeOut,
	},
	"-=0.5"
)
.fromTo(
	".contact", 
	0.5, 
	{
		opacity: 0,
		y: 10,
		ease: Power2.easeOut,
		onComplete: togglePointer,
		onReverseComplete: togglePointer
	},
	{
		opacity: 0.7,
		y: 30,
		onComplete: togglePointer,
		onReverseComplete: togglePointer
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
aboutmeB.addEventListener("click", () => {toggleTween(ab_me);});
// setFocus("forma-name");

covrI.addEventListener("mousemove", () => {covr.reversed() ? covr.play() : covr.reverse();});
covrI.addEventListener("click", () => {toggleTween(covr);});
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
function togglePointer(){
	if (contactW.style.opacity < 0.6) {contactW.style.pointerEvents = "none"; alert("none")} else
		{contactW.style.pointerEvents = "auto"; alert("auto")};
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
*/
function toggleTween (tween){
	if (tween == tl) {
		if (!ab.reversed()) {ab.reverse()};
		if (!co.reversed()) {co.reverse()};
		if (!ab_me.reversed()) {ab_me.reverse()};			
	};
	if (tween == ab) {
		if (!tl.reversed()) {tl.reverse()};
		if (!co.reversed()) {co.reverse()};	
		if (!ab_me.reversed()) {ab_me.reverse()};			
	};
	if (tween == co) {
		if (!ab.reversed()) {ab.reverse()};
		if (!tl.reversed()) {tl.reverse()};	
		if (!ab_me.reversed()) {ab_me.reverse()};			
	};
	if (tween == ab_me) {
		if (!ab.reversed()) {ab.reverse()};
		if (!tl.reversed()) {tl.reverse()};	
		if (!co.reversed()) {co.reverse()};			
	};
	tween.reversed() ? tween.play() : tween.reverse();
};

/*
function oneWayToggle (tweenAn){
	if(tweenAn.reversed()) {tweenAn.reverse();}
};

		<iframe class="iFrame" src="https://docs.google.com/forms/d/e/1FAIpQLSfIafL3AONbtcK8KmTUCaXg8IyFQSmJlUQC1BeLEp19h18_dw/viewform?embedded=true">Loading…</iframe>
*/

