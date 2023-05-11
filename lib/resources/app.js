window.Ant.booting(function(app) {
    console.log('addon booting', app.version)
    app.component('custom-field2', require('./Field').default)
})