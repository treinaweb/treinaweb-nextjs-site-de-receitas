const url = 'http://localhost:3002/api/';

export const ApiService = {
    get(endPoint){
        return fetch(`${url}${endPoint}`).then(response => response.json())
    },
    post(endPoint, data){
        return fetch(`${url}${endPoint}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    },
    delete(endPoint){
        return fetch(`${url}${endPoint}`, {
            method: 'DELETE',
        }).then(response => response.json());
    }
}