async function getData(){
    let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
    let res= await fetch(url);
    let data=await res.json();
    return data[0].vouchers;

}


async function append(){
    let data=await getData();
    // console.log(data) 
    var container=document.getElementById("mains");
    data.forEach(function (ele){

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
        buy.addEventListener("click",function(){
            addcard(ele);
        })
        card.append(img,name,price,buy);
        // console.log(card);
        container.append(card);
    })
}
append()
function addcard(ele){
    let mymoney=document.getElementById("wallet_balance").innerText;
    var addlist=JSON.parse(localStorage.getItem("purchase"))||[];
    var obj={};
    obj.image=ele.image;
    obj.name=ele.name;
    obj.price=ele.price;
    addlist.push(obj);
    localStorage.setItem("purchase",JSON.stringify(addlist));
    var vprice=ele.price;
   
    
    if(mymoney>=vprice){

        // mymoney.innerText=innerText-ele.price;
        // console.log(mymoney);
        walletmoney();
        alert("Hurray! purchase successful");
    }
    else{
        alert("Sorry! insufficient balance");
    }
    
}
function walletmoney(){
    let money=document.getElementById("wallet_balance");
    let waldata=JSON.parse(localStorage.getItem("user"))||[];
    document.getElementById("wallet_balance");
    money.innerText=waldata.wallet;
    
}
walletmoney();