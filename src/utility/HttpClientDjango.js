import Storage from './Storage'

const HttpClientDjango = {
    // BASE_URL: 'http://localhost:8000/api/v1/',
    BASE_URL: 'https://subhamroyportfoliodjango.herokuapp.com/nlp/',

    prepareUrl : (route)=>{
        const url = HttpClientDjango.BASE_URL
        return url + route
    },

    get: function(route) {
        return HttpClientDjango.request(route, null, 'GET');
    },

    post: function(route, params) {
        return HttpClientDjango.request(route, params, "POST");
    },

    put: function(route, params) {
        return HttpClientDjango.request(route, params, "PUT");
    },

    delete: function(route, params) {
        return HttpClientDjango.request(route, params, "DELETE");
    },

    request: async (route, params = null, method = 'GET') => {
        const token = Storage.get('token')
        let response = null
        const config = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        if (method !== 'GET') {
            config.body = JSON.stringify(params)
        }
        const url = HttpClientDjango.prepareUrl(route)
        await fetch(url, config)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            response = data
        })
        .catch(error => {
            console.log(error.message);
            response = error.message
        })
        return response
    }
}

export default HttpClientDjango