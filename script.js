import { arrayPostagens } from "./listasPostagens.js";
const main = document.querySelector('main')


for (let i = 0; i < arrayPostagens.length; i++) {

 const article = document.createElement('article');

  article.innerHTML = `
    <h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>`;

main.appendChild(article)

}


article.id = 'post-1';
console.log(article);

 