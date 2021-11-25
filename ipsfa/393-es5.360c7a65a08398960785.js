!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}(self.webpackChunkipsfa=self.webpackChunkipsfa||[]).push([[393],{3393:function(t,n,o){o.r(n),o.d(n,{RegistroModule:function(){return M}});var a,i=o(8583),s=o(2305),u=o(3679),l=o(7716),g=o(1841),c=((a=function(){function t(r){e(this,t),this.http=r}return r(t,[{key:"register",value:function(e){return this.http.post("http://192.168.0.102:3000/users/",e)}}]),t}()).\u0275fac=function(e){return new(e||a)(l.LFG(g.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a),d=o(2290),m=o(3738),p=o(8295),f=o(9983),h=o(7441),Z=o(2458),v=o(1095),C=[{path:"",component:function(){var t=function(){function t(r,n,o,a){e(this,t),this.userService=r,this.http=n,this.fb=o,this.toastr=a,this.isValidEmail=/\S+@\S+\.\S+/,this.registroForm=this.fb.group({cedula:["",[u.kI.required,u.kI.minLength(6)]],username:["",[u.kI.required,u.kI.pattern(this.isValidEmail)]],password:["",[u.kI.required,u.kI.minLength(5)]],componente:["",[u.kI.required]],Date:["",[u.kI.required]]}),this.role="admin",this.cedulafamiliar="0",this.allData=[],this.fechaIng=[],this.Date=(new Date).toISOString().slice(0,0)}return r(t,[{key:"getPostDataConceptos",value:function(){return this.http.get("https://app.ipsfa.gob.ve/ipsfa/api/web/militar/"+this.cedula)}},{key:"register",value:function(){var e=this;this.getPostDataConceptos().subscribe(function(t){if(""!=Object.values(t)[0]){e.allData=t;var r=new Date(e.allData.fingreso).toISOString().substr(0,10).split("-");e.fechaIng="0001"!=r[0]?r[0]+"-"+r[1]+"-"+r[2]:"",e.allData.Componente.abreviatura==e.componente?e.Date==e.fechaIng?(e.userService.register({username:e.username,password:e.password,cedula:e.cedula,role:e.role,cedulafamiliar:e.cedulafamiliar}).subscribe(function(e){}),e.toastr.success("Usuario Guardado","Alerta"),setTimeout("document.location.reload()",1e3)):e.toastr.warning("Fecha Incorrecta","Alerta"):e.toastr.warning("No es componente","Alerta")}else e.toastr.warning("Cedula no Existe","Alerta")})}},{key:"getErrorMessage",value:function(e){var t,r;return this.registroForm.get(e).errors.required?r="campo requerido":this.registroForm.get(e).hasError("pattern")?r="Correo no valido ":this.registroForm.get(e).hasError("minlength")&&(r="debe tener minimo  ".concat(null===(t=this.registroForm.get(e).errors)||void 0===t?void 0:t.minlength.requiredLength," caracteres")),r}},{key:"isValidField",value:function(e){return(this.registroForm.get(e).touched||this.registroForm.get(e).dirty)&&!this.registroForm.get(e).valid}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Y36(c),l.Y36(g.eN),l.Y36(u.qu),l.Y36(d._W))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-registro"]],decls:31,vars:8,consts:[[1,"registro-form","img"],["src","../../../../assets/img/img.png","width","40%"],[3,"formGroup","ngSubmit"],[1,"full-width-input"],["text","text","formControlName","cedula","matInput","","placeholder","Cedula Titular","required","",3,"ngModel","ngModelChange"],["formControlName","componente",3,"ngModel","ngModelChange"],["value","EJ"],["value","AR"],["value","AV"],["value","GN"],[2,"text-align","left"],["type","date","formControlName","Date","id","checkindate",1,"full-width-input",3,"ngModel","min","ngModelChange"],["text","text","formControlName","username","matInput","","placeholder","Correo Electronico","required","",3,"ngModel","ngModelChange"],[1,"full-width-input","separator"],["type","password","formControlName","password","matInput","","placeholder","Password","required","",3,"ngModel","ngModelChange"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"mat-card"),l._UZ(2,"img",1),l.TgZ(3,"mat-card-content"),l.TgZ(4,"h1"),l._uU(5,"Registro IPSFA "),l.qZA(),l.TgZ(6,"form",2),l.NdJ("ngSubmit",function(){return t.register()}),l.TgZ(7,"mat-form-field",3),l.TgZ(8,"input",4),l.NdJ("ngModelChange",function(e){return t.cedula=e}),l.qZA(),l.qZA(),l.TgZ(9,"mat-form-field",3),l.TgZ(10,"mat-label"),l._uU(11,"Seleccionar su Componente "),l.qZA(),l.TgZ(12,"mat-select",5),l.NdJ("ngModelChange",function(e){return t.componente=e}),l.TgZ(13,"mat-option",6),l._uU(14,"Ejercito Bolivariana"),l.qZA(),l.TgZ(15,"mat-option",7),l._uU(16,"Armada Bolivariana"),l.qZA(),l.TgZ(17,"mat-option",8),l._uU(18,"Aviaci\xf2n Nacional"),l.qZA(),l.TgZ(19,"mat-option",9),l._uU(20,"Guardia Nacional"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(21,"div",10),l.TgZ(22,"h5"),l._uU(23," Ingrese la Fecha de Ingreso a la FANB"),l.qZA(),l.TgZ(24,"input",11),l.NdJ("ngModelChange",function(e){return t.Date=e}),l.qZA(),l.qZA(),l.TgZ(25,"mat-form-field",3),l.TgZ(26,"input",12),l.NdJ("ngModelChange",function(e){return t.username=e}),l.qZA(),l.qZA(),l.TgZ(27,"mat-form-field",13),l.TgZ(28,"input",14),l.NdJ("ngModelChange",function(e){return t.password=e}),l.qZA(),l.qZA(),l.TgZ(29,"button",15),l._uU(30,"Crear"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(6),l.Q6J("formGroup",t.registroForm),l.xp6(2),l.Q6J("ngModel",t.cedula),l.xp6(4),l.Q6J("ngModel",t.componente),l.xp6(12),l.Q6J("ngModel",t.Date)("min",t.Date),l.xp6(2),l.Q6J("ngModel",t.username),l.xp6(2),l.Q6J("ngModel",t.password),l.xp6(1),l.Q6J("disabled",t.registroForm.invalid))},directives:[m.a8,m.dn,u._Y,u.JL,u.sg,p.KE,u.Fj,f.Nt,u.JJ,u.u,u.Q7,p.hX,h.gD,Z.ey,v.lW],styles:[".registro-form[_ngcontent-%COMP%]{padding:4rem 1rem}.registro-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2rem auto;text-align:center;height:570px}.registro-form[_ngcontent-%COMP%]   .full-width-input[_ngcontent-%COMP%], .registro-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.registro-form[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{margin-bottom:2rem}.img[_ngcontent-%COMP%]{background-image:url(fondo.96e17a33bfeab43ca760.jpeg);background-repeat:no-repeat}"]}),t}()}],q=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.Bz.forChild(C)],s.Bz]}),t}(),A=o(8429),b=o(2238),M=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[i.ez,q,A.q,b.Is,u.UX]]}),t}()}}])}();