/**
   * Easy selector helper function
   */
export const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
//  /**
//    * Easy event listener function
//    */
//  export const on = (type, el, listener, all = false) => {
//     if (all) {
//       select(el, all).forEach(e => e.addEventListener(type, listener))
//     } else {
//       select(el, all).addEventListener(type, listener)
//     }
//   }