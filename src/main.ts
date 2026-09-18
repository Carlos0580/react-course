import './style.css'
// import './bases/01-const-let'
// import './bases/02-template-string'
// import './bases/03-object-literal'
// import './bases/04-arrays'
// import './bases/05-functions';
// import './bases/06-obj-destrcturing';
// import './bases/07-arr-destructuring';
import './bases/08-import-export';



import { getHeroesByOwner } from './bases/08-import-export';
import { Owner } from './data/heroes.data';
// import './data/heroes.data';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1> React Course ⚛️ </h1>
</div>`

console.log( getHeroesByOwner(Owner.DC) )