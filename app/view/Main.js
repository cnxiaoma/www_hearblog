Ext.define("HearBlog.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'main',

    config: {
        xtype: 'tabpanel',
        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',
                xtype : 'home'
            },
            {
                title: 'Blog',
                iconCls: 'star',
                xtype : 'blog'
            },
            {
                title: 'Setting',
                iconCls: 'settings',
                xtype : 'rsslist'
            }
        ]
    }
});