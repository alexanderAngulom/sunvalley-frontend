"use strict";(self.webpackChunkRickAndMortyFrontend=self.webpackChunkRickAndMortyFrontend||[]).push([[811],{9811:(y,s,o)=>{o.r(s),o.d(s,{CharacterListModule:()=>m});var c=o(6895),i=o(9800),a=o(8256),p=o(8104);let h=(()=>{class t{constructor(n){this.router=n}ngOnInit(){console.log()}navigateToSpecificRouteWithParams(n,e,l){this.router.navigate(["/character-detail"],{queryParams:{idC:n,imagenC:e,nameC:l}})}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(i.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-characters-card"]],inputs:{character:"character"},decls:6,vars:3,consts:[[3,"click"],[1,"card"],["alt","Character Image",3,"src"],[1,"card-content"]],template:function(n,e){1&n&&(a.TgZ(0,"main",0),a.NdJ("click",function(){return e.navigateToSpecificRouteWithParams(null==e.character?null:e.character.id,null==e.character?null:e.character.image,null==e.character?null:e.character.name)}),a.TgZ(1,"div",1),a._UZ(2,"img",2),a.TgZ(3,"div",3)(4,"p"),a._uU(5),a.qZA()()()()),2&n&&(a.xp6(2),a.Q6J("src",null==e.character?null:e.character.image,a.LSH),a.xp6(3),a.AsE(" ",null==e.character?null:e.character.name,", ",null==e.character||null==e.character.origin?null:e.character.origin.name," "))},styles:["[_ngcontent-%COMP%]:root{--color-primary-white: rgb(255, 255, 255)}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:50px;font-family:Roboto,sans-serif}.card[_ngcontent-%COMP%]{width:24rem;height:36rem;border-radius:10px;overflow:hidden;cursor:pointer;position:relative;color:var(--color-primary-white);box-shadow:0 10px 30px 5px #0003}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;object-fit:cover;width:100%;height:100%;top:0;left:0;opacity:.9;transition:opacity .2s ease-out}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:absolute;inset:auto auto 30px 30px;margin:0;transition:inset .3s .3s ease-out;font-family:Roboto Condensed,sans-serif;font-weight:400;text-transform:uppercase}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;opacity:0;max-width:80%;transition:opacity .3s ease-out}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;inset:auto auto 80px 30px;background-color:#000c;padding:10px}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;inset:auto auto 40px 30px;color:inherit;text-decoration:none}.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{inset:auto auto 220px 30px;transition:inset .3s ease-out}.card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{opacity:1;transition:opacity .5s .1s ease-in}.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transition:opacity .3s ease-in;opacity:1}.material-symbols-outlined[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:0}),t})();function u(t,r){1&t&&a._UZ(0,"app-characters-card",2),2&t&&a.Q6J("character",r.$implicit)}const d=[{path:"",component:(()=>{class t{constructor(n){this.dataservice=n,this.characters$=this.dataservice.characters$}ngOnInit(){console.log(this.characters$)}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(p.D))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-character-list"]],decls:3,vars:3,consts:[[1,"character__list"],[3,"character",4,"ngFor","ngForOf"],[3,"character"]],template:function(n,e){1&n&&(a.TgZ(0,"section",0),a.YNc(1,u,1,1,"app-characters-card",1),a.ALo(2,"async"),a.qZA()),2&n&&(a.xp6(1),a.Q6J("ngForOf",a.lcZ(2,1,e.characters$)))},dependencies:[c.sg,h,c.Ov],styles:["section.character__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;height:auto}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[i.Bz.forChild(d),i.Bz]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[c.ez,i.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[c.ez,C,g]}),t})()}}]);