Ext.define('HearBlog.view.RssList', {
    extend: 'Ext.dataview.List',
    xtype: 'rsslist',

    config: {
        itemTpl: '{title}',
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Rss List'
            },

            {
                docked: 'bottom',
                xtype : 'toolbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'refresh-button',
                        text : 'Reload',
                        ui: 'action',
                        iconCls: 'refresh',
                        iconMask: true
                    },

                    {
                        xtype: 'spacer'
                    },

                    {
                        xtype: 'button',
                        id: 'add-button',
                        ui: 'action',
                        iconCls: 'add',
                        iconMask: true
                    }
                ]
            }
        ]
    }
});
