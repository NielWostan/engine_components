import"./web-ifc-api-CBCWqdvz.js";import{S as d}from"./stats.min-BpIepu9J.js";import{p as l,C as m,O as p,a as u,H as w,u as g}from"./index-B7_GRGdn.js";import{S as h}from"./index-D5fPHYMM.js";const f=document.getElementById("container"),o=new l,b=o.get(m),e=b.create();e.scene=new p(o);e.renderer=new u(o,f);e.camera=new w(o);o.init();e.scene.setup();e.camera.controls.setLookAt(12,6,8,0,0,-10);const y=o.get(g);y.create(e);e.scene.three.background=null;const t=o.get(h);t.world=e;t.dbCleaner.enabled=!0;t.url="https://thatopen.github.io/engine_components/resources/streaming/";async function D(r,s){const c=await(await fetch(r)).json();let n;n=await(await fetch(s)).json();const i=await t.load(c,!0,n);console.log(i)}await D("https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed.json","https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed-properties.json");e.camera.controls.addEventListener("sleep",()=>{t.culler.needsUpdate=!0});t.useCache=!0;t.culler.threshold=10;t.culler.maxHiddenTime=1e3;t.culler.maxLostTime=3e3;const a=new d;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";a.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>a.begin());e.renderer.onAfterUpdate.add(()=>a.end());
