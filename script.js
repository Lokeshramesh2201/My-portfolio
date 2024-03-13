
// icon
let menuIcon=document.getElementById('menu-icon')
let navbar= document.querySelector('.navbar')
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll reveal
ScrollReveal({
    reset :true,
    distance:'80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'})
ScrollReveal().reveal('.service-container,.portfoliobox,.contact form,.mainimg ,.about-img,.about-content' ,{origin:'bottom'})
// ScrollReveal().reveal('.navbar',{origin:'top'})
// ScrollReveal().reveal('.logo',{origin:'bottom'})
// 
// let 

// emailjs.send("service_m1bf4en","template_41ljmep",{
//     from_name: "duxhg",
//     fullName: "sdd",
//     emailAddress: "lokeshramesh",
//     phoneNumber: "567890p",
//     emailSubject: "absjsdz",
//     yourMessage: "asmdhsdkljas",
//     reply_to: "rtyui",
//     });    
    // EMAIL JS

let btn = document.getElementById("button");
btn.addEventListener("click",()=>{
    emailjs.send("service_m1bf4en", "template_41ljmep", {
        fullName: document.getElementById("fullName").value,
        emailAddress: document.getElementById("emailAddress").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        message: document.getElementById("message").value,
    }).then(()=>{
        alert("your message sent successfully. we will contact you shortly.")
     })
})