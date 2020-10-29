const tl = gsap.timeline({defaults : {ease:'power1.out'}});
tl.fromTo('nav',{opacity:0},{opacity:1,duration:.5});
tl.fromTo('.big-text',{opacity:0},{opacity:1,duration:1});