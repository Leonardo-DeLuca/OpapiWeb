Ext.define('OpapiWeb.view.main.regions.CenterPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.centerpanel',

    onSearchClick: function () {
        const centerPanel = this.getView(); 

        centerPanel.removeAll(true);

        centerPanel.add({
            xtype: 'results-page'
        });
    }
});
