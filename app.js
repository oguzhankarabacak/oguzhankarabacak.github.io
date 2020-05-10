//Elementleri Seçme

const githubForm=document.getElementById("github-form");
const name_input=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");
const lastUsers=document.getElementById("last-users");

const github=new Github();
const ui=new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    window.addEventListener("DOMContentLoaded",getAllSearched);
    
}

function getData(e){
    let username=name_input.value.trim();  //sağ ve soldaki boşlukları siliyoruz
    if (username === ""){
        alert("lütfen geçerli bir kullanıcı adı girin");
    }
    else {
        github.getGithubData(username)
        .then(response => {
            // console.log(response.user);
            // console.log(response.repo);
            if(response.user.message==="Not Found"){
                ui.showError("kullanıcı bulunamadı");
                // console.log("hata");
            }
            else {
                //  console.log(response.repo);
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }

        })
        .catch(err => {
            ui.showError(err);
        });

    }
    

    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched(){
    if(confirm("Emin misiniz?")){
        ui.clearAllSearchedFromUI();
        Storage.clearAllSearchedUsersFromStorage();

    }
    

}
function getAllSearched(){
    let users=Storage.getSearchedUserFromStorage();
    let result = "";
    users.forEach(user => {
        
        result += `<li class="list-group-item">${user}</li>`;
    });
    lastUsers.innerHTML=result;
}