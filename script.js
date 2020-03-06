//Declaration
const navOpen = document.querySelector('.nav-open');
const container = document.querySelector('.container');
const aboutW = document.querySelector(".about");
const about_meW = document.querySelector(".about-me");
const contactW = document.querySelector(".contact");
const covrI = document.querySelector(".cover");
const containW = document.querySelector(".container");
const navigationW = document.querySelector(".navigation");

const navButton = document.getElementById('portfolio');
const navEl = document.getElementById("navv");
const aboutB = document.getElementById("about-btn");
const aboutmeB = document.getElementById("about-me-btn");
const contactsB = document.getElementById("contacts-btn");
const patentsB = document.getElementById("patents");
const papersB = document.getElementById("papers");
const projectsB = document.getElementById("projects");
const json_demoB = document.getElementById("json_demo");
const unity3dB = document.getElementById("unity3d");
const opencvB = document.getElementById("opencv");
const vectorB = document.getElementById("vector");
const graphics3dB = document.getElementById("graphics3d");
const industrialB = document.getElementById("industrial");
const backB = document.getElementById("containerGoBack");


const tw = TweenLite.fromTo("nav", 3, {opacity: 0, ease: Power2.easeOut}, {opacity: 0.7});
const tl = new TimelineLite({ paused: true, reversed: true });
const ab = new TimelineLite({ paused: true, reversed: true });
const ab_me = new TimelineLite({ paused: true, reversed: true });
const co = new TimelineLite({ paused: true, reversed: true });
const contain = new TimelineLite({ paused: true, reversed: true });
const covr = new TimelineLite();

var navButtonAnimation;

//Animation
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
		height: "60%",
		ease: Power2.easeOut,
		onComplete: function(){
			if (!contain.reversed()) {
			const addNav = TweenLite.to("nav", 0.1, {height: "90%", ease: Power2.easeOut});
			}
		}
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

contain.to(
	"nav",
	0.5,
	{
		height: "90%",
		ease: Power2.easeOut
	},
	"-=0.5"	
)
.to(
	".navigation", 
	0.5, 
	{
		opacity: 0,
		x: 50,
		ease: Power2.easeOut
	},
)
.fromTo(
	".container", 
	0.5, 
	{
		opacity: 0,
		x: 50,
		ease: Power2.easeOut,

	},
	{
		opacity: 1,
		x: 0,
		onComplete: function(){
			containW.style.pointerEvents = "auto";
		}
	},
);

ab.to(
	".about", 
	1, 
	{
		height: "60%",
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
		height: "75vh",
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

//JQuery + GSAP animation:
$(".nav-button").each(function(index, element){
  var nb = new TimelineLite({})
  nb.to(this, 0.3, {scale:1.5, ease: Back.easeOut.config(2)})
  nb.reverse();
  this.animation = nb;
})

$(".nav-button").hover(function(){
  if(navButtonAnimation){
    this.animation.reversed(!this.animation.reversed());
    if(navButtonAnimation != this.animation && navButtonAnimation.reversed() == false){
      navButtonAnimation.reversed(!navButtonAnimation.reversed());
    }
  } else {
    this.animation.reversed(!this.animation.reversed())
  }
  navButtonAnimation = this.animation;  
})

//EventListeners & Navigation:

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

document.querySelectorAll("#patents, #papers, #projects, #json_demo, #unity3d, #opencv, #vector, #graphics3d, #industrial").forEach(item => {
  item.addEventListener('click', event => {
    contain.play();
    if (item == patentsB){
    	document.querySelector(".table-patents").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-patents").style.display = "none"   		
    };
    if (item == vectorB) {
    	document.querySelector(".table-vector").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-vector").style.display = "none"   		
    };
    if (item == papersB) {
    	document.querySelector(".table-papers").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-papers").style.display = "none"   		
    };
    if (item == opencvB) {
    	document.querySelector(".table-opencv").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-opencv").style.display = "none"   		
    };
    if (item == graphics3dB) {
    	document.querySelector(".table-graphics3d").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-graphics3d").style.display = "none"   		
    };
    if (item == unity3dB) {
    	document.querySelector(".table-unity3d").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-unity3d").style.display = "none"   		
    };
    if (item == industrialB) {
    	document.querySelector(".table-industrial").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-industrial").style.display = "none"   		
    };
    if (item == json_demoB) {
    	document.querySelector(".table-json_demo").style.display = "inline-block"
    	} else {
     	document.querySelector(".table-json_demo").style.display = "none"   		
    };        
  })
});


// patentsB.addEventListener("click", () => {contain.play();});

backB.addEventListener("click", () => {
	contain.reverse();
	navigationW.style.pointerEvents = "auto";
	containW.style.pointerEvents = "none";
});

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
	if (contactW.style.opacity < 0.6) {contactW.style.pointerEvents = "none"; } else
		{contactW.style.pointerEvents = "auto";};
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

/*
	if (!contain.reversed()) {
		contain.reverse();
		navigationW.style.pointerEvents = "auto";
		containW.style.pointerEvents = "none";
		};
		*/
};

/*
function oneWayToggle (tweenAn){
	if(tweenAn.reversed()) {tweenAn.reverse();}
};

		<iframe class="iFrame" src="https://docs.google.com/forms/d/e/1FAIpQLSfIafL3AONbtcK8KmTUCaXg8IyFQSmJlUQC1BeLEp19h18_dw/viewform?embedded=true">Loading…</iframe>
*/

