AutoForm.hooks({
  'bookings-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },
    onError: function(formType, error) {
      console.log('an error occured', error);
    },
  }
});
