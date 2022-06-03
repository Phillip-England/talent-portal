const submitForm = async (form, url) => {

    //elements
    const loader = document.getElementById('main-loading-icon')
    const inputs = form.getElementsByClassName('form-control')
    const requiredInputs = form.getElementsByClassName('form-required')
    const astricks = form.getElementsByClassName('astrick')
    const error = form.getElementsByClassName('error')[0]
    let quit = false

    //displaying our loader
    loader.style.display = 'block'

    //checking if our required inputs are complete
    for (x = 0; x < requiredInputs.length; x++){
        //if we get an empty input, display the astrick, hide the load, make quit true
        if (requiredInputs[x].value == ''){
            astricks[x].style.display = 'inline'
            error.innerText = 'Please fill out all the required form fields'
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
    error.innerText = ''


    //getting our values
    let values = getFormValues(inputs)

    //making our fetch request
    let data = await fetchSimple({
        method: 'POST',
        body: values
    })

    console.log(data)

    //making a fetch request
//     let data = await fetchSimple({
//         method: 'POST',

//     })
}