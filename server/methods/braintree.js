Meteor.methods({
  getBraintreeToken:function(){
    try{
      var bt = BrainTreeConnect({
        //If you set an ENV variable for PRODUCTION you can dynamically change out sandbox and production
        environment: process.env.PRODUCTION && Braintree.Environment.Production || Braintree.Environment.Sandbox,
        merchantId: Meteor.settings.public.BRAIN_TREE.MERCHANT_ID,
        publicKey:  Meteor.settings.public.BRAIN_TREE.PUBLIC_KEY,
        privateKey: Meteor.settings.public.BRAIN_TREE.PRIVATE_KEY
      });

        console.log('BRAINTREE CREATED', bt);

      return bt.customer.create({
          firstName: 'Jen',
          lastName: 'Smith',
          company: 'Braintree',
          email: 'jen@example.com',
          phone: '312.555.1234',
          fax: '614.555.5678',
          website: 'www.example.com'
      });
  } catch(error){
      throw new Meteor.Error(1001, error.message);
  }
  }
});
