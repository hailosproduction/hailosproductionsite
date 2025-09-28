import React, { useEffect } from 'react';

export default function ParticlesBackground(){
  useEffect(()=>{
    const canvas = document.getElementById('particles-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles = [];
    const PARTICLE_COUNT = Math.max(30, Math.floor((w*h)/70000));

    function init(){
      particles.length = 0;
      for(let i=0;i<PARTICLE_COUNT;i++){
        particles.push({
          x: Math.random()*w,
          y: Math.random()*h,
          r: Math.random()*1.4+0.3,
          vx: (Math.random()-0.5)*0.15,
          vy: (Math.random()-0.5)*0.15,
          alpha: 0.6 + Math.random()*0.4
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
      ctx.fillStyle = 'rgba(255,255,255,0.0)';
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

    return ()=>{
      window.removeEventListener('resize', resize);
    }
  },[]);

  return <canvas id="particles-canvas" className="particles-canvas" />;
}
