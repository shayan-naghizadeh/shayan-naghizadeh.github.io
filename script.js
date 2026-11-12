document.documentElement.classList.add('js');
const menu=document.getElementById('menuToggle'), links=document.getElementById('navLinks');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'CLOSE':'MENU'});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu.textContent='MENU'}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();