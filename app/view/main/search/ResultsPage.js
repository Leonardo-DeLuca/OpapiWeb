Ext.define('OpapiWeb.view.search.ResultsPage', {
    extend: 'Ext.panel.Panel',
    xtype: 'results-page',

    controller: 'results-page', 

    layout: {
        type: 'vbox',
        align: 'stretch' 
    },

    bodyStyle: {
        color: '#000',
    },

    height: '100%',
    width: '100%', 

    items: [
        // Cabeçalho
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle' 
            },
            height: 60, 
            padding: '0 10',
            items: [
                
                {
                    xtype: 'button',
                    tooltip: 'Voltar', 
                    iconCls: 'back-button-icon', 
                    style: {
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#ffaa33' 
                    },
                    handler: 'onBackButtonClick' 
                },
                {
                    xtype: 'component',
                    flex: 1, 
                    html: '<h2 style="margin: 0; text-align: center;">Resultados da Busca</h2>'
                }
            ]
        },
        // Conteúdo principal
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    html: '<p>Aqui os resultados aparecerão.</p>'
                }
            ]
        }
    ],

    listeners: {
        afterrender: function (panel) {
            panel.setHeight(Ext.getBody().getHeight());
        }
    }
});
