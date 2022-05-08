
const url = {

    getEnv: () => {
        return document.getElementsByTagName('body')[0].getAttribute('NODE_ENV')
    },

    getURL: (midURL, additions) => {
        let baseURL
        if (url.getEnv() == 'development'){
           baseURL = 'http://localhost:5000'
        } else {
            //production url goes here
        }
        let combinedURL = baseURL + midURL
        if (additions == undefined) {
            return combinedURL
        }
        Object.values(additions).forEach(value => {
            combinedURL = combinedURL + '/' + value
        })
        return combinedURL
    }
    
}