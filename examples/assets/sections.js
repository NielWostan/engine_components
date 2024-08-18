import{V as g,b as k,L,C as A}from"./web-ifc-api-BXZoUgQp.js";import{p as B,C as x,O as D,S as M,l as U,u as O,h as R,s as T,F as G,c as W,d as P,E as $}from"./index-Bt57B43I.js";import{d as j,R as m,m as f}from"./index-CqPyogbW.js";import{S as v}from"./stats.min-GTpOrGrX.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N=document.getElementById("container"),t=new B,V=t.get(x),e=V.create();e.scene=new D(t);e.renderer=new M(t,N);e.camera=new U(t);e.renderer.postproduction.enabled=!0;e.renderer.postproduction.customEffects.outlineEnabled=!0;t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const C=t.get(O);C.config.color.setHex(6710886);const E=C.create(e);E.three.position.y-=1;e.renderer.postproduction.customEffects.excludedMeshes.push(E.three);e.scene.three.background=null;const h=t.get(R),_=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),q=await _.arrayBuffer(),z=new Uint8Array(q),s=h.load(z);e.scene.three.add(s);const H=await fetch("https://thatopen.github.io/engine_components/resources/small.json"),J=await H.json();s.setLocalProperties(J);const r=new v;r.showPanel(2);document.body.append(r.dom);r.dom.style.left="0px";r.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>r.begin());e.renderer.onAfterUpdate.add(()=>r.end());const d=t.get(T);d.world=e;const b=d.create({name:"Section 01",id:"1234",normal:new g(-1,0,0),point:new g(1.5,0,0)}),l=t.get(G);l.setup({world:e});const K=t.get(W),i=K.create(e);for(const n of s.items)i.add(n.mesh);i.needsUpdate=!0;e.camera.controls.addEventListener("sleep",()=>{i.needsUpdate=!0});const c=t.get(P),o=t.get($);c.byModel(s.uuid,s);c.byEntity(s);const S=c.find({models:[s.uuid]}),w=c.find({entities:["IFCWALLSTANDARDCASE","IFCWALL","IFCSLAB"]}),y=c.find({entities:["IFCDOOR","IFCWINDOW","IFCPLATE","IFCMEMBER"]}),Q=new k({color:"gray",side:2}),X=new L({color:"black"}),Y=new k({color:"black",opacity:.5,side:2,transparent:!0});o.styles.create("thick",new Set,e,X,Q,Y);for(const n in w){const a=h.list.get(n);if(!a)continue;const{mesh:u}=a;o.styles.list.thick.fragments[n]=new Set(w[n]),o.styles.list.thick.meshes.add(u)}o.styles.create("thin",new Set,e);for(const n in y){const a=h.list.get(n);if(!a)continue;const{mesh:u}=a;o.styles.list.thin.fragments[n]=new Set(y[n]),o.styles.list.thin.meshes.add(u)}await o.update(!0);j.init();const I=m.create(()=>f`
  <bim-panel active label="Sections Tutorial" class="options-menu">
      <bim-panel-section collapsed name="sections" label="Section list">
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(I);const Z=e.renderer.postproduction.customEffects.minGloss,p=new A("white"),F=I.querySelector("bim-panel-section[name='sections']"),ee=m.create(()=>f`
      <bim-button checked label="${b.name}"
        @click="${()=>{e.renderer.postproduction.customEffects.minGloss=.1,l.backupColor=p,c.setColor(S,p),e.scene.three.background=p,d.goTo(b.id),i.needsUpdate=!0}}">
      </bim-button>
    `);F.append(ee);const te=e.scene.three.background,ne=m.create(()=>f`
      <bim-button checked label="Exit"
        @click="${()=>{l.backupColor=null,l.clear(),e.renderer.postproduction.customEffects.minGloss=Z,c.resetColor(S),e.scene.three.background=te,d.exit(),i.needsUpdate=!0}}">
      </bim-button>
    `);F.append(ne);