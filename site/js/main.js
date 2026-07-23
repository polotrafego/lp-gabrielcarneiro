function scrollCarousel(trackId, dir){
    const track = document.getElementById(trackId);
    if(!track) return;
    const card = track.querySelector('.video-card, .photo-card');
    const step = card ? card.getBoundingClientRect().width + 18 : 300;
    track.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
  }

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); } });
  }, {threshold:0.1});
  revealEls.forEach(el=>observer.observe(el));

  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{ o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
      if(!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });
