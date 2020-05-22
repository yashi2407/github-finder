//initialising github
const github = new GitHub;

//initialising ui
const ui=new UI;

//search input
const searchUser=document.getElementById('searchuser');

searchUser.addEventListener('keyup',(e)=>{
    //get inout text
    const userText=e.target.value;
    if(userText!== ''){
        //make http call
        github.getUser(userText).then(data=>{
           if(data.profile.message ==='Not Found'){
                ui.showAlert('User not found', 'alert alert-danger');
           }
           else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
           }

        })
    }
    else{
            ui.clearProfile();
    }

});