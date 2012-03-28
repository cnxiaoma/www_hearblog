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

                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },

                listeners: {
                    itemtap: function(nestedList, list, index, element, post) {
                        
                        this.getDetailCard().setHtml(post.get('content')+'aa<script type="text/javascript">emplay("hello");</script>');
                    }
                }
            }

});