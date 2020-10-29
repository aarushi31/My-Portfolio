const tl = gsap.timeline({defaults : {ease:'power1.out'}});
tl.fromTo('nav',{opacity:0},{opacity:1,duration:.5});
tl.fromTo('.big-text',{opacity:0},{opacity:1,duration:.8});
tl.fromTo('.photo',{opacity:0},{opacity:1,duration:.8,delay:0.4});
tl.fromTo('.text',{opacity:0},{opacity:1,duration:.8,delay:0.3});
