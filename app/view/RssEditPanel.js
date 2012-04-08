Ext.define('HearBlog.view.RssEditPanel', {
  extend: 'Ext.Panel',
  xtype: 'rsseditpanel',

  config: {
    layout: 'fit',

    items: [
      {
        layout: 'fit',

        items: [
          {
            docked: 'top',
            xtype : 'toolbar',
            title: 'Todo',
            items: [
              {
                xtype: 'button',
                id: 'cancel-button',
                ui: 'back',
                text: 'Cancel'
              }
            ]
          },

          {
            xtype: 'rssform',
            id: 'rssform'
          },

          {
            docked: 'bottom',
            xtype : 'toolbar',
            items: [
              {
                xtype: 'spacer'
              },

              {
                xtype: 'spacer'
              },

              {
                xtype: 'button',
                id: 'save-button',
                ui: 'action',
                text: 'Done'
              }
            ]
          }
        ]
      },

      {
        xtype: 'confirmdialog',
        id: 'save-confirm-dialog'
      }
    ]
  }
});
