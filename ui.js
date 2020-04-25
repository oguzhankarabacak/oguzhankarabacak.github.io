function UI(){

}
UI.prototype.addFilmToUI=function(newFilm){  //arayüze ekleme
    const filmList=document.getElementById("films");
    /* <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->  */
    filmList.innerHTML += `   <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> 

    
    `;  //filmlist içine öncekileri silmeden ekle,temple literal kullandık
    
    
}
UI.prototype.clearInputs=function(title_element,director_element,url_element){  //filmi ekledikten sonra inputların temizlemesi için
    title_element.value="";
    director_element.value="";
    url_element.value="";
}
UI.prototype.displayMessages=function(message,type){
    /*
    <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>  */
    const card_body=document.querySelectorAll(".card-body")[0];  //ilk card-bodynin sonuna ekleyeceğiz
    const alert=document.createElement("div"); //alert oluşturuyoruz
    alert.className=`alert alert-${type}`;
    alert.role="alert";
    const text=document.createTextNode(message);
    alert.appendChild(text);
    card_body.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },1000);  //1 saniye sonra mesaj sayfadan silinecek

}
UI.prototype.loadAllFilms=function(films){
    const filmList=document.getElementById("films");
    films.forEach(function(film) {
        filmList.innerHTML += `   <tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> `;
        
        
    });
}
UI.prototype.deleteFilmFromUI=function(element){
    const delete_film=element.target.parentElement.parentElement;
    delete_film.remove();
    
}
UI.prototype.clearFilmsFromUI=function(table_films){
    while(table_films.firstElementChild != null){  //çocuk olduğu sürece
            
        table_films.removeChild(table_films.firstElementChild);  //veya table_films.firstElemenetChild.remove();
        
     }
    
}