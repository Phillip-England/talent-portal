
const toggle = {

    //takes in a single element and toggles its display
    simple: (display, element) => {
        switch (element.style.display) {
            case "":
                element.style.display = display
                break
            case display:
                element.style.display = ''
                break
        }
    },

    //toggles an element oneway but will not allow it to toggle back
    oneWay: (display, element) => {
        if (element.style.display != display){
            element.style.display = display
        }
    }

}