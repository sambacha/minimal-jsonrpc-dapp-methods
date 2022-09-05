//Access-Control-Allow-Origin : http://localhost:3000
//Access-Control-Allow-Credentials : true
//Access-Control-Allow-Methods : GET, POST, OPTIONS
//Access-Control-Allow-Headers : Origin, Content-Type, Accept


function jwtResponse() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');

    fetch(sign_in, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: headers
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed: ' + error.message));
}
