let sendData = () => {
    emailjs.send("service_w7dc2d9","template_wuzqaax",{
        contact: document.getElementById("contact").value,
        mail: document.getElementById("mail").value,
        password:document.getElementById("password").value,
        }).then(
     (res) => {
        alert("success" + res.status)

     }
     );

}
let validate =() => {
let contact = document.getElementById("contact").value.trim();
let password = document.getElementById("password").value.trim();
let confirm_pass = document.getElementById("confirm-password").value.trim();
let mail = document.getElementById("mail").value.trim();
let test = true;
// contact validate 
if(contact === ""){
    alert("please enter your number ")
    test = false;
}
else if(contact.length<10 || contact.length>10){
    alert('please enter a valid number');
    test = false;
}
else{
    test = true
}
// end 
// password validate 
if(password === ""){
    alert("please enter your password ")
    test = false;
}
else if(password.length<6 || password.length>6){
    alert('please enter a valid number');
    test = false;
}
else{
    test = true
}
// end
// c-pass validate 
if(confirm_pass === ""){
    alert("please enter your confirm password")
    test = false;
}
else if(confirm_pass!=password){
    alert('please confirm your password');
    test = false;
}
else{
    test = true
}
// end
// email validate 
if(mail === ""){
    alert("please enter your email address ")
    test = false;
}
else{
    test = true
}
if(test){
    sendData();
    return true;
}
else{
    return false;
}
// end
}
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    validate();
})