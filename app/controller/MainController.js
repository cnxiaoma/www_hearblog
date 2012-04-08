Ext.define('HearBlog.controller.MainController', {
  extend: 'Ext.app.Controller',

  views: [ 'Main', 'RssList','RssEditPanel','RssForm' ],

  stores: [ 'Rss' ],

  refs: [
      {
      ref: 'RssList',
      selector: 'rsslist'
      },
      {
      ref: 'RssEditPanel',
      selector: 'rsseditpanel'
      }
  ],

  init: function() {
    this.control({
      '#todo-list': {
        show: this.onShowList,
        select: this.onListSelect
      },

      '#refresh-button': {
        tap: this.onRefreshButtonTap
      },

      '#add-button': {
        tap: this.onAddButtonTap
      },

      '#back-button': {
        tap: this.onBackButtonTap
      },

      '#cancel-button': {
        tap: this.onCancelButtonTap
      },

      '#edit-button': {
        tap: this.onEditButtonTap
      },

      '#delete-button': {
        tap: this.onDeleteButtonTap
      },

      '#save-button': {
        tap: this.onSaveButtonTap
      }
    });

    //this.getMainView().create();
  },

  onShowList: function() {
    this.loadData();
  },

  onRefreshButtonTap: function() {
    this.loadData();
  },

  onListSelect: function(list, todo) {
    var detail = this.getTodoDetail(),
        form = detail.down('formpanel');
    if (detail == null) {
      detail = this.getView('todo.TodoDetail').create();
      form = detail.down('formpanel');
    }
    form.setRecord(todo);
    detail.show();
  },

  onAddButtonTap: function(btn) {
      //Ext.Msg.alert('Result','Add');
      panel = this.getRssList();// .getRssEditPanel();
      //form = panel.down('rssform'),
      //newRss = Ext.create('HearBlog.model.RssModel', {
      //    id: '',
      //    title: '',
      //    detail: ''
      //}),
      //mainView = Ext.getCmp('rsslist');
      //console.log(mainView);
      console.log(panel);

      //form.setRecord(newRss);
     // mainView.showPanel(panel, {
     // type: 'slide',
     // direction: 'left'
     // });
  },

  onBackButtonTap: function() {
    var view = this.getTodoDetail();
    view.hide();
  },

  onCancelButtonTap: function() {
    var panel = this.getTodoPanel(),
        mainView = Ext.getCmp('main-view');
    mainView.showPanel(panel, {
      type: 'slide',
      direction: 'right'
    });
  },

  onEditButtonTap: function(btn, event) {
    var detail = this.getTodoDetail(),
        detailForm = detail.down('formpanel'),
        record = detailForm.getRecord(),
        editPanel = this.getTodoEditPanel(),
        editForm = editPanel.down('formpanel'),
        mainView = Ext.getCmp('main-view');

    editForm.setRecord(record);

    mainView.showPanel(editPanel, {
      type: 'slide',
      direction: 'left'
    });
  },

  onDeleteButtonTap: function() {
    var view = this.getTodoDetail(),
        dialog = view.down('#delete-confirm-dialog');
    dialog.confirm({
      title: 'Confirm',
      msg: 'Do you want to remove this TODO?',
      scope: this,
      fn: function(btn) {
        if (btn == 'yes') {
          this.doDelete();
        }
      }
    });
  },

  onSaveButtonTap: function() {
    var view = this.getTodoEditPanel(),
        dialog = view.down('#save-confirm-dialog');
    dialog.confirm({
      title : 'Confirm',
      msg: 'Do you want to save this TODO?',
      scope: this,
      fn: function(btn) {
        if (btn == 'yes') {
          this.doEdit();
        }
      }
    });
  },

  loadData: function() {

	var store = Ext.create('Ext.data.Store', {
		model: "HearBlog.model.RssModel",
		autoload:true
	});

    //Ext.Msg.alert('Result','Load');
	
	//var rsslist = Ext.create('HearBlog.model.RssModel',{title: 'Ext JS',detail: 'aa'});
    //rsslist.save();
    //	console.log(rsslist);
	
	list = this.getRssList();

    console.log(list);

    if (list.getStore() == null) {
      list.setStore(store);
	 // Ext.Msg.alert('Result','Load');
      store.load();
    } else {
    //  list.deselect(list.getLastSelected());
    //  list.getStore().removeAll();
    //  list.getStore().load();
    }
  },

  doDelete: function() {
    var detail = this.getTodoDetail(),
        form = detail.down('formpanel'),
        values = form.getValues();
  },

  doEdit: function() {
    var view = this.getTodoEditPanel(),
        detail = this.getTodoDetail(),
        form = view.down('formpanel'),
        values = form.getValues();
		
	//	var todo = Ext.create('app.model.TodoModel',{title: values['title'],detail: values['detail']});
	//	todo.save();
		detail.hide();
        this.onCancelButtonTap();
  }

});

