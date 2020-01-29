const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const navEl = document.getElementById("navv");

//alert("It worksss!");
//console.log("Hi!");
const tw = TweenLite.fromTo(".nav-closed", 2, {opacity: 0, ease: Power2.easeOut}, {opacity: 0.7});

//const tl = new TimelineLite({ paused: true, reversed: true });

const tl = new TimelineLite({ paused: true });


tl.to(".cover",1, {
	//left: "40%",
	ease: Power2.easeOut
})
.to(
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
			console.log ("done");
		}
	}
);

navButton.addEventListener("mouseenter", () => {tl.play();});


navEl.addEventListener("mouseleave", () =>{
	rev = setTimeout(tl.reverse(), 500);
});

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
*/

