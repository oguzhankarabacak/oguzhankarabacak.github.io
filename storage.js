class Storage{
    static getSearchedUserFromStorage(){
        //tüm kullanıcıları al
        let users;
        if(localStorage.getItem("searched")===null){
            users=[];
        }
        else{
            users=JSON.parse(localStorage.getItem("searched"));
            
        }
        return users;
    }
    static addSearchedUserToStorage(username){
        //Kullanıcı ekle
        let users=this.getSearchedUserFromStorage();
        
        if(users.indexOf(username)=== -1){  //eğer önceden yoksa -1 gelir
            users.push(username);

        }
        localStorage.setItem("searched",JSON.stringify(users));


    }
    static clearAllSearchedUsersFromStorage(){
        //Tüm kullanıcıları sil
        localStorage.removeItem("searched");
    }
}