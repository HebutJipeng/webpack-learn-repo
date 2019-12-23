import _ from 'lodash'
import printMe from './print'
import './style.css'

function component() {
   let element = document.createElement('div') 
   let btn = document.createElement('button')

   element.innerHTML = _.join(['Hello', 'webpack'], ' ')
   element.classList.add('hello')

   btn.innerHTML = 'click & console'
   btn.onclick = printMe

   element.appendChild(btn)

   return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', () => {
        console.log('accepting the updated print module')
        document.body.removeChild(element)
        element = component()
        element = component()
        document.body.appendChild(element)
    })
}