Ext.define('OpapiWeb.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    
    layout: 'border',

    items: [{
        xtype: 'app-leftpanel', // Painel esquerdo
        region: 'west',
        width: 300,
    }, {
        xtype: 'app-centerpanel', // Painel central
        region: 'center'
    }]
});
