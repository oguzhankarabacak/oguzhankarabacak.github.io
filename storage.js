function Storage(){

}
Storage.prototype.addFilmToStorage=function(newFilm){
    let films=this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
    
}


//localstorageden filmleri getirme veya yoksa oluşturma
Storage.prototype.getFilmsFromStorage=function(){
    let films;
    if(localStorage.getItem("films")=== null) {
        films=[];
    }
    else {
        films=JSON.parse(localStorage.getItem("films"));
    }
    return films;

}

Storage.prototype.deleteFilmFromStorage=function(film_name){
    let films=this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title===film_name){
            films.splice(index,1);
        }


    });
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearFilmsFromStorage=function(){
    localStorage.removeItem("films");
}