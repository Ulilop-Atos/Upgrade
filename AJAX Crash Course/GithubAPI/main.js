// Event for the button
document.getElementById('btn-github').addEventListener('click',loadUsers);

// String manipulation for better format
String.prototype.toProperCase = function () {
    return this.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

// Transform a user to a readable html
function userToHTML(user) {
    return `
    <div style="flex: 110px;">
        <a href="${user.html_url}" style="text-decoration: none; color: black;">
            <img src="${user.avatar_url}" alt="${user.login.toProperCase()} avatar" width="100px">
            <h2>${user.login.toProperCase()}</h2>
        </a>
    </div>`;
}

// Load Github Users
function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if (this.status == 200) {
            let htmlForDiv = '';
            const users = JSON.parse(this.responseText);
            console.log(`Got ${users.length} users`);
            users.forEach(user => {
                htmlForDiv += userToHTML(user);
            });
            document.getElementById('users').innerHTML = htmlForDiv;
        }
    };

    xhr.onerror = function() {
        if (this.status == 200) {
            console.error(this.responseText);
        }
    };

    xhr.send();
}