const form=document.getElementById("film-form");
const title_element=document.querySelector("#title");
const director_element=document.querySelector("#director");
const url_element=document.querySelector("#url");
const secondcardbody=document.querySelectorAll(".card-body")[1];
const clear_films=document.getElementById("clear-films");
const table_films=document.getElementById("films");

//UI Objesini Başlatma
const ui=new UI();

//storage objesini başlatma

const storage=new Storage();

//Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    secondcardbody.addEventListener("click",deleteFilm);
    clear_films.addEventListener("click",clearFilms);
    

}
function addFilm(e){
    const title=title_element.value;
    const director=director_element.value;
    const url=url_element.value;

    if(title === ""  || director === ""  || url === ""){  //Bir tanesi bile boşsa hata mesajı
        ui.displayMessages("tüm alanları doldurunuz","danger");

    }
    else {
        const newFilm=new Film(title,director,url);  //Yeni film oluşturduk

        ui.addFilmToUI(newFilm); //Arayüze film ekleme
        storage.addFilmToStorage(newFilm);  //Storage ye film ekleme
        ui.displayMessages("başarıyla eklendi","success");


    }
    ui.clearInputs(title_element,director_element,url_element); //inputları ekledikten sonra temizliyor



    e.preventDefault();
}
function deleteFilm(e){
    
    if (e.target.className==="btn btn-danger"){
        ui.deleteFilmFromUI(e);
        storage.deleteFilmFromStorage(e.target.parentElement.parentElement.children[1].textContent);//film ismini aldık
        ui.displayMessages("başarıyla silindi","success");
        
    }

}
function clearFilms(){
    if(confirm("Tümünü silmek istediğinize eminmisiniz")==true){
        ui.clearFilmsFromUI(table_films);
        storage.clearFilmsFromStorage();
    }
}