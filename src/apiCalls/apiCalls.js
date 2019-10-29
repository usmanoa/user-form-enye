export function postUser(user){
    fetch('https://us-central1-userformenye.cloudfunctions.net/addUser', {
        body: JSON.stringify(user),
        headers: {
            'content-type' : 'application/json'
        },
        method: 'POST'
    }).then(res => res.json()).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log(error);
    })

}

export async function fetchUsers(){
    let response = await fetch('https://us-central1-userformenye.cloudfunctions.net/getUsers');
    let data = await response.json()
    return data
}