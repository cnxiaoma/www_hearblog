Ext.define('HearBlog.view.Home', {
    extend: 'Ext.Container',
    xtype: 'home',

    config: {
        items: [
            {
                xtype: 'container',
                html:  '<img src="resources/images/logo.jpg" />'+
                '<h1>Welcome to HearBlog!</h1>'
            }
        ]
    }
});
