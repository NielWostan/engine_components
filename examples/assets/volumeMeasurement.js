import"./web-ifc-api-CBCWqdvz.js";import{S as c}from"./stats.min-BpIepu9J.js";import{p as d,C as l,O as i,H as m,u as g,h as p}from"./index-B7_GRGdn.js";import{x as u,C as f,R as h}from"./index-D5fPHYMM.js";const w=document.getElementById("container"),t=new d,b=t.get(l),e=b.create();e.scene=new i(t);e.renderer=new u(t,w);e.camera=new m(t);t.init();e.camera.controls.setLookAt(5,5,5,0,0,0);e.scene.setup();const y=t.get(g);y.create(e);e.scene.three.background=null;const C=new p(t),x=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),v=await x.arrayBuffer(),A=new Uint8Array(v),B=C.load(A);e.scene.three.add(B);const o=t.get(f);o.world=e;o.enabled=!0;const s=t.get(h);s.setup({world:e});s.events.select.onHighlight.add(a=>{const r=o.getVolumeFromFragments(a);console.log(r)});s.events.select.onClear.add(()=>{o.clear()});const n=new c;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
