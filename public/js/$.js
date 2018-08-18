const $ = (() => {

  const jQuery = selector => {
    if(selector.charAt(0) === '#') {
      return document.getElementById(selector.substr(1)) 
    }
    return document.getElementsByClassName(selector)[0]
  }

  jQuery.ajax = (method, body, id) => {

    const url = window.location.origin + '/api/' + (id ? id : '')

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    if(body) {
      options.body = JSON.stringify(body)
    }

    return fetch(url, options)
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.log(err))
  }

  jQuery.on = (elSelector, eventName, selector, fn) => {
    const element = document.querySelector(elSelector)

    element.addEventListener(eventName, (event) => {
      const possibleTargets = element.querySelectorAll(selector)
      const target = event.target

      for (let i = 0; i <= possibleTargets.length; i++) {
        let el = target
        const p = possibleTargets[i]

        while(el && el !== element) {
          if (el === p) {
              return fn.call(p, event)
          }

          el = el.parentNode
        }
      }
    })
  }

  return jQuery

})()