// Setup Events
document.querySelector('#getText')
        .addEventListener('click',getText);
document.querySelector('#getJSON')
        .addEventListener('click',getJSON);
document.querySelector('#getAPI')
        .addEventListener('click',getAPI);
document.querySelector('#addPost')
        .addEventListener('submit',addPost);


function getAPI(e) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let outHTML = '<h2 class="mb-4">API Post</h2>';
        data.forEach(item => 
            outHTML += `
                <div class="card card-body mb-3">
                    <h3>${item.title}</h3></li>
                    <p>${item.body}</p>
                </div>
                `
        );
        document.querySelector('#output').innerHTML = outHTML;
        }
    )
    .catch(err => console.error(err));
}

function getJSON(e) {
    fetch('data/users.json')
        .then(res => res.json())
        .then(data => {
            let outHTML = '<h2 class="mb-4">JSON</h2>';
            data.forEach(user => 
                outHTML += `
                    <ul class="list-group mb-3">
                        <li class="list-group-item">ID: ${user.id}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                    </ul>
                    `
            );
            document.querySelector('#output').innerHTML = outHTML;
            }
        )
        .catch(err => console.error(err));
}

function getText(e) {
    fetch('data/sample.txt')
        .then(res => res.text())
        .then(data => 
            document.querySelector('#output').innerHTML = data)
        .catch(err => console.error(err));
}

function addPost(e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json' 
            },
            body: JSON.stringify({
                title:title,
                body:body
            })
        }
    )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}