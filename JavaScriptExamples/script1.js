var mails =[
    {ID : 1 , Gonderen:"Sefa" ,   GondermeTarihi : "10.08.2022" , Baslik : "Baslik 1" , Konu : "Konu 1" },
    {ID : 2 , Gonderen:"Samet" ,  GondermeTarihi : "11.08.2022" , Baslik : "Baslik 2" , Konu : "Konu 2" },
    {ID : 4 , Gonderen:"Merve" ,  GondermeTarihi : "05.08.2022" , Baslik : "Baslik 4" , Konu : "Konu 4"},
    {  ID : 3 , Gonderen:"Rumeysa", GondermeTarihi : "09.08.2022" , Baslik : "Baslik 3" , Konu : "Konu 3"}
    ]

var table = document.querySelector("#table");
var kisi = document.querySelector("#kisi");
var baslik = document.querySelector("#baslik");
var konu = document.querySelector("#konu");
var tabl2 = document.querySelector("#tabl2");

mails.forEach(element =>{
    var rows = "<tr><td>" + element.ID + "</td><td>" + element.Gonderen + "</td><td>" + element.GondermeTarihi + "</td><td><button onclick ='Goster("+element.ID+")'>GÖSTER</button></td></tr>"
    table.innerHTML += rows;
    
});

function Goster(id){
    var index = mails.findIndex(x => x.ID == id);
    kisi.innerHTML = mails[index].Gonderen;
    baslik.innerHTML = mails[index].Baslik;
    konu.innerHTML = mails[index].Konu;
    tabl2.style.backgroundColor = "yellow";
    table1.style.backgroundColor = "blue";

}