var data=JSON.parse(localStorage.getItem("user"))||[];
function Userdata(n,e,add,wall){
    this.name=n;
    this.email=e;
    this.address=add;
    this.wallet=wall;
}
function submit(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let address=document.getElementById("address").value;
let amount=document.getElementById("amount").value;
let userD=new Userdata(name,email,address,amount);
localStorage.setItem("user",JSON.stringify(userD))
window.location.reload();

}
