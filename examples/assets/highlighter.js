import"./web-ifc-api-C62xsSvk.js";import{p as s,C as a,i as r,n as c,k as d,u as i,a as m}from"./index-dcGUkgb8.js";import{S as l}from"./index-DHjhA7zm.js";import{S as p}from"./stats.min-BpIepu9J.js";const u=document.getElementById("container"),t=new s,f=t.get(a),e=f.create();e.scene=new r(t);e.renderer=new c(t,u);e.camera=new d(t);t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const g=t.get(i);g.create(e);e.scene.three.background=null;const w=new m(t),h=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),y=await h.arrayBuffer(),b=new Uint8Array(y),S=w.load(b);e.scene.three.add(S);const o=t.get(l);o.setup({world:e});o.zoomToSelection=!0;const n=new p;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
