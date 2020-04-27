module.exports = {
  menuLateral: {
    'Servicios web': [
      'servicios-web/intro',
      'servicios-web/cuentas-de-usuario',
      {
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
              'servicios-web/ventanilla-virtual/presentacion-telematica/presentacion-de-documentos',
              'servicios-web/ventanilla-virtual/presentacion-telematica/reingreso-de-documentos',
              'servicios-web/ventanilla-virtual/presentacion-telematica/adicion-de-documentos',
              'servicios-web/ventanilla-virtual/presentacion-telematica/informacion-adicional',
            ],
          }
        ],
      },
      'servicios-web/calculadora-registral',
      'servicios-web/preguntas-frecuentes',
    ],
    'Temas registrales': [
      'dincrece/informacion-general',
      'dincrece/preguntas-frecuentes',
      'dincrece/defectos-comunes',
      'dincrece/liquidacion',
      'dincrece/glosario',
    ],
    'Otros recursos': [
      'otros-recursos/firma-electronica',
      'otros-recursos/reembolsos-y-devoluciones',
      'otros-recursos/privacidad-y-seguridad',
    ],
  },
};
