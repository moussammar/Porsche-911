window.addEventListener('load', hide_preloader);
window.addEventListener('load', setTimeout(to_scroll,2500));
function to_scroll(){
    window.scrollTo({
        top:300,
        behavior:'smooth'
    });
}
function hide_preloader(){
    document.getElementById("preloader").style.display="none";
    document.getElementById("header").style.position="fixed"
}
const btn=document.getElementsByClassName("button");
btn.addEventListener('mouseover',scale_up);
btn.addEventListener('mouseout',scale_down);
function scale_up(){
    btn.style.color="white";
}
function scale_down(){
    btn.style.color="black";
}
function send_email(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "codebraver48@codebrave.org",
        Password : "mouSSaC0dE3&",
        To : 'codebraver48@codebrave.org',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

