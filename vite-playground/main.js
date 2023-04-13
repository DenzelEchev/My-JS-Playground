import './style.scss'
import { renderWords} from './renderWords'
import { getImg } from './image.js'

document.querySelector('#app').innerHTML = `
  <section>
    <h2>This is an H2</h2>
    <p></p>
    <img src="">
  </section>
`
renderWords(document.querySelector('p'))
getImg(document.querySelector('img'))