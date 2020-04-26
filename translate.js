//API Kullanımı

function Translate(word,language){
    this.apikey="trnsl.1.1.20190617T124353Z.607c865c4e0084c6.be2d44dd9b8492d84a44354b534ab5cae5cb075a";
    this.word=word;
    this.language=language;


    //XHR OBJESİ

    this.xhr=new XMLHttpRequest();


}

Translate.prototype.translateWord=function(callback){  //burada arrow function kullanılmaz
    //Ajax İşlemleri
    const endpoint=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint,true);
    this.xhr.onload=function(){
        if(this.status===200){  //4. çözümlü kısım vardı ajax,callbackde o kısım
            const data=this.responseText;
            const json_data=JSON.parse(data);
            const new_word=json_data.text[0];  //gelen objeyi parçalıyoruz
            callback(null,new_word);
        }
        else{
            console.log(this.status);
            callback("hata oluştu",null);
        }
    }
    this.xhr.send();
};


Translate.prototype.changeParameters=function(new_word,new_language){  //her kelimede yeni constructor oluşturmalıyız
    this.word=new_word;
    this.language=new_language;
}