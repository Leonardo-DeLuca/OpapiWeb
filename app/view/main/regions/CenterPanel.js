Ext.define('OpapiWeb.view.main.regions.CenterPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-centerpanel',

    controller: 'centerpanel',
    viewModel: {
        type: 'centerpanel'
    },

    layout: {
        type: 'vbox',
        align: 'center', 
        pack: 'center' 
    },
    bodyStyle: {
        color: '#000',
        textAlign: 'center'
    },
    defaults: {
        width: '100%',
        margin: '20 0'
    },
    items: [
        {
            xtype: 'component',
            html: '<img src="app/resources/images/logo.svg" alt="Logo" class="animated-logo" />'
        },
        {
            xtype: 'component',
            html: '<h1>Bem-vindo à Wiki de One Piece</h1>'
        },
        {
            xtype: 'component',
            html: '<p>Aqui você encontra tudo sobre o mundo de One Piece.</p>'
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'bottom',
                pack: 'center'
            },
            defaults: {
                margin: '0 10 0 0'
            },
            items: [
                {
                    fieldLabel: 'Buscar',
                    labelAlign: 'top',
                    xtype: 'textfield',
                    bind: '{searchQuery}',
                    emptyText: 'Digite sua busca...',
                    width: 400
                },
                {
                    xtype: 'button',
                    text: 'Buscar',
                    handler: 'onSearchClick'
                }
            ]
        }
    ]
});
