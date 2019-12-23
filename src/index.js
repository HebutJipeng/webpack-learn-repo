import { cube } from './math'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
   let element = document.createElement('pre') 

   element.innerHTML = ['hello webpack!', '5 cubed is equal to' + cube(5)].join('\n\n')

   element.appendChild(btn)

   return element
}

let element = component()
document.body.appendChild(element)