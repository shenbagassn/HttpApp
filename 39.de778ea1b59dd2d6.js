"use strict";(self.webpackChunkHttpApp=self.webpackChunkHttpApp||[]).push([[39],{5039:(U,u,i)=>{i.r(u),i.d(u,{AuthModule:()=>C});var l=i(459),e=i(1223),m=i(2785);let h=(()=>{class n{constructor(t,o){this.userSer=t,this.myRouter=o}canActivate(){return this.userSer.isLoggedIn()||this.myRouter.navigateByUrl("/login"),this.userSer.isLoggedIn()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.K),e.LFG(l.F0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=i(520);let g=(()=>{class n{constructor(t){this.http=t}getWeather(t){return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=3a3eb62e70b9745f96cb7c04245a9cb8&units=imperial")}getFullNews(){return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=408b4153b994422d8638da72f2d3ac5b")}getcategoryWiseNews(t){return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category="+t+"&apiKey=408b4153b994422d8638da72f2d3ac5b")}movies(t){return this.http.get("http://www.omdbapi.com/?t="+t+"&apikey=c429066e")}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(d.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var s=i(2382),p=i(9808);function v(n,r){if(1&n&&(e.TgZ(0,"div")(1,"label",2),e._uU(2," Poster:"),e.qZA(),e._UZ(3,"img",6)(4,"br")(5,"br"),e.TgZ(6,"label",2),e._uU(7),e.qZA(),e._UZ(8,"br")(9,"br"),e.TgZ(10,"label",2),e._uU(11),e.qZA(),e._UZ(12,"br")(13,"br"),e.TgZ(14,"label",2),e._uU(15),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.s9C("src",t.movieData.Poster,e.LSH),e.xp6(4),e.hij(" Movie Name: ",t.movieData.Title,""),e.xp6(4),e.hij(" Actors: ",t.movieData.Actors,""),e.xp6(4),e.hij(" Director: ",t.movieData.Director,"")}}function Z(n,r){if(1&n&&(e.TgZ(0,"h2"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.errorMsg)}}let b=(()=>{class n{constructor(t){this.mservice=t,this.movieData="",this.errorMsg=""}ngOnInit(){}getMovies(t){this.mservice.movies(t).subscribe({next:o=>{console.log(o),console.log(o.Error),o.Error?(this.errorMsg=o.Error,this.movieData=""):(this.movieData=o,this.errorMsg=""),this.movietxt=""},error:o=>{console.log(o),this.movietxt=""}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-movies"]],decls:18,vars:3,consts:[[1,"movies-container"],["src","../../assets/m1.webp",2,"width","200px","height","100px","margin-right","auto","margin-left","auto","display","block"],["for",""],["type","text","name","","id","","placeholder","Enter Movie Name",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-success",3,"click"],[4,"ngIf"],["alt","",2,"width","300px","height","200px",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"h1"),e._uU(3,"Movies"),e.qZA(),e._UZ(4,"img",1)(5,"br")(6,"br"),e.TgZ(7,"label",2),e._uU(8,"Movie Name"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"input",3),e.NdJ("ngModelChange",function(a){return o.movietxt=a}),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"button",4),e.NdJ("click",function(){return o.getMovies(o.movietxt)}),e._uU(13,"Search"),e.qZA(),e._UZ(14,"br")(15,"br"),e.YNc(16,v,16,4,"div",5),e.YNc(17,Z,2,1,"h2",5),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("ngModel",o.movietxt),e.xp6(6),e.Q6J("ngIf",o.movieData),e.xp6(1),e.Q6J("ngIf",o.errorMsg))},directives:[s.Fj,s.JJ,s.On,p.O5],styles:[".movies-container[_ngcontent-%COMP%]{width:100%;height:100vh;margin-left:400px;margin-top:50px;width:800px;height:720px;padding:30px;background-color:#f5f5f5;border-radius:10px;box-shadow:5px 5px 20px #a9a9a9}h1[_ngcontent-%COMP%]{text-align:center}"]}),n})();var f=i(2340);function _(n,r){if(1&n&&(e.TgZ(0,"div",10),e._UZ(1,"img",11)(2,"br")(3,"br"),e.TgZ(4,"h6",12),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"a",13)(9,"button",14),e._uU(10,"Read More..."),e.qZA()()()),2&n){const t=r.$implicit;e.xp6(1),e.s9C("src",t.urlToImage,e.LSH),e.xp6(4),e.hij(" ",t.title,""),e.xp6(2),e.Oqu(t.description),e.xp6(1),e.s9C("href",t.url,e.LSH)}}let x=(()=>{class n{constructor(t){this.mservice=t,this.newArr=[],this.environment=f.N}ngOnInit(){console.log(this.environment),this.mservice.getFullNews().subscribe({next:t=>{this.newArr=t.articles},error:t=>{console.log(t)}})}getCategoryNews(t){this.mservice.getcategoryWiseNews(t.target.value).subscribe({next:o=>{console.log(o.articles),this.newArr=o.articles,console.log(t)},error:o=>{console.log(o)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-news"]],decls:22,vars:1,consts:[[1,"container"],["name","",1,"form-control",3,"change"],["value","all"],["value","business"],["value","entertainment"],["value","health"],["value","sports"],["value","science"],["value","technology"],["class","col-md-3 newstab",4,"ngFor","ngForOf"],[1,"col-md-3","newstab"],[1,"img-responsive",3,"src"],[2,"font-weight","900"],["target","_blank",3,"href"],[1,"btn","btn-success"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"News"),e.qZA(),e.TgZ(3,"select",1),e.NdJ("change",function(a){return o.getCategoryNews(a)}),e.TgZ(4,"option",2),e._uU(5,"All"),e.qZA(),e.TgZ(6,"option",3),e._uU(7,"Business"),e.qZA(),e.TgZ(8,"option",4),e._uU(9,"Entertainment"),e.qZA(),e.TgZ(10,"option",5),e._uU(11,"Health"),e.qZA(),e.TgZ(12,"option",6),e._uU(13,"Sports"),e.qZA(),e.TgZ(14,"option",7),e._uU(15,"Science"),e.qZA(),e.TgZ(16,"option",8),e._uU(17,"Technology"),e.qZA()()(),e._UZ(18,"br")(19,"br"),e.TgZ(20,"div",0),e.YNc(21,_,11,4,"div",9),e.qZA()),2&t&&(e.xp6(21),e.Q6J("ngForOf",o.newArr))},directives:[s.YN,s.Kr,p.sg],styles:["h1[_ngcontent-%COMP%]{text-align:center}"]}),n})();function w(n,r){if(1&n&&(e.TgZ(0,"div",7)(1,"label",2),e._uU(2),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"label",2),e._uU(6),e.qZA(),e._UZ(7,"br")(8,"br"),e.TgZ(9,"label",2),e._uU(10),e.qZA(),e._UZ(11,"br")(12,"br"),e.TgZ(13,"label",2),e._uU(14),e.qZA(),e._UZ(15,"br")(16,"br"),e.TgZ(17,"label",2),e._uU(18),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.hij("City Name: ",t.weather.name,""),e.xp6(4),e.hij("Country: ",t.weather.sys.country,""),e.xp6(4),e.hij("Temperature: ",t.weather.main.temp,"F"),e.xp6(4),e.hij("Humidity: ",t.weather.main.humidity,""),e.xp6(4),e.hij("Wind: ",t.weather.wind.speed,"")}}function A(n,r){if(1&n&&(e.TgZ(0,"h2"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.errorMsg," ")}}const M=[{path:"",children:[{path:"weather",component:(()=>{class n{constructor(t){this.mService=t,this.cityName="",this.errorMsg=""}ngOnInit(){this.msg=localStorage.getItem("loggedUser")}getWeather(t){this.errorMsg="",this.weather="",this.mService.getWeather(t).subscribe({next:o=>{this.weather=o,this.cityName="",console.log(this.weather)},error:o=>{console.log(o),this.errorMsg=o.error.message,this.cityName=""}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-weather"]],decls:20,vars:3,consts:[[1,"weather-container"],["src","../../assets/weather.jpg",2,"width","200px","height","100px","margin-right","auto","margin-left","auto","display","block"],["for",""],["type","text","name","","id","","placeholder","Enter City Name",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-success",3,"click"],["class","cityDetails",4,"ngIf"],[4,"ngIf"],[1,"cityDetails"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"div")(3,"h1"),e._uU(4,"Weather"),e.qZA(),e._UZ(5,"img",1),e.TgZ(6,"label",2),e._uU(7,"City"),e.qZA(),e._UZ(8,"br"),e.TgZ(9,"input",3),e.NdJ("ngModelChange",function(a){return o.cityName=a}),e.qZA(),e._UZ(10,"br")(11,"br"),e.TgZ(12,"button",4),e.NdJ("click",function(){return o.getWeather(o.cityName)}),e._uU(13,"Search"),e.qZA(),e._UZ(14,"br")(15,"br"),e.qZA(),e.YNc(16,w,19,5,"div",5),e.YNc(17,A,2,1,"h2",6),e.qZA()(),e._UZ(18,"br")(19,"br")),2&t&&(e.xp6(9),e.Q6J("ngModel",o.cityName),e.xp6(7),e.Q6J("ngIf",o.weather),e.xp6(1),e.Q6J("ngIf",o.errorMsg))},directives:[s.Fj,s.JJ,s.On,p.O5],styles:[".weather-container[_ngcontent-%COMP%]{width:100%;height:100vh;margin-left:400px;margin-top:50px;width:800px;height:700px;padding:30px;background-color:#f5f5f5;border-radius:10px;box-shadow:5px 5px 20px #a9a9a9}label[_ngcontent-%COMP%]{font-weight:700;font-size:large}h1[_ngcontent-%COMP%]{text-align:center}.cityDetails[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700;font-size:medium}"]}),n})(),canActivate:[h]},{path:"news",component:x,canActivate:[h]},{path:"movies",component:b,canActivate:[h]}]}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.Bz.forChild(M)],l.Bz]}),n})();var T=i(4466);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[y,T.m]]}),n})()}}]);