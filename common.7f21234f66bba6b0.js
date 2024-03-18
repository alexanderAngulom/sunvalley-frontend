"use strict";(self.webpackChunkRickAndMortyFrontend=self.webpackChunkRickAndMortyFrontend||[]).push([[592],{8104:(E,l,e)=>{e.d(l,{D:()=>p});var o=e(580),n=e(1135),h=e(5698),u=e(8505),i=e(8256);const d=o.Ps`
query {
  
  characters {
    results {
      name,
      id,
      status,
      image,
      location{
        name
      },
      origin{
        name
      }
    }
    
  }
  
}

`;let p=(()=>{class a{constructor(t){this.apollo=t,this.episodeSubject=new n.X([]),this.episodes$=this.episodeSubject.asObservable(),this.charactersSubject=new n.X([]),this.characters$=this.charactersSubject.asObservable(),this.getDataApi()}getDataApi(){this.apollo.watchQuery({query:d}).valueChanges.pipe((0,h.q)(1),(0,u.b)(({data:t})=>{const{characters:s}=t;let r=localStorage.getItem("characterUpdate");if(null!=r){let c=this.getDataUpdate(s.results,JSON.parse(r));console.log(c),this.charactersSubject.next(c)}else this.charactersSubject.next(s.results)})).subscribe()}getDataUpdate(t,s){const r=[...t].findIndex(c=>c.id===s.id);return console.log("getDataUpdate",r),t}}return a.\u0275fac=function(t){return new(t||a)(i.LFG(o._M))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);