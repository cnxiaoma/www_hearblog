Ext.define("HearBlog.view.Main", {
    extend: 'Ext.tab.Panel',

    config: {
        xtype: 'tabpanel',
        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
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