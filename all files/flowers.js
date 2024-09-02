const flowers = [
    { name: "Rose", price: 15, category: "Rose", city: "Mumbai", image: "https://imgs.search.brave.com/kayn5A3yppEBRtDUKSJ41LPfyqdVmoIiUFhSvUqZ8bA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtcm9z/ZXMtYm91cXVldC1p/bmRvb3JzXzIzLTIx/NTA4NTExODkuanBn/P3NpemU9NjI2JmV4/dD1qcGc" },
    { name: "Single Sunflower Bouquet", price: 12, category: "SunFlower", city: "Bangalore", image: "https://imgcdn.floweraura.com/radiating-sunshine-9781600fl-A.jpg?tr=w-266,dpr-1.5,q-70" },
    { name: "Tulip", price: 10, category: "Tulip", city: "Delhi", image: "https://imgs.search.brave.com/FvY_02ocdPV9MDfIuuHVq9NMk_J23yGO7nuA8DoS1LM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FhL2Zm/L2M1L2FhZmZjNTQ5/ZTU1OTg0ZjM0MzNk/ZjYyNDgyOTUwZTcw/LmpwZw" },
    { name: "Combo pack", price: 12, category: "Orchid", city: "Indore",  image: "https://imgcdn.floweraura.com/DSC_4165.jpg" },
    { name: "Daisies and Greenry bouquet", price: 10, category: "Daisies", city: "Mumbai", image: "https://imgs.search.brave.com/TGDsdH-SntoHM3yR2HW4kC0Jgs7unlcH9P2-uS67_YM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnJpZGVzLmNvbS90/aG1iLzZidlpsMWhB/NDNVWVowbVZjVV9I/dzU2WjB6dz0vMTUw/MHgwL2ZpbHRlcnM6/bm9fdXBzY2FsZSgp/Om1heF9ieXRlcygx/NTAwMDApOnN0cmlw/X2ljYygpL2JyaXR0/YW55aHlhdHRwZXRh/bHNieXBpcGVyLWU3/MjA1ZTVhNGVhYzQy/ZmZhMTQ5MTJhNWUz/Y2I4ZTU4LmpwZWc" },
    { name: "Orchid Bouquet", price: 12, category: "Orchid", city: "Delhi", image: "https://imgs.search.brave.com/cD1GZ82LP5O4PBZoOtXq54YeIRW560ZUSVsxWhwQDSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uZmxvd2VyYXVy/YS5jb20vZmEvcmV2/aWV3X2ltYWdlLzE3/MjI2MDQ5OTRfNTI4/Njg4LmpwZWc" },
    { name: "Pink Rose & Lily", price: 15, category: "Rose", city: "Delhi", image: "https://imgs.search.brave.com/HjSdWvDdVym-iAtSJAYpOyyRFSV029xvP8ZF-ub8b2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LjE4MDBmbG93ZXJz/LmNvbS93Y3NzdG9y/ZS9GbG93ZXJzL2lt/YWdlcy9jYXRhbG9n/LzEwMDU0N3NwZnYx/Y24zeC5qcGc_aGVp/Z2h0PTQ1NiZ3aWR0/aD00MTgmc2hhcnBl/bj1hMC41LHIxLHQx/JmF1dG89d2VicA" },
    
    { name: "Radiant Rays Of Lilies N Mix", price: 12, category: "Lily", city: "Indore", image: "https://imgs.search.brave.com/nH6Yf7B8h1_En6OA2aoraP7l_2pH6AEo51zeHOpTRoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9meWYu/dGFjLWNkbi5uZXQv/aW1hZ2VzL3Byb2R1/Y3RzL2xhcmdlL0Yt/NjY3LmpwZz9hdXRv/PXdlYnAmcXVhbGl0/eT02MCZ3aWR0aD02/OTA" },
    { name: "White Lillies and glass vase", price: 12, category: "Lily", city: "Bangalore", image: "https://imgcdn.floweraura.com/white-lily-n-glass-vase-9893230fl-A_0.jpg?tr=w-266,dpr-1.5,q-70" },
    { name: "The Night Star", price: 12, category: "SunFlower", city: "All", image: "https://imgcdn.floweraura.com/bright-sunflower-blooms-9824890fl-A_0.jpg" },
    { name: "Blue 6 Orchid", price: 12, category: "Orchid", city: "Bangalore", image: "https://imgcdn.floweraura.com/DSC_3928.jpg" },
    { name: "Sunflower Vase", price: 12, category: "SunFlower", city: "Indore", image: "https://imgcdn.floweraura.com/joyful-sunflowers-with-vase-9824900fl-A_0.jpg" },
    { name: "Orchid & Roses", price: 12, category: "Orchid", city: "Delhi",  image: "https://imgcdn.floweraura.com/DSC_4678.jpg" },
    
    { name: "Sunflower", price: 12, category: "SunFlower", city: "Mumbai", image: "https://imgs.search.brave.com/AEXNb0dabGc2xx9QsJjcV61r2d37q-ATtsUtnBL1COk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU2LzA3/L2FmLzU2MDdhZjE5/YzVjYzQzOTc5MDdh/YWYzMTIyMjQ1NmMy/LmpwZw" },

    { name: "Purple Orchid Bouquet", price: 12, category: "Orchid", city: "Indore", image: "https://imgcdn.floweraura.com/1-B_91.jpg" },
    
    { name: "Chamomile", price: 12, category: "Chamomile", city: "Delhi",  image: "https://imgs.search.brave.com/uYjwHO0aI4VeXbyrkwCITpvzA4TBhgKb_BM0GWFI9qY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzRj/L2U0LzgwNGNlNDhj/YjY1YmM4NjIyYTFi/MTBiYzYwMTcyMGIx/LmpwZw" },
    { name: "Midnight Blue", price: 12, category: "Orchid", city: "Indore",  image: "https://imgcdn.floweraura.com/midnight-sun-9781610fl-A.jpg" },
    { name: "Bleeding heart", price: 12, category: "Bleeding heart", city: "Mumbai", image: "https://imgs.search.brave.com/-xip2-3YD2zc76Lnld2nCZ-wmgL1lAGXei40XOC6JpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMwL2Nm/LzAxLzMwY2YwMTJh/ZjA3YzJiZDJkOWIz/MmNlN2IwNzcyOWRh/LmpwZw" },
    { name: "Fish Bowl", price: 12, category: "Orchid", city: "Indore",  image: "https://imgcdn.floweraura.com/orchid-bliss-in-a-fish-bowl-9777020fl-A.jpg" },
    { name: "White Lillies", price: 15, category: "Lily", city: "Delhi", image: "https://imgs.search.brave.com/kj7GJeqrtg8X3EBax-s3jOsrMbLdAq63XZHFvm-nPNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1LzU2/LzQzL2E1NTY0MzRi/MTA5NGVhMTZhYTYx/ZDJmZDRkZmM4MTdi/LmpwZw" },
    // Add more flower data
];

function displayFlowers(filteredFlowers = flowers) {
    const products = document.getElementById('products');
    products.innerHTML = filteredFlowers.map(flower => `
        <div class="item">
            <img src="${flower.image}" alt="${flower.name}">
            <h2>${flower.name}</h2>
            <p>$${flower.price}</p>
            <p>${flower.city}</p>
        </div>
    `).join('');
}

function applyFilters() {
    const category = document.getElementById('category').value;
    const city = document.getElementById('city').value;

    const filteredFlowers = flowers.filter(flower => {
        return (!category || flower.category === category) &&
               (!city || flower.city === city);
    });

    displayFlowers(filteredFlowers);
}

document.addEventListener('DOMContentLoaded', () => displayFlowers());


