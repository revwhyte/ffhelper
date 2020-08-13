// lib to operate localstorage

// check if local storage has something but firebase reference
function isLSEmpty() {
    return window.localStorage.length > 1
}

// bring keys from local storage
function keysFromLS() {
    if(window.localStorage.length == 0) {
        return false
    }

    let validKeys = Object.keys(window.localStorage).filter( (key) => {
        return !key.includes('firebase')
    })

    console.log(validKeys)
}

// check if local storage has item, given key
function lsHasItem(key) {
    return window.localStorage.getItem(key)
}

// console.log(window.localStorage)

// myStorage = window.localStorage
// console.log(myStorage)

// dados = {
//     "games": {
//         "a": "b"

//     }
// }

// myStorage.setItem("fulaninho123", JSON.stringify(dados))

// console.log(JSON.parse(myStorage.getItem("fulaninho123")))