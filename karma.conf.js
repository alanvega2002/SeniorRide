// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        random: false // Desactiva la aleatoriedad para que las pruebas siempre sigan el mismo orden
      },
      clearContext: false // Mantener visible el reporte de Jasmine en el navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true // Remueve rastros duplicados en el reporte HTML
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' }, // Genera un reporte HTML de cobertura
        { type: 'text-summary' } // Genera un resumen en texto
      ]
    },
    reporters: ['progress', 'kjhtml'], // Progreso y reporter HTML para Jasmine
    port: 9876, // Puerto por defecto para Karma
    colors: true, // Habilitar colores en la terminal
    logLevel: config.LOG_INFO, // Nivel de log INFO
    autoWatch: true, // Monitorea cambios en los archivos
    browsers: ['Chrome'], // Usa Chrome como navegador para las pruebas
    singleRun: false, // No cierra el navegador después de correr las pruebas
    restartOnFileChange: true // Reinicia las pruebas al cambiar archivos
  });
};
