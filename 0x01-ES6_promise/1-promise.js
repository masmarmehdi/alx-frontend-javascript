export default function getFullResponseFromAPI(message) {
    return new Promise((resolve, reject)=>{
        if (message) {
            resolve({
                status: 200,
                body: 'Success'
            })
        }
        reject('The fake API is not working currently');
    });
}