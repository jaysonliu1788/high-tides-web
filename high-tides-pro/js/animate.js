const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});

document.querySelectorAll('.fade-in,.slide-up').forEach(el=>{
  observer.observe(el);
});
