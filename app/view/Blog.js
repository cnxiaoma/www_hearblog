Ext.define("HearBlog.view.Blog", {
    extend: 'Ext.dataview.NestedList',
    xtype: 'blog',

    config: {
                xtype: 'nestedlist',
                title: 'Blog',
                displayField: 'title',

                store: {
                    type: 'tree',

                    fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                        name: 'leaf',
                        defaultValue: true
                    }],

                    root: {
                        leaf: false
                    },

                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q=http://dcurt.is/feed.rss',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },

                toolbar:{
                    docked: "top", xtype: "titlebar", ui: "light", inline: true,
                    defaults:{iconMask:true,ui:'plain'},
                    items:[
                        {
                            iconCls: 'add',
                            hidden: true
                        }
                    ]
                },

                detailCard: {
                    xtype: 'container',
                    scrollable: true,
                    styleHtmlContent: true,
                    items: [
                        {
                        xtype : 'audio',
                        hidden: true
                        }
                    ]    
                },
                
                listeners: {
                    itemtap: function(nestedList, list, index, element, post) {
                       // this.parent.child('toolbar').hidden=true;
                        this.getDetailCard().setHtml(post.get('content'));
                        var audio = this.getDetailCard().down('audio');
                    
                        var s=encodeURIComponent(post.get('content'));
                        //audio.setUrl('http://hearblog.openpk.org/tts.php?text='+s);
                        //audio.setUrl('http://tts.labs.ericsson.net/read?devkey=&text='+s);
                        //audio.play();
                       }
                }
            }
});