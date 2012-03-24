Ext.define("HearBlog.view.Main", {
    extend: 'Ext.tab.Panel',

    config: {
        xtype: 'tabpanel',
        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            // This is the home page, just some simple html
            {
                title: 'home',
                iconCls: 'home',
                xtype : 'home'
            },
            {
                iconCls: 'star',
                xtype : 'blog'
            }
        ]
    }
});