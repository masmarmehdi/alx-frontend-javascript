export default function handleResponseFromAPI(promise) {
    if (promise) {
        console.log('Got a response from the API');
        return {
            status: 200,
            body: 'success'
        }
    }
    console.log('Got a response from the API');
    return {
        error
    }
}