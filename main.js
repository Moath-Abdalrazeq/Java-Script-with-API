const fetchAndDisplayData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const postList = document.getElementById("postList");
      data.forEach((post) => {
        const liElement = document.createElement("div");

        liElement.innerHTML = `
            <strong>Title:</strong> ${post.title}<br><strong>Body:</strong> ${post.body}
                `;
        postList.appendChild(liElement);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};

document.addEventListener("DOMContentLoaded", fetchAndDisplayData);
