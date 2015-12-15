//
 AccountsTemplates.configure({
 defaultLayoutType: 'blaze-to-react',
 defaultTemplate: 'fullPageAtForm',  // default
 defaultLayout: AppLayout,
     enablePasswordChange : true,
 defaultLayoutRegions: {
 nav: <NavBar />,
 footer: <Footer />
 },
 defaultContentRegion: 'content'
 });

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
