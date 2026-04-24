export default { // this will return the promise of the fetch from the two services.
    getRandomWyr() {
        return fetch('/wyr').then(response => {
            return response.json() // once it fetches, it will pull the response and convert it to a .json
        }) // the value WYR will be returned through this method.
    }
}