import"./web-ifc-api-56EJvEs4.js";import{p as r,C as s,o as a,r as c,W as d,u as i,h as m}from"./index-BcIWfMQD.js";import{A as l}from"./index-mpk8FhA9.js";import{S as p}from"./stats.min-BpIepu9J.js";const f=document.getElementById("container"),t=new r,u=t.get(s),e=u.create();e.scene=new a(t);e.renderer=new c(t,f);e.camera=new d(t);t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const g=t.get(i);g.create(e);e.scene.three.background=null;const h=new m(t),w=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),y=await w.arrayBuffer(),b=new Uint8Array(y),A=h.load(b);e.scene.three.add(A);const o=t.get(l);o.setup({world:e});o.zoomToSelection=!0;const n=new p;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
