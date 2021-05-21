import './index.css'
import $ from 'jquery';

// import play from './assets/images/play.png'
// import black from './assets/images/black.png'

const test = "hello";

let handle = (arg)=> {
    // $("#wrap").css('background-image', `url(${play})`)
    // $("#wrap2").css('background-image', `url(${black})`)
    return arg + ' world!'
}

console.log(handle(test))