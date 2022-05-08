


const form = {

    //returns all the data from a given form
    getData: (formElement) => {
        let formData = new FormData(formElement)
        return new URLSearchParams(formData)
    },

    //if any form fields are empty, it will return the empty fields in an array
    //will dig 3 generations deep into all form children
    getEmptyFields: (formElement) => {
        //setting up variables
        let emptyFields = []
        let grandChildren = []
        let greatGrandChildren = []
        let formChildren = formElement.children
        let tagNames = [
            'INPUT',
            'TEXTAREA',
            'SELECT'
        ]
        //looping through children
        for (x = 0; x < formChildren.length; x++){
            // if the children have children, then push to grandChildren
            if (formChildren[x].children.length > 0){
                grandChildren.push(formChildren[x])
            }
            //looping through our tag names to see if the current element is a match
            for (y = 0; y < tagNames.length; y++) {
                if (formChildren[x].tagName == tagNames[y] && formChildren[x].value == ''){
                    emptyFields.push(formChildren[x])
                }
            }
        }
        //looping through grandchildren
        for (x = 0; x < grandChildren.length; x++){
            //if the grandchildren have children, then push to greatGrandChildren
            if (grandChildren[x].children.length > 0){
                greatGrandChildren.push(grandChildren[x])
            }
            //looping through our tag names to see if the current element is a match
            for (y = 0; y < tagNames.length; y++) {
                if (grandChildren[x].tagName == tagNames[y] && grandChildren[x].value == ''){
                    emptyFields.push(grandChildren[x])
                }
            }
        }
        //looping through great grand children
        for (x = 0; x < greatGrandChildren.length; x++){
            //looping through our tag names to see if the current element is a match
            for (y = 0; y < tagNames.length; y++) {
                if (greatGrandChildren[x].tagName == tagNames[y] && greatGrandChildren[x].value == ''){
                    emptyFields.push(greatGrandChildren[x])
                }
            }
        }
        return emptyFields
    },

    //takes in a form element and POSTS it via fetch
    postForm: async (e, url) => {

        let emptyFields = form.getEmptyFields(e)

        if (emptyFields.length > 0){
            for (x = 0; x < emptyFields.length; x++){
                toggle.oneWay('inline', emptyFields[x].previousElementSibling.firstElementChild)
            }
        }

        const response = await fetch(url, {
            method: 'post',
            body: form.getData(e)
        })
    },


}