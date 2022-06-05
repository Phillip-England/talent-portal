const animateFormInputs = (form) => {
    const inputs = form.getElementsByClassName('form-control')
    const underlines = form.getElementsByClassName('underline')

    //adding click events to inputs
    for(x = 0; x < inputs.length; x++){
        let currentUnderline = underlines[x]
        let currentInput = inputs[x]
        inputs[x].addEventListener('focus', () => {
            currentUnderline.style.visibility = 'visible'
            currentUnderline.style.animationName = 'snap-underline'
            currentInput.style.borderBottom = 'none'
        })
        inputs[x].addEventListener('blur', () => {
            currentUnderline.style.visibility = 'hidden'
            currentUnderline.style.animationName = ''
            currentInput.style.borderBottom = ''
        })
    }
}

