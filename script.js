$(function() {
	
	const body = document.querySelector('body');
	const toggle = document.getElementById('toggle');
	const input = document.getElementById('switch');
  
  // Night mode
	toggle.addEventListener('click', function() {
	  const isChecked = input.checked;
	  if (isChecked) {
		body.classList.remove('night');
	  } else {
		body.classList.add('night');
	  }
	});
  
	const introHeight = document.querySelector('.intro').offsetHeight;
	const topButton = document.getElementById('top-button');
	
	//Waving Hand
	const hand = document.querySelector('.emoji.wave-hand');
	
	// When load up
	function waveOnLoad() {
	  hand.classList.add('wave');
	  setTimeout(function() {
		hand.classList.remove('wave');
	  }, 2000);
	}
	// When the mouse touches the emoji == waves
	hand.addEventListener('mouseover', function() {
	  hand.classList.add('wave');
	});
	// Allows you to wave hand again even when it listens for the first wave
	hand.addEventListener('mouseout', function() {
	  hand.classList.remove('wave');
	});
	// Fading for front end
	window.sr = ScrollReveal({
	  reset: false,
	  duration: 600,
	  easing: 'cubic-bezier(.694,0,.335,1)',
	  scale: 1,
	  viewFactor: 0.3,
	});
  
	sr.reveal('.background');
	sr.reveal('.skills');
	sr.reveal('.experience', { viewFactor: 0.2 });
	sr.reveal('.featured-projects', { viewFactor: 0.1 });
	sr.reveal('.other-projects', { viewFactor: 0.05 });
  });
  