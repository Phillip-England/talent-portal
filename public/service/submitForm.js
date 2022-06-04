const submitForm = async (form, url) => {

    //elements
    const loader = document.getElementById('main-loading-icon')
    const inputs = form.getElementsByClassName('form-control')
    const requiredInputs = form.getElementsByClassName('form-required')
    const astricks = form.getElementsByClassName('astrick')
    const errorMessage = form.getElementsByClassName('error-message')[0]
    const errorWrapper = form.getElementsByClassName('error-wrapper')[0]
    const errorShowClass = 'flex-r-lft'
    const errorHideClass = 'hide'
    let quit = false

    //displaying our loader
    loader.style.display = 'block'

    //checking if our required inputs are complete
    for (x = 0; x < requiredInputs.length; x++){
        //if we get an empty input, display the astrick, hide the load, make quit true
        if (requiredInputs[x].value == ''){
            astricks[x].style.display = 'inline'
            errorWrapper.classList.add(errorShowClass)
            errorWrapper.classList.remove(errorHideClass)
            errorMessage.innerText = 'Please fill out all the required form fields'
            loader.style.display = ''
            quit = true
        } else {
            astricks[x].style.display = ''
        }
    }

    //break the function if quit is true
    if (quit == true){
        return
    }

    //if we made it this far, hide our error message
    errorMessage.innerText = ''
    errorWrapper.classList.remove(errorShowClass)
    errorWrapper.classList.add(errorHideClass)

    //getting our values
    let values = getFormValues(inputs)

    //making our fetch request
    let res = await fetch(url, {
        method: "POST",
        body: values,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    let data = await res.json()

    console.log(data)

    //if we get an error
    if (data.error){
        //display the error
        errorMessage.innerText = data.error
        errorWrapper.classList.add(errorShowClass)
        errorWrapper.classList.remove(errorHideClass)
        //hide the loader
        loader.style.display = ''
        //end the function
        return
    }

    //if we make it past the error handling, reload the page
    window.location.reload()

}