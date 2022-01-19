const posts = [
  {title:'Post One', body:'This is post one.'},
  {title:'Post Two', body:'This is post two.'}
]

function getPost() {
  setTimeout(() => {
      let outStr = '<ul>';
      posts.forEach( (post, i) => {
        outStr += `<li id="${i+1}">${post.title}</li>`
      });
      outStr += '</ul>';
      document.body.innerHTML = outStr;
    }, 1000);
} 

function createPost(post, callback) {
  setTimeout(() => {
      posts.push(post);
      callback();
    }, 2000);
}

getPost();
createPost({title:'Post Three', body:'This is post three.'}, getPost);