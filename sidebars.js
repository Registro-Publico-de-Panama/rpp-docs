module.exports = {
  menuLateral: {
    'Servicios web': [
      {
        '¿Por dónde empiezo?': [
          'servicios-web/intro',
          'servicios-web/registro-de-usuario',
          'servicios-web/firma-electronica',
        ],
      }, {
        'Consulta de información': [
          'servicios-web/consulta/busqueda-de-entradas',
          'servicios-web/consulta/busqueda-de-folios',
          'servicios-web/consulta/busqueda-de-defectos',
          'servicios-web/consulta/cotejo-de-documentos',
        ]
      }, {
        'Ventanilla Virtual': [
          'servicios-web/ventanilla-virtual/solicitud-de-ventanilla-virtual',
          'servicios-web/ventanilla-virtual/solicitud-de-certificados',
          {
            'Presentación Telemática': [
              'servicios-web/ventanilla-virtual/presentacion-telematica/intro',
            ],
          }
        ],
      },
    ],
    'Temas registrales': [
      'dincrece/preguntas-frecuentes',
      'dincrece/defectos-comunes',
    ],
    'Otros recursos': [
      'doc1',
      'doc2',
      'doc3',
      'mdx',
    ],
  },
};
