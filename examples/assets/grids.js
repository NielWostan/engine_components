import{a as t,B as s}from"./web-ifc-api-56EJvEs4.js";import{p as r,C as a,o as d,r as c,W as m,u as i}from"./index-BcIWfMQD.js";const l=document.getElementById("container"),n=new r,p=n.get(a),e=p.create();e.scene=new d(n);e.renderer=new c(n,l);e.camera=new m(n);n.init();const w=new t(new s);e.scene.three.add(w);e.scene.three.background=null;const g=n.get(i),u=g.create(e);console.log(u);const o=new Stats;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());
