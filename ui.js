//Arayüz İşlemleri
function UI(){

    this.outputImage=document.getElementById("outputImage");
    this.outputLanguage=document.getElementById("outputLanguage");
    this.outputWord=document.getElementById("outputWord");

    this.languageList=document.getElementById("language");
}


UI.prototype.changeUI=function(){
    //Arayüz Değiştir
    this.outputImage.src=`images/${this.languageList.value}.png`;
    console.log(this.languageList.options[this.languageList.selectedIndex].textContent);
    this.outputLanguage.textContent=this.languageList.options[this.languageList.selectedIndex].textContent;
    // console.log(this.languageList.selectedIndex);  //hangi dil seçilmişse onun indexini veriyor

}

UI.prototype.displayTranslate=function(word){
    this.outputWord.textContent=word;
}