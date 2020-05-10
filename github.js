class Github{
    constructor(){
        this.url="https://api.github.com/users/";
    }

    async getGithubData(username){
        const response=await fetch(this.url+username);
        const response_repo=await fetch(this.url+username+"/repos");
        const user_data=await response.json();
        const repo_data=await response_repo.json();
        
        return {user:user_data,repo:repo_data};  //obje olarak döndük 
    }
}