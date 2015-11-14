Template.signIn.events({
    'click [data-action=sign-in]': function (event, template) {
        Meteor.logout();

        var email = $('[data-form=email]').val();
        var password = $('[data-form=password]').val();


        Meteor.loginWithPassword(email,password,function(error){

           if(Meteor.user()){
               IonModal.close();
           }
            if(error){
                IonPopup.alert({
                    title: 'Ooops !',
                    template: error.reason,
                    okText: 'OK'
                });
            }
            else{
                IonModal.close();
            }
        });
    },
    'click [data-action=register]': function(event, template){
        IonModal.close();
        IonModal.open('register');
    }
});
