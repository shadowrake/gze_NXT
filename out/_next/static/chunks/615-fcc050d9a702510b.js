"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{63338:function(e,r,t){t.d(r,{Cz:function(){return sendEmail},xP:function(){return sendEmailS},Sw:function(){return verifyCaptcha}});var n=t(29222),a=t(81320),s=t(74578);let i=s.z.object({gamerTag:s.z.string().nonempty("Please enter your gamer tag here"),email:s.z.string().email("Please enter a valid email"),input:s.z.array(s.z.object({name:s.z.string().nonempty("Please enter your awnser here"),id:s.z.string().nonempty("Please enter your awnser here"),dummy:s.z.string().nonempty("Please enter your awnser here")})),title:s.z.string().nonempty("Please enter your awnser here")});var o=t(87860),l=t(57437),contact_form_email=e=>{let{email:r,gamerTag:t,input:n}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{}),(0,l.jsxs)("p",{children:["Email: ",r," ",(0,l.jsx)("br",{}),"Discord: ",t," ",(0,l.jsx)("br",{}),n.map((e,r)=>(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:[e.name,": ",e.dummy]})},e.id))]})]})},contact_form_emailS=e=>{let{email:r,gamerTag:t,role:n,joinTeam:a,qualities:s,teamManager:i,anythingElse:o,name:c,surname:m,age:d}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{}),(0,l.jsxs)("p",{children:["Fornavn: ",c," ",m," ",(0,l.jsx)("br",{}),"Age: ",d," ",(0,l.jsx)("br",{}),"Email: ",r," ",(0,l.jsx)("br",{}),"Discord: ",t," ",(0,l.jsx)("br",{}),"Role: ",n," ",(0,l.jsx)("br",{}),"If team manager, what game? else, let it be blank: ",i," ",(0,l.jsx)("br",{}),"Why would you like to join our team?: ",(0,l.jsx)("br",{})," ",a," ",(0,l.jsx)("br",{}),"What qualities can you bring to the team?: ",(0,l.jsx)("br",{})," ",s," ",(0,l.jsx)("br",{}),"Anything else?: ",(0,l.jsx)("br",{})," ",o," ",(0,l.jsx)("br",{})]})]})},c=t(62601);let m=new a.R(c.env.RESEND_API_KEY);async function sendEmail(e){let r=i.safeParse(e);if(r.success){let{input:e,email:t,gamerTag:n,title:a}=r.data;console.log(a);try{let r=await m.emails.send({from:"Greenzone Esports Recruitment <recruitment@greenzoneesports.com>",to:["recruitment@greenzoneesports.com"],subject:"New ".concat(a," recruitment application"),text:"Input: ".concat(e,"\nEmail: ").concat(t,"\nGamer tag: ").concat(n),react:contact_form_email({input:e,email:t,gamerTag:n})});return{success:!0,data:r}}catch(e){return{success:!1,error:e}}}if(r.error)return{success:!1,error:r.error.format()}}async function sendEmailS(e){let r=o.T.safeParse(e);if(r.success){let{name:e,surname:t,age:n,email:a,gamerTag:s,role:i,joinTeam:o,qualities:l,teamManager:c,anythingElse:d}=r.data;try{let r=await m.emails.send({from:"Greenzone Esports Recruitment <recruitment@greenzoneesports.com>",to:["recruitment@greenzoneesports.com"],subject:"New ".concat(i," ").concat(c," application"),text:"Name: ".concat(e,"\n Surname: ").concat(t,"\n age: ").concat(n,"\nEmail: ").concat(a,"\nGamer tag: ").concat(s,"\nRole: ").concat(i,"\nJoin team: ").concat(o,"\nQualities: ").concat(l,"\nTeam manager: ").concat(c,"\nAnything else: ").concat(d),react:contact_form_emailS({name:e,surname:t,age:n,email:a,gamerTag:s,role:i,joinTeam:o,qualities:l,teamManager:c,anythingElse:d})});return{success:!0,data:r}}catch(e){return{success:!1,error:e}}}if(r.error)return{success:!1,error:r.error.format()}}async function verifyCaptcha(e){let r=await n.Z.post("https://www.google.com/recaptcha/api/siteverify?secret=".concat(c.env.RECAPTCHA_SECRET,"&response=").concat(e));if(r.data.success)return"success!";throw Error("Failed Captcha")}},14883:function(e,r,t){t.r(r),t.d(r,{FadeIn:function(){return FadeIn},FadeInStagger:function(){return FadeInStagger}});var n=t(57437),a=t(2265),s=t(89100),i=t(23290);let o=(0,a.createContext)(!1),l={once:!0,margin:"0px 0px -200px"};function FadeIn(e){let r=(0,s.J)(),t=(0,a.useContext)(o);return(0,n.jsx)(i.E.div,{variants:{hidden:{opacity:0,y:r?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...t?{}:{initial:"hidden",whileInView:"visible",viewport:l},...e})}function FadeInStagger(e){let{faster:r=!1,...t}=e;return(0,n.jsx)(o.Provider,{value:!0,children:(0,n.jsx)(i.E.div,{initial:"hidden",whileInView:"visible",viewport:l,transition:{staggerChildren:r?.12:.2},...t})})}},93872:function(e,r,t){t.r(r),t.d(r,{default:function(){return NavBar}});var n=t(57437);t(2265);var a=t(3482),s=t(96689),i=t(19874);function NavBar(){return(0,n.jsx)(a.p,{as:"nav",className:"bg-white shadow sticky top-0 z-40",children:e=>{let{open:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ",children:(0,n.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"-ml-2 mr-2 flex items-center md:hidden",children:(0,n.jsxs)(a.p.Button,{className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,n.jsx)("span",{className:"absolute -inset-0.5"}),(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),r?(0,n.jsx)(s.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,n.jsx)(i.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,n.jsxs)("div",{className:"flex flex-shrink-0 items-center text-black text-lg font-bold ",children:[(0,n.jsx)("img",{className:"h-8 w-auto",src:"https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/8f82cc2d-9c49-45e4-4106-8b24a8e47b00/public",alt:"Greenzone Esports logo"}),"GZ Esports"]}),(0,n.jsxs)("div",{className:"hidden md:ml-6 md:flex md:space-x-8",children:[(0,n.jsx)("a",{href:"/",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-green-300 hover:text-gray-700",children:"Home"}),(0,n.jsx)("a",{href:"/games",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-green-300 hover:text-gray-700",children:"Games"}),(0,n.jsx)("a",{href:"/about",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-green-300 hover:text-gray-700",children:"About us"}),(0,n.jsx)("a",{href:"/news",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-green-300 hover:text-gray-700",children:"News"}),(0,n.jsx)("a",{href:"/events",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-green-300 hover:text-gray-700",children:"Events"}),(0,n.jsx)("a",{href:"/media",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-green-300 hover:text-gray-700",children:"Media"})]})]}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)("a",{href:"/recruitment",children:(0,n.jsx)("button",{type:"button",className:"relative inline-flex items-center gap-x-1.5 rounded-md bg-greenzone px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Apply"})})})})]})}),(0,n.jsx)(a.p.Panel,{className:"md:hidden",children:(0,n.jsxs)("div",{className:"space-y-1 pb-3 pt-2",children:[(0,n.jsx)(a.p.Button,{as:"a",href:"/",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-green-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6",children:"Home"}),(0,n.jsx)(a.p.Button,{as:"a",href:"/games",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-green-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6",children:"Games"}),(0,n.jsx)(a.p.Button,{as:"a",href:"/about",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-green-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6",children:"About us"}),(0,n.jsx)(a.p.Button,{as:"a",href:"/news",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-green-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6",children:"News"}),(0,n.jsx)(a.p.Button,{as:"a",href:"/events",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-green-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6",children:"Events"}),(0,n.jsx)(a.p.Button,{as:"a",href:"/media",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-green-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6",children:"Media"})]})})]})}})}},87860:function(e,r,t){t.d(r,{T:function(){return a}});var n=t(74578);let a=n.z.object({name:n.z.string().nonempty("Please enter your First name").min(2,"Please enter a valid First name"),surname:n.z.string().nonempty("Please enter your Last name").min(2,"Please enter a valid Last name"),age:n.z.string().nonempty("Please enter your age").max(2,"Please enter a valid age"),gamerTag:n.z.string(),email:n.z.string().email("Please enter a valid email"),role:n.z.string().nonempty("Please enter your role"),joinTeam:n.z.string().nonempty("Please enter your reason for wanting to join the team").min(10,"Please enter a valid reason for wanting to join the team"),qualities:n.z.string().nonempty("Please enter your qualities").min(10,"Please enter valid qualities"),teamManager:n.z.string(),anythingElse:n.z.string()})}}]);