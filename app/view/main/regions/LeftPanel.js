Ext.define('OpapiWeb.view.main.regions.LeftPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-leftpanel',

    title: 'Menu',
    region: 'west',
    width: 250,
    collapsible: true,
    collapsed: true,
    bodyStyle: {
        backgroundColor: '#ffaa33', // Cor de fundo
        color: '#fff'               // Cor do texto
    },

    html: '<p>Conteúdo da aba esquerda</p>',
    items: [{
        xtype: 'button',
        text: 'Opção 1',
        margin: '5',
        handler: function() {
            alert('Opção 1 clicada!');
        }
    }, {
        xtype: 'button',
        text: 'Opção 2',
        margin: '5',
        handler: function() {
            alert('Opção 2 clicada!');
        }
    }]
});
