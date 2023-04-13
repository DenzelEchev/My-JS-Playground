import './style.scss'
import { renderWords} from './renderWords'

document.querySelector('#app').innerHTML = `
  <section>
    <h2>This is an H2</h2>
    <p></p>
  </section>
`
renderWords(document.querySelector('p'))