Template.register.events({
    'click [data-action=register]': function (event, template) {
        var email = $('[data-form=email]').val();
        var password = $('[data-form=password]').val();
        var password2 = $('[data-form=password2]').val();
        //TODO: check password equals to password2
        //
        Accounts.createUser({
            username: email,
            email : email,
            password : password,
            profile: {}
        },function(error){
            if(error){
                alert(error);
            }
            else{
                IonModal.close();
            }
        })
    }
});
