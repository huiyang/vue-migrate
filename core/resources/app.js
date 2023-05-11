import Ant from './Ant'

window.Ant = new Ant(window.config)

window.addEventListener('DOMContentLoaded', function () {
    window.Ant.boot()
})