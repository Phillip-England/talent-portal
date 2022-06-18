import Toggle from "./Toggle.js";

class ToggleFactory {
    constructor(){
        this.products = []
    }
    build(elements, style){
        this.products = []
        for (let x = 0; x < elements.length; x++){
            this.products.push(new Toggle(elements[x], style))
        }
        return this.products
    }
}

export default ToggleFactory