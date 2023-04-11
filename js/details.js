import { fetchDetailedPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { renderPost } from "./render-posts/render-posts.js";
import { renderCardPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { validateForm } from "./functions/validateForm.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const form = document.querySelector("form");

toggleMenu();

// fetchDetailedPost(id).then((post) => renderPost(post));

fetchPosts()
  .then((posts) => renderCardPosts(posts))
  .catch((error) => console.error(error));

const displayPost = async () => {
  try {
    const post = await fetchDetailedPost(id);
    renderPost(post);
    console.log(post);
  } catch (error) {}
};

displayPost();

validateForm();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // form.reset();
  // msgReceived();

  const [name, email, comment] = event.target.elements;
  postComment(name, email, comment);
});

async function postComment(name, email, comment) {
  const data = JSON.stringify({
    post: id,
    author_name: name.value,
    author_email: email.value,
    content: comment.value,
  });
  const url = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/comments?post=" + id;

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const result = response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
