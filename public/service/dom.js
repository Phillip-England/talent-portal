export function qsa(selector, parent = document){
    return parent.querySelectorAll(selector, parent = document)
}

export function qs(selector, parent = document){
    return parent.querySelector(selector)
}



