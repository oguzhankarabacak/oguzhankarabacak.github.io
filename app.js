//Genel İşlemler
//Prototype,Ajax,Callback

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);  //buton elementi
    document.getElementById("language").onchange=function(){   //dil değiştikçe
        //Arayüz işlemleri
        
        ui.changeUI();
    }
}
const translate=new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui=new UI();


function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function(err,response){
        if (err===null){
            ui.displayTranslate(response);
        }
        else {
            console.log("error");

        }
    });   //translate.js'ye ait olan fonksiyon üsttekiyle alakası yok
    e.preventDefault();
}