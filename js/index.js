const url = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/posts?_embeded";
// const container = document.querySelector(".post");
// const title = document.querySelector(".title");

// async function getPost() {
//   const respons = await fetch(url);
//   const result = await respons.json();

//   const post = result[0];
//   console.log(post);
//   createHtml(post);
//   parsePost(post);
// }

// getPost();

// function createHtml(post) {
//   title.innerHTML = `<h1>${post.title.rendered}</h1>`;
//   container.innerHTML += post.content.rendered;
// }
// function parsePost(post) {
//   const parser = new DOMParser();
//   const parsedPost = parser.parseFromString(post.content.rendered, `text/html`);
//   console.log(parsedPost);
//   const text = parsedPost.querySelectorAll("p");
//   console.log(text);
// }
