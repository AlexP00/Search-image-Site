const accessKey = "FZL7fJTfzU1KvIoMyO6KDBmT6ToUlTzNGL8vnDcirJY";

const form = document.getElementById("search-form");
const input = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const button = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;


async function searchImages() {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=
    ${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    button.style.display = "block"
};

form.addEventListener("submit" ,(e) => {
    e.preventDefault();
    page = 1 ;
    searchImages();
});

button.addEventListener("click",() => {
    page++;
    searchImages();
})