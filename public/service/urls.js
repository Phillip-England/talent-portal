
const url = {

    getEnv: () => {
        return document.getElementsByTagName('body')[0].getAttribute('NODE_ENV')
    },

    getURL: (midURL, additions) => {
        let baseURL //will contain the start of our url, which is different for production and development
        let URLWithAdditions //will hold our URL if additions are needed (like _id values attached at the end)
        let NODE_ENV = url.getEnv()
        if (NODE_ENV == 'development'){
            baseURL = 'http://localhost:5000'
        } else {
            //production url goes here
        }
        URLWithAdditions = baseURL + midURL //combining our baseURL and our midURL
        //checking to see if additions have been provided
        //if they have not, simply return the url without additions
        if (additions == undefined) {
            return baseURL + midURL
        }
        //looping through our additions and adding them to our url
        Object.values(additions).forEach(value => {
            URLWithAdditions = URLWithAdditions + '/' + value
        })
        //finally, return our URL with its additions
        return URLWithAdditions
    }
    
}