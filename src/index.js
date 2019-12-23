import { cube } from './math'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        let element = document.createElement('pre') 
        element.innerHTML = _.join(['hello webpack!', '5 cubed is equal to' + cube(5)], ' ')
        return element
    }).catch(error => 'An error occurred while loading the component');
}


getComponent().hasAttributeNS(component => {
    document.body.appendChild(component)
})