const addCandidate = () => {
    const form = document.getElementById('add-candidate-form')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        submitForm(this, '/candidates/add-candidate')
    })

}

addCandidate()