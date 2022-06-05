const submitForm = async (form, url) => {

    //elements
    const loader = document.getElementById('main-loading-icon')
    const inputs = form.getElementsByClassName('form-control')
    const requiredInputs = form.getElementsByClassName('form-required')
    const astricks = form.getElementsByClassName('astrick')
    const errorMessage = form.getElementsByClassName('error-message')[0]
    const errorWrapper = form.getElementsByClassName('error-wrapper')[0]
    const submitButton = form.getElementsByClassName('submit-button')[0]
    let quit = false

    //displaying our loader
    loader.style.display = 'block'

    //checking if our required inputs are complete
    for (x = 0; x < requiredInputs.length; x++){
        //if we get an empty input, display the astrick, hide the load, make quit true
        if (requiredInputs[x].value == ''){
            astricks[x].style.display = 'inline'
            errorWrapper.style.display = 'flex'
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
    errorWrapper.style.display = ''

    //adding animation to our submit button
    submitButton.style.animationName = 'animate-submit-button'

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

    // if our credentials expire, we will need to redirect to the login page
    if (res.redirected == true){
        window.location = '/user/login'
        return
    }

    let data = await res.json()

    //if we get an error
    if (data.error){
        //display the error
        errorMessage.innerText = data.error
        errorWrapper.style.display = 'flex'
        //hide the loader
        loader.style.display = ''
        //return button back from animation
        submitButton.style.animationName = ''
        //end the function
        return
    }

    // if we make it past the error handling, reload the page
    window.location.reload()

}