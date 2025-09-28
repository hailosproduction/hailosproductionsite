import React, { useEffect } from 'react';

export default function ParticlesBackground(){
  useEffect(()=>{
    const canvas = document.getElementById('particles-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let particles = [];
    const COUNT = Math.max(30, Math.floor((w*h)/90000));

    function init(){
      particles = [];
      for(let i=0;i<COUNT;i++){
        particles.push({
          x: Math.random()*w,
          y: Math.random()*h,
          r: Math.random()*1.6 + 0.4,
          vx: (Math.random()-0.5)*0.12,
          vy: (Math.random()-0.5)*0.12,
          alpha: 0.4 + Math.random()*0.6
        });
      }
    }

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    }

    function draw(){
      ctx.clearRect(0,0,w,h);
      for(const p of particles){
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>w) p.vx *= -1;
        if(p.y<0||p.y>h) p.vy *= -1;
      }
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    init();
    draw();
    return ()=> window.removeEventListener('resize', resize);
  },[]);

  return <canvas id="particles-canvas" className="particles-canvas" />;
}
