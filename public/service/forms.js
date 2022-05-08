


const form = {

    // returns all the data from a given form
    getData: (formElement) => {
        let formData = new FormData(formElement)
        return new URLSearchParams(formData)
    },

    // takes in a form element and POSTS it via fetch
    postForm: async (e, url) => {
        const response = await fetch(url, {
            method: 'post',
            body: form.getData(e)
        })
    }


}