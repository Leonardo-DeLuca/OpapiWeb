Ext.define('OpapiWeb.view.search.ResultsPageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.results-page',

    onBackButtonClick: function () {
        const viewport = this.getView().up(); 

        viewport.removeAll(true);
        
        viewport.add({ xtype: 'app-centerpanel' }); 
    }
});
