import{V as m}from"./web-ifc-api-C62xsSvk.js";import{p as i,C as l,i as p,k as f,u as h}from"./index-dcGUkgb8.js";import{B as w,n as g}from"./index-DHjhA7zm.js";import{S as u}from"./stats.min-BpIepu9J.js";const r=document.getElementById("container"),n=new i,k=n.get(l),e=k.create();e.scene=new p(n);e.renderer=new w(n,r);e.camera=new f(n);n.init();e.camera.controls.setLookAt(5,5,5,0,0,0);r.appendChild(e.renderer.three2D.domElement);const y=n.get(h);y.create(e);e.scene.three.background=null;const a=n.get(g);a.threshold=10;for(let o=0;o<20;o++){const s=Math.random()*5,d=Math.random()*5,c=Math.random()*5;a.create(e,"🚀",new m(s,d,c))}const t=new u;t.showPanel(2);document.body.append(t.dom);t.dom.style.left="0px";t.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>t.begin());e.renderer.onAfterUpdate.add(()=>t.end());
