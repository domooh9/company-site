(this.webpackJsonpsericepro=this.webpackJsonpsericepro||[]).push([[0],[,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var A=s(1),n=s.n(A),i=s(4),r=s.n(i),c=(s(9),s(10),s(2)),o=function(e){var t=document.querySelector(e).offsetTop;document.body.scrollTop=t-10,document.documentElement.scrollTop=t-10},a=function(e,t){switch(t.type){case"IS_ACTIVE":return s=t.event,A=t.elem,document.querySelectorAll(".nav-item").forEach((function(e){e===s.target.parentElement?e.classList.add("active"):e.classList.remove("active")})),o(A),e;case"TO_TOP":return o(t.elem),e;case"DISPLAY_NAV":return function(){var e=document.querySelector(".topnav"),t=document.querySelector(".responsive-btn");e.classList.toggle("responsive"),t.classList.toggle("times"),t.classList.toggle("bars")}(),e;default:return e}var s,A},l=s(0),d=Object(A.createContext)(),u=function(e){var t=Object(A.useReducer)(a,[{link:"#our-services",value:"our services"},{link:"#work",value:"our team"},{link:"#about-us",value:"about us"},{link:"#blog",value:"blog"},{link:"#useful-links",value:"useful links"}]),s=Object(c.a)(t,2),n=s[0],i=s[1];return Object(l.jsx)(d.Provider,{value:{items:n,dispatch:i},children:e.children})},h=function(e){var t=e.item,s=Object(A.useContext)(d).dispatch,n="home"===t.value?"nav-item active":"nav-item";return Object(l.jsx)("li",{className:n,children:Object(l.jsx)("span",{onClick:function(e){return s({type:"IS_ACTIVE",event:e,elem:t.link})},children:t.value})})},b=function(){var e=Object(A.useContext)(d),t=e.items,s=e.dispatch;return Object(l.jsxs)("ul",{className:"menu to-right",children:[t.map((function(e){return Object(l.jsx)(h,{item:e},e.link)})),Object(l.jsx)("li",{className:"navBtn",onClick:function(){return s({type:"DISPLAY_NAV"})},children:Object(l.jsx)("i",{className:"bars icon responsive-btn"})})]})},j=s.p+"static/media/facebook-icon.eb205329.png",g=s.p+"static/media/twitter-icon.f2d3d7e5.png",m=s.p+"static/media/instagram-icon.23c638b4.png",p=s.p+"static/media/whatsapp-icon.f41a4e42.png",f=s.p+"static/media/linkedin-icon.be2a99ff.png",w=s.p+"static/media/snapchat-icon.a577d4ea.png",x=function(){var e=new Date;return Object(l.jsx)("section",{id:"social-media",children:Object(l.jsx)("div",{className:"container text-center",children:Object(l.jsxs)("div",{className:"social-icons",children:[Object(l.jsxs)("ul",{className:"to-left",children:[Object(l.jsxs)("li",{className:"date",children:[Object(l.jsx)("i",{className:"calendar alternate outline icon"})," ",e.toDateString()]}),Object(l.jsxs)("li",{className:"phone-num",children:[Object(l.jsx)("i",{className:"phone icon"})," 0710809487"]})]}),Object(l.jsxs)("ul",{className:"to-right",children:[Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:j,alt:"facebook"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:m,alt:"insta"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:g,alt:"twitter"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:p,alt:"whastapp"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:f,alt:"linkedin"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:w,alt:"snapchat"})})]}),Object(l.jsx)("div",{className:"clear"})]})})})},O=function(){return Object(l.jsxs)("nav",{children:[Object(l.jsx)(x,{}),Object(l.jsxs)("div",{className:"topnav",id:"myTopnav",children:[Object(l.jsx)("div",{className:"logo to-left",children:"floMitech"}),Object(l.jsx)(b,{}),Object(l.jsx)("div",{className:"clear"})]})]})},v=(s(12),function(){return Object(l.jsx)("header",{id:"home",children:Object(l.jsx)("div",{id:"landing-header",children:Object(l.jsxs)("div",{className:"header",id:"typing-animation",children:[Object(l.jsx)("h1",{children:"ELEVATING TECHNOLOGY"}),Object(l.jsx)("h1",{children:"EMPOWERING"}),Object(l.jsx)("h1",{children:"LIVES"}),Object(l.jsx)("p",{className:"typing-animation",children:"Transforming possibilities into reality through innovative technology solutions."}),Object(l.jsx)("a",{href:"#about-us",className:"btn btn-primary",children:"Learn About Us"}),Object(l.jsx)("a",{href:"#our-services",className:"btn btn-secondary",children:"Explore Our Services"})]})})})});s(13);function y(){return Object(l.jsxs)("section",{id:"footer",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"footer-img"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row"}),Object(l.jsxs)("div",{id:"useful-links",className:"footer-infos grid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Our Services"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Software Development"}),Object(l.jsx)("li",{children:"Web Design"}),Object(l.jsx)("li",{children:"Penetration Testing"}),Object(l.jsx)("li",{children:"IT Consultancy"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Information"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"About Us"}),Object(l.jsx)("li",{children:"How We Work"}),Object(l.jsx)("li",{children:"Terms and Conditions"}),Object(l.jsx)("li",{children:"Privacy Policy"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Contact Us"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"FAQs"}),Object(l.jsx)("li",{children:"Customer Support"}),Object(l.jsx)("li",{children:"Contact Information"}),Object(l.jsx)("li",{children:"Support Center"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Contact Us"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"map marker alternate icon"}),"KISUMU KE"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"mail icon"}),"domooh9@.com"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"phone volume icon"})," +254710809487"]})]})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{className:"copyright",id:"copy",children:"FLOMITECH INNOVATIONS LIMITED | \xa9 2023-2024 All\xa0Right Reserved."})]})]})}var B=function(){Object(A.useContext)(d).dispatch;return Object(l.jsx)("footer",{children:Object(l.jsx)(y,{})})},D=Object(A.createContext)(),C=function(e){var t=Object(A.useState)([]),s=Object(c.a)(t,2),n=s[0],i=s[1];return Object(l.jsx)(D.Provider,{value:{services:n,setServices:i},children:e.children})},M=(s(14),s(15),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{id:"about-us",className:"about grid",children:[Object(l.jsx)("img",{src:"https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",alt:"About us"}),Object(l.jsxs)("div",{className:"about-div",children:[Object(l.jsxs)("h2",{children:["Get to know about",Object(l.jsx)("span",{children:" our company"})]}),Object(l.jsx)("p",{children:"Discover Flomitech Innovations Limited, based in the vibrant city of Kisumu. We are a forward-thinking and innovative company committed to pushing the boundaries of technology and creating solutions that make a difference. With a strong focus on excellence, our dedicated team of experts thrives on turning ideas into reality. We take pride in our commitment to harnessing technology for positive change, empowering businesses and communities alike. Join us on a journey of innovation, where every challenge is an opportunity, and where the future is shaped by our passion for technology and progress. Visit us in Kisumu to experience firsthand the spirit of Flomitech Innovations Limited, where innovation knows no bounds"}),Object(l.jsx)("button",{className:"button",children:"Contact"})]})]}),Object(l.jsxs)("section",{className:"about-section",children:[Object(l.jsxs)("div",{className:"about-title",children:[Object(l.jsxs)("h1",{children:["What they say ",Object(l.jsx)("span",{children:" about us"})]}),Object(l.jsx)("p",{children:"Discover what our valued clients have to say about their experiences with us."})]}),Object(l.jsxs)("div",{className:"about-us grid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:"https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",alt:"Client 1"}),Object(l.jsx)("h3",{children:"Michael Auko"}),Object(l.jsx)("span",{children:"CEO, Tech Innovations"}),Object(l.jsx)("p",{children:'"Flomitech Innovations has been an invaluable partner in our journey. Their innovative solutions and exceptional service have propelled our business to new heights."'})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:"https://images.unsplash.com/photo-1517499610481-9bc77847c8b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:"Client 2"}),Object(l.jsx)("h3",{children:"Catherine Okumu"}),Object(l.jsx)("span",{children:"Founder, Digital Ventures"}),Object(l.jsx)("p",{children:'"Flomitech Innovations not only delivers exceptional solutions but also understands the unique needs of our business. Their commitment to excellence is truly commendable."'})]})]})]})]})}),L=(s(16),function(){return Object(l.jsxs)("section",{id:"features",className:"features grid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"lightbulb outline big icon"}),Object(l.jsx)("h5",{children:"Innovative Solutions"}),Object(l.jsx)("p",{children:"We provide innovative solutions tailored to your needs."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"users big icon"}),Object(l.jsx)("h5",{children:"Customer-Centric"}),Object(l.jsx)("p",{children:"Our focus is on delivering exceptional customer experiences."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"shield alternate big icon"}),Object(l.jsx)("h5",{children:"Data Security"}),Object(l.jsx)("p",{children:"Your data is safeguarded with our top-notch security measures."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"handshake outline big icon"}),Object(l.jsx)("h5",{children:"Trusted Partnerships"}),Object(l.jsx)("p",{children:"We build long-lasting partnerships based on trust and reliability."})]})]})}),Y=function(e){var t=e.service,s=Object(A.useState)(!1),n=Object(c.a)(s,2),i=n[0],r=n[1];return Object(l.jsxs)("figure",{className:"service",children:[Object(l.jsx)("img",{src:t.image,alt:"service"}),Object(l.jsxs)("div",{className:"service-info",children:[Object(l.jsx)("h4",{children:t.title}),Object(l.jsx)("p",{children:i?t.desc:"".concat(t.desc.slice(0,100),"...")}),Object(l.jsx)("button",{className:"button",onClick:function(){return r(!i)},children:i?"Read Less":"Read More"})]})]})},N=[{id:1,title:"Computers and accesories",image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=635&q=80",desc:"Get quality computers and accessories at low prices. Make your digital life better!"},{id:2,title:"Software Development",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29md2FyZSUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",desc:"Unlock the potential of your visionary ideas with our comprehensive Software Development Service. From inception to implementation, we are dedicated to crafting custom software solutions that perfectly align with your unique needs and objectives. Our team of seasoned experts collaborates closely with you throughout the entire process, ensuring a deep understanding of your vision, goals, and business processes. We take pride in delivering excellence at every step, meticulously designing, implementing, and testing your software to ensure it operates seamlessly, efficiently, and securely. We understand that one-size-fits-all solutions won't suffice, which is why we tailor our offerings to address your specific challenges and opportunities. With our Software Development Service, innovation knows no bounds, and your dreams become reality through cutting-edge technology and a shared passion for bringing ideas to life in the digital realm. Your vision, our expertise\u2014let's create something truly extraordinary together."},{id:3,title:"Internet Connection",image:"https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVybmV0JTIwY29ubmVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",desc:"Experience uninterrupted connectivity and elevate your online activities with our high-speed internet service. We take pride in offering fast and reliable internet solutions, providing you with the freedom to connect, stream your favorite content, engage in remote work, and enjoy seamless online experiences. With our commitment to uninterrupted browsing, you can confidently stay connected and explore the digital world without any interruptions or slowdowns. Say goodbye to buffering and hello to a smoother online journey with our high-speed internet connection."},{id:4,title:"Hardware diagnosis",image:"https://images.unsplash.com/photo-1586126530777-eefae13ebe34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwaGFyZHdhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",desc:"Is your hardware causing you headaches? Look no further! We're here to tackle your hardware challenges with precision and expertise. Our dedicated team goes the extra mile to diagnose and fix issues swiftly, ensuring minimal downtime. Count on us for dependable, hassle-free solutions that keep your technology running smoothly, so you can stay focused on what matters most. Say goodbye to hardware woes and experience the peace of mind that comes with our top-notch support. Your devices are in trusted hands with us."},{id:5,title:"Cyber security and Penetraion testing",image:"https://plus.unsplash.com/premium_photo-1676618539987-12b7c8a8ae61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",desc:"At the heart of our mission is the commitment to safeguarding your digital world. Our team of cybersecurity experts specializes in offering comprehensive Penetration Testing Services, dedicated to identifying vulnerabilities and fortifying your digital defenses. We understand the critical importance of protecting your data and your business from potential threats in the ever-evolving digital landscape. With our meticulous testing methodologies and cutting-edge tools, we work tirelessly to uncover weaknesses and provide actionable insights to enhance your cybersecurity posture. Rest assured that your online safety is our top priority. With our services, you can confidently protect your business and stay secure in the digital realm, ensuring that your valuable data remains safeguarded from potential risks."},{id:6,title:"IT consultancy",image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGl0JTIwY29uc3VsdGFuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",desc:"Embrace the benefits of strategic IT consulting and set the course for your business's success! Our team of seasoned experts is dedicated to delivering tailored solutions designed to optimize your technology infrastructure, streamline operations, and ultimately help you achieve your business objectives. We understand that every organization has unique challenges and goals, which is why we work closely with you to identify your specific needs and create a customized IT strategy that aligns perfectly with your vision. With our guidance, you'll unlock the full potential of IT, harnessing its power to drive efficiency, productivity, and growth. Partner with us and embark on a journey to elevate your business through strategic IT consulting tailored to your success."}],V=(s(17),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"our-services",className:"main-title",children:[Object(l.jsxs)("h1",{children:["Our ",Object(l.jsx)("span",{children:"Services"})]}),Object(l.jsxs)("i",{children:["At Flomitech innovations limited, we're dedicated to harnessing technology for innovation and excellence. Our team adapts to emerging trends,"," ",Object(l.jsx)("p",{children:"delivering elegant and user-friendly solutions. We prioritize your success, serving as your trusted partners in the dynamic digital landscape."})," ","Join us to unlock your full potential and shape the future of technology."]})]}),Object(l.jsx)("section",{className:"services grid",children:N.map((function(e){return Object(l.jsx)(Y,{service:e},e.id)}))})]})})}),W=(s(18),function(){return Object(l.jsxs)("section",{id:"work",className:"work grid",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:["Fueling Your ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Startup Aspirations"})]}),Object(l.jsx)("p",{children:"At the heart of our startup journey lies an abundance of innovative ideas and a passionate team eager to turn them into reality. Our vision knows no bounds, we are on a mission to bring countless projects to life and achieve endless dreams."}),Object(l.jsx)("button",{className:"button",children:"Learn More"})]}),Object(l.jsx)("ul",{id:"nbrs",className:"grid",children:[{item:"Innovative Ideas",value:"Unlimited"},{item:"Passionate Team",value:"Dedicated"},{item:"Projects on the Horizon",value:"Countless"},{item:"Dreams to Achieve",value:"Endless"}].map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"nbr",children:e.value}),Object(l.jsx)("p",{children:e.item})]},e.item)}))})]})}),q=function(){var e=!1,t=function e(t,s,A){t<=s&&(A.innerHTML=t,setTimeout((function(){e(t+1,s,A)}),2))},s=function(){document.querySelectorAll(".nbr").forEach((function(e){return function(e){var s=Number(e.innerHTML);t(0,s,e)}(e)})),e=!0};return window.onscroll=function(){!function(){var e=document.getElementById("myTopnav");document.body.scrollTop>36||document.documentElement.scrollTop>36?e.classList.add("sticky"):e.classList.remove("sticky")}();var t=document.getElementById("nbrs");window.scrollY+window.innerHeight>=t.offsetTop&&!e&&s()},Object(l.jsx)(C,{children:Object(l.jsxs)("main",{className:"main-content",children:[Object(l.jsx)(V,{}),Object(l.jsx)(W,{}),Object(l.jsx)(M,{}),Object(l.jsx)(L,{})]})})},I=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(u,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(v,{}),Object(l.jsx)(q,{}),Object(l.jsx)(B,{})]})})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,A=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),A(e),n(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),T()}],[[19,1,2]]]);
//# sourceMappingURL=main.7ee7b919.chunk.js.map