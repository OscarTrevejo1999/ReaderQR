(this.webpackJsonparamark=this.webpackJsonparamark||[]).push([[0],{138:function(e,t,n){},174:function(e,t,n){},201:function(e,t){},203:function(e,t){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),s=n.n(r),l=(n(174),n(234)),c=(n(175),n(138),n(233)),i=n(75),d=n(41),j=n(231),m=n(21),b=Object(m.b)({key:"menu",default:""}),u=Object(m.b)({key:"menuSoapCall",default:{}}),p=(Object(m.b)({key:"idPlato",default:""}),Object(m.b)({key:"token",default:0})),O=Object(m.b)({key:"user",default:""}),x=n.p+"static/media/Aramark_logo.bf37d627.png",h=n(6),g=c.a.Title,f=function(){var e=Object(m.d)(O),t=e.split("|");return Object(h.jsxs)(i.a,{gutter:8,justify:"space-around",align:"middle",children:[Object(h.jsx)(d.a,{span:4,style:{display:"inherit"},children:Object(h.jsx)(j.a,{preview:!1,width:"12em",src:x,alt:"Logo"})}),Object(h.jsx)(d.a,{span:10,children:Object(h.jsx)(g,{style:{color:"white"},level:2,children:""!==e?t[1]:""})}),Object(h.jsx)(d.a,{span:10,children:Object(h.jsx)(g,{style:{color:"white"},level:2,children:""!==e?"0"===t[2]?"Position: Dietista":" Position: "+t[2]:""})})]})},v=n(14),y=n(84),P=n(32),C=n(19),S=n(235),w=n(236),N=n(169),M=n(237),k=n(232),T=n(230),A=n(26),I=n(45),L=n(57),E=n(46),D=n(48),B=n(166),R=n(159),z=n.n(R),F=n(186).parseString,H=function(){var e=Object(m.c)(O),t=Object(v.a)(e,2),n=t[0],o=t[1],r=Object(m.e)(b),s=Object(m.c)(u),l=Object(v.a)(s,2),c=l[0],i=l[1],d=n.split("|"),j=n.split("|"),x=Object(m.d)(p),g=function(e){Object(E.a)(a,e);var t=Object(D.a)(a);function a(e){var s;return Object(A.a)(this,a),(s=t.call(this,e)).errorUser=function(){B.b.error({content:"Debes logearte como usuario antes de poder leer un men\xfa",style:{fontSize:"3em"}})},s.errorScan=function(){B.b.error({content:"Ha habido un problema a la hora de escanear el QR",style:{fontSize:"3em"}})},s.setUserInformation=function(e){o(e),r(""),i(""),function(e,t,n){var a=new XMLHttpRequest;a.open("POST",n,!0);var o='<?xml version="1.0" encoding="utf-8"?>\n    <soap:Envelope \n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xmlns:api='.concat(n,'\n        xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n        <soap:Body>\n            <Login xmlns=').concat(n,">\n                <User>").concat(e,"</User>\n                <Pass>").concat(t,"</Pass>\n            </Login>\n        </soap:Body>\n    </soap:Envelope>");a.onreadystatechange=function(){4===a.readyState&&200===a.status&&alert(a.responseText)},a.setRequestHeader("Content-Type","text/xml"),a.send(o)}(d[3],d[4],"http://namespace.aramark.es/")},s.setMenuInformation=function(e){r(e),function(e,t,n){var a=new XMLHttpRequest;a.open("POST",n,!0);var o='<?xml version="1.0" encoding="utf-8"?>\n    <soap:Envelope \n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xmlns:api='.concat(n,'\n        xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n        <soap:Body>\n            <GetMenuPorCama xmlns=').concat(n,">\n                <Control>").concat(e,"</Control>\n                <IDCama>").concat(t,"</IDCama>\n            </GetMenuPorCama>\n        </soap:Body>\n    </soap:Envelope>");a.onreadystatechange=function(){4===a.readyState&&200===a.status&&alert(a.responseText)},a.setRequestHeader("Content-Type","text/xml"),a.send(o)}(j[0],x,"http://namespace.aramark.es/");var t=(new DOMParser).parseFromString('<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n<soap:Body>\n<MenuPorCama>\n<idIngesta>3</idIngesta>\n<NombreIngesta>Comida</NombreIngesta>\n<idDieta>6</idDieta>\n<NombreDieta>Basal</NombreDieta>\n<TomaSal>true</TomaSal>\n<Observaciones>\n<Observacion>El paciente no quiere lechuga</Observacion>\n<Observacion>No cerdo</Observacion>\n</Observaciones>\n<Alergias>\n<Alergia>El paciente tiene intolerancia a la piel del melocot\xf3n</Alergia>\n<Alergia>Gluten</Alergia>\n</Alergias>\n<Platos>\n<Plato>\n<idPlato>527887</idPlato>\n<NombrePlato>CHOCOLATE A LA TAZA CON LECHE</NombrePlato>\n</Plato>\n<Plato>\n<idPlato>528019</idPlato>\n<NombrePlato>CHURROS LAZO</NombrePlato>\n</Plato>\n<Plato>\n<idPlato>528029</idPlato>\n<NombrePlato>ARROZ CON POLLO</NombrePlato>\n</Plato>\n<Plato>\n<Plato xsi:nil="true"/>\n</Platos>\n</MenuPorCama>\n</soap:Body>\n</soap:Envelope>',"text/xml"),n=(new XMLSerializer).serializeToString(t.getElementsByTagName("MenuPorCama")[0]);F(n,(function(e,t){i(t)}))},s.handleScan=function(e){null!==e&&(5===e.split("|").length?s.setUserInformation(e):""===n?s.errorUser():s.setMenuInformation(e))},s.handleError=function(e){console.error(e),s.errorScan()},s.handleScan=s.handleScan.bind(Object(L.a)(s)),s}return Object(I.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(z.a,{onError:this.handleError,onScan:this.handleScan,style:0===Object.keys(c).length?{height:"30em",width:"30em",display:"flex",justifyContent:"center"}:{height:"10em",width:"10em"}})})}}]),a}(a.Component);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g,{})})},X=n(229),U=c.a.Title,q=function(e){var t=e.title,n=e.iconComponent,o=e.children,r=e.hideable,s=void 0!==r&&r,l=e.plato,c=void 0!==l&&l,j=Object(a.useState)(!0),m=Object(v.a)(j,2),b=m[0],u=m[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(U,{onClick:function(){u(!b)},level:3,className:"title",style:{cursor:"pointer",color:s&&b?"#e0e0e0":"#999",fontStyle:s&&b?"italic":"normal",textTransform:"capitalize"},children:[Object(h.jsxs)("div",{style:{display:"flex",alignItems:"flex-end"},children:[Object(h.jsx)(d.a,{style:{display:"flex",margin:"0em 0.5em 0.2em"},children:Object(h.jsx)(n,{})}),t]}),Object(h.jsx)(X.a,{style:{marginTop:"0em"}})]}),s&&b?Object(h.jsx)(h.Fragment,{}):Object(h.jsx)(i.a,{style:{placeContent:c?"center":"flex-end",display:"block",textAlignLast:c?"center":"start"},children:o})]})},G=c.a.Title,Z=function(e){var t,n,a=Object(m.d)(b).split("|")[0];return Object(h.jsx)("div",{className:"Padding",style:{marginBottom:"2em"},children:Object(h.jsxs)(i.a,{gutter:16,children:[Object(h.jsx)(d.a,{span:21,children:Object(h.jsx)(q,{plato:!0,title:"Plato",iconComponent:S.a,children:Object(h.jsx)("div",{children:void 0!==e.data.Plato?e.data.Plato.map((function(e){return Object(h.jsx)(G,{level:1,style:{fontSize:"3em",color:"black"},children:e},e)})):Object(h.jsx)(G,{level:1,style:{fontSize:"3em",color:"red"},children:"No se ha encontrado ningun plato con el ID proporcionado"})})})}),Object(h.jsx)(d.a,{span:3,style:{paddingTop:"5em"},children:Object(h.jsx)(H,{})}),Object(h.jsx)(d.a,{span:12,children:Object(h.jsx)(q,{title:"Alergias",iconComponent:w.a,children:Object(h.jsx)(k.b,{style:{fontSize:"2em",textAlignLast:"start",textAlign:"start"},size:"large",bordered:!0,dataSource:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Alergias,renderItem:function(e){return Object(h.jsx)(k.b.Item,{children:e})}})})}),Object(h.jsx)(d.a,{span:12,children:Object(h.jsx)(q,{title:"Observaciones",iconComponent:N.a,children:Object(h.jsx)(k.b,{style:{fontSize:"2em",textAlignLast:"start",textAlign:"start"},size:"large",bordered:!0,dataSource:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.Observaciones,renderItem:function(e){return Object(h.jsx)(k.b.Item,{children:e})}})})}),Object(h.jsx)(d.a,{span:24,style:{marginTop:"1em"},children:Object(h.jsx)(q,{plato:!0,title:"Extra",iconComponent:M.a,children:Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)(d.a,{span:6,children:Object(h.jsx)(T.a,{title:"Nombre Ingesta",className:"Card",children:e.data.NombreIngesta})}),Object(h.jsx)(d.a,{span:6,children:Object(h.jsx)(T.a,{title:"Nombre Dieta",className:"Card",children:e.data.NombreDieta})}),Object(h.jsx)(d.a,{span:6,children:Object(h.jsx)(T.a,{title:"Sal",className:"Card",children:!0===e.data.TomaSal?"Si":"No"})}),Object(h.jsx)(d.a,{span:6,children:Object(h.jsx)(T.a,{title:"Cama",className:"Card",children:a})})]})})})]})})},J=function(e){return e.Plato.reduce((function(e,t){return"idPlato"in t?Object(C.a)(Object(C.a)({},e),{},Object(P.a)({},t.idPlato,t.NombrePlato[0])):e}),{})},Q=function(){var e=Object(a.useState)({}),t=Object(v.a)(e,2),n=t[0],o=t[1],r=Object(m.d)(u),s=Object(m.d)(b),l=Object(m.d)(O),c=s.split("|"),i=l.split("|"),d=Number(i[2]),j=c[2+d],p=function(){if(0!==Object.keys(r).length){var e=0===d?r.MenuPorCama.Platos[0].Plato.reduce((function(e,t){return"idPlato"in t?[].concat(Object(y.a)(e),[t.NombrePlato[0]]):e}),[]):[J(r.MenuPorCama.Platos[0])[j]],t={NombreDieta:r.MenuPorCama.NombreDieta[0],idIngesta:r.MenuPorCama.idIngesta[0],idDieta:r.MenuPorCama.idDieta[0],TomaSal:r.MenuPorCama.TomaSal[0],NombreIngesta:r.MenuPorCama.NombreIngesta[0],Observaciones:(a=r.MenuPorCama.Observaciones[0],a.Observacion.map((function(e){return e}))),Alergias:(n=r.MenuPorCama.Alergias[0],n.Alergia.map((function(e){return e}))),Plato:e};o(t)}var n,a};return Object(a.useEffect)((function(){p()}),[r]),Object(h.jsx)(h.Fragment,{children:0!==Object.keys(r).length&&Object(h.jsx)(Z,{position:d,data:n})})},_=c.a.Title,K=function(){var e=Object(m.d)(O),t=Object(m.d)(u);return Object(h.jsxs)(i.a,{gutter:8,justify:"space-around",align:"middle",children:[""===e&&Object(h.jsx)(d.a,{span:20,style:{display:"flex",placeContent:"center",marginBottom:"1em",backgroundColor:"#d9d9d9",borderRadius:"2em"},children:Object(h.jsx)(_,{level:1,style:{margin:"0px",padding:"0.2em",paddingRight:"1em"},children:"Escanea tu usuario"})}),""!==e&&0===Object.keys(t).length&&Object(h.jsx)(d.a,{span:20,style:{display:"flex",placeContent:"center",marginBottom:"1em",backgroundColor:"#d9d9d9",borderRadius:"2em"},children:Object(h.jsx)(_,{level:1,style:{margin:"0px",padding:"0.2em",paddingRight:"1em"},children:"Escanea el men\xfa"})}),0===Object.keys(t).length&&Object(h.jsx)(H,{})]})},V=l.a.Header,W=l.a.Content;var Y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(l.a,{className:"layout",children:[Object(h.jsx)(V,{style:{display:"grid",backgroundColor:"#ee3a43"},children:Object(h.jsx)(f,{})}),Object(h.jsx)(W,{style:{backgroundColor:"#f5f5f5"},children:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{style:{marginTop:"2em"},children:[Object(h.jsx)(Q,{}),Object(h.jsx)(K,{})]})})})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(m.a,{children:Object(h.jsx)(Y,{})})}),document.getElementById("root")),$()}},[[224,1,2]]]);
//# sourceMappingURL=main.3c5497d1.chunk.js.map