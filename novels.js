const novels = [
    { title: "Verity", author: "Colleen Hoover", genre: "Romance", price: 10, year: 2021, image: "https://img1.od-cdn.com/ImageType-400/5822-1/%7BCA6837B5-AD4E-4FCB-8240-04D17AA44A33%7DIMG400.JPG" },
    { title: "Ugly Love", author: "Colleen Hoover", genre: "Romance", price: 12, year: 2015, image: "https://img1.od-cdn.com/ImageType-400/0439-1/%7B770E8B92-26D3-46C1-8A1B-6DC44F73F434%7DIMG400.JPG" },
    { title: "It Ends With Us", author: "Colleen Hoover", genre: "Fiction", price: 15, year: 2022, image: "https://img1.od-cdn.com/ImageType-400/0439-1/%7B02538BFD-3E57-409F-B1D3-1B698003AD85%7DIMG400.JPG" },
    { title: "It Starts With Us", author: "Colleen Hoover", genre: "Romance", price: 10, year: 2021, image: "https://img1.od-cdn.com/ImageType-400/0439-1/%7B1EC32795-99CC-4941-B562-BCC4FF128786%7DIMG400.JPG" },
    { title: "Twisted Love", author: "Ana Huang", genre: "Romance", price: 12, year: 2023, image: "https://img1.od-cdn.com/ImageType-400/5822-1/%7B5C041A41-3591-4714-A41F-4D85F1018F3A%7DIMG400.JPG" },
    { title: "Twisted Games", author: "Ana Huang ", genre: "Fiction", price: 15, year: 2023, image: "https://img1.od-cdn.com/ImageType-400/9161-1/%7B077D3A90-1AAD-47B7-BE4E-BD41623CD047%7DIMG400.JPG" },
    { title: "Twisted Hate", author: "Ana Huang", genre: "Romance", price: 12, year: 2024, image: "https://img1.od-cdn.com/ImageType-400/5822-1/%7B4C4319E3-FF8A-419E-836B-2A3F96E131C7%7DIMG400.JPG" },
    { title: "Twisted Lies", author: "Ana Huang ", genre: "Fiction", price: 15, year: 2024, image: "https://img1.od-cdn.com/ImageType-400/9161-1/%7B2D1AB3E5-D79A-46BA-A760-1A521789B82A%7DIMG400.JPG" },
    { title: "The Love Hypothesis", author: "Ali Hazelwood ", genre: "Romance", price: 12, year: 2021, image: "https://img1.od-cdn.com/ImageType-400/1523-1/%7BE1C38BAE-F594-4B88-9259-E15BC8280682%7DIMG400.JPG" },
    { title: "If He Had Been with Me", author: "Laura Nowlin", genre: "Fiction", price: 15, year: 2013, image: "https://img1.od-cdn.com/ImageType-400/0174-1/C95/73A/CB/%7BC9573ACB-915F-481A-A878-94CC62FC4802%7DImg400.jpg" },
    { title: "If Only I Had Told Her", author: "Laura Nowlin ", genre: "Romance", price: 12, year: 2024, image: "https://img1.od-cdn.com/ImageType-400/0174-1/%7B5EBB8350-67B1-45FF-B8FF-82724A29E285%7DIMG400.JPG" },
   
    { title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", price: 15, year: 2020, image: "https://img1.od-cdn.com/ImageType-400/1523-1/%7BFCE67F40-D999-4A62-91C9-3C4A5ECDB00E%7DIMG400.JPG" },
    // Add more novel data
];
function displayNovels(filteredNovels = novels) {
    const products = document.getElementById('products');
    products.innerHTML = filteredNovels.map(novel => `
        <div class="item">
            <img src="${novel.image}" alt="${novel.title}">
            <h2>${novel.title}</h2>
            <p>${novel.author}</p>
            <p>$${novel.price}</p>
            <p>${novel.year}</p>
        </div>
    `).join('');
}

function applyFilters() {
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const genre = document.getElementById('genre').value;

    const filteredNovels = novels.filter(novel => {
        return (!author || novel.author.includes(author)) &&
               (!price || novel.price <= price) &&
               (!genre || novel.genre.includes(genre));
    });

    displayNovels(filteredNovels);
}

document.addEventListener('DOMContentLoaded', () => displayNovels());