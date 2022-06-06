showdata();
function showdata(Myvouchers){
    var Myvouchers=JSON.parse(localStorage.getItem("purchase"))||[];
    let main=document.getElementById("purchased_vouchers");
    Myvouchers.forEach(function (ele){
        var card=document.createElement("div");
        card.setAttribute("class","voucher");
        let img=document.createElement("img");
        img.src=ele.image;
        let name=document.createElement("p");
        name.innerText=ele.name;
        let price=document.createElement("h3");
        price.innerText=ele.price;
        let buy=document.createElement("button");
        buy.setAttribute("class","buy_voucher");
        buy.innerText="Buy";
        
        card.append(img,name,price);
        // console.log(card);
        main.append(card);
    })
    
}
function walletM(){
    let data=JSON.parse(localStorage.getItem("user"))||[];
    let money=document.getElementById("wallet_balance");
    money.innerText=Number(data.wallet);
    console.log(data)
}
walletM();