const beverages = [
    { name: "Coffee", price: 5, category: "hot drinks", image: "https://imgs.search.brave.com/2ttY4y6PR--r1gn5hk1Nl23dzNuaxbur3pgvqufo5hc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNvdXBsZWNvb2tz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNS9MYXR0/ZS1BcnQtMDY2Lmpw/Zw" },
    { name: "Cup Cakes ", price: 3, category: "cake", image: "https://imgs.search.brave.com/OGoRQAPbdw3Ggq_CIF8prcjtin7oPE0cL2GC879Qnio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMC8wOC9jdXBj/YWtlcy0yMmFhMDQ1/LmpwZz9xdWFsaXR5/PTkwJnJlc2l6ZT00/NDAsNDAw" },
    { name: "matcha Caffine ", price: 3, category: "drinks", image: "https://imgs.search.brave.com/d5X55V3Ih64p4hmRl42YtBZeZxDv9f5roUCqkPr1CBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnV0dGVyZWRzaWRl/dXBibG9nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My9JY2VkLU1hdGNo/YS1MYXR0ZS1SZWNp/cGUtMTItNzMxeDEw/MjQuanBn" },
    {name: "Vegie juice", price: 3, category: "juice", image: "https://imgs.search.brave.com/FdnuHMTx_vl0lEz4ywR3tLAKyrELNAf5VjgK7JPwFUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ncmVl/bi1qdWljZS1mb3It/YmVnZ2luZXJzLTE1/OTA2MDU4MTEuanBn/P2Nyb3A9MS4wMHh3/OjAuNjY3eGg7MCww/LjMwNnhoJnJlc2l6/ZT05ODA6Kg" },
   
    { name: "Hot Chocolate ", price: 3, category: "hot drinks", image: "https://imgs.search.brave.com/05aaGr70pvaqC24wURuz9S72Mp75uS_v-W_7GFkaAYI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNvdXBsZWNvb2tz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS9WYW5p/bGxhLUNoYWktTGF0/dGUtMDAzLmpwZw" },
    
    { name: "Strawberry Cake ", price: 3, category: "cake", image: "https://imgs.search.brave.com/GqQGcfSk75wtlmZaCjWZaI1F23lstKmou4W9yGBovgY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVr/aXRjaGVuY29tbXVu/aXR5Lm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNC9j/YWtlLXJlY2lwZXMt/MS5qcGc" },
    
    { name: "Green Tea ", price: 3, category: "hot drinks", image: "https://imgs.search.brave.com/K8EBVVkLNYLIZVIkat5V40dr43wc_gS7JqP69wTPzo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyNC8wMy9HcmVl/bi10ZWE0NDAtYWY3/ZGQxNy5qcGc_cXVh/bGl0eT05MCZyZXNp/emU9NDQwLDQwMA" },
    { name: "Green Tea ", price: 3, category: "hot drinks", image: "https://imgs.search.brave.com/K8EBVVkLNYLIZVIkat5V40dr43wc_gS7JqP69wTPzo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyNC8wMy9HcmVl/bi10ZWE0NDAtYWY3/ZGQxNy5qcGc_cXVh/bGl0eT05MCZyZXNp/emU9NDQwLDQwMA" },
    { name: "Artistic Chocolate Pleasure Cake", price: 5, category: "cake", image: "https://imgcdn.floweraura.com/DSC_5925.jpg" },
    { name: "Buttermilk with Blackberries ", price: 3, category: "drinks", image: "https://imgs.search.brave.com/R23oBK9UmdXS42oEOPntD5-IwLDRGkJDIYz5LHFUyCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cXVpY2stZ2VybWFu/LXJlY2lwZXMuY29t/L2ltYWdlcy9idXR0/ZXJtaWxrLXdpdGgt/YmxhY2tiZXJyaWVz/LTYwMC0yMDIwLmpw/Zw" },
    
    { name: "Iced Latte", price: 3, category: "drinks", image: "https://imgs.search.brave.com/6LCGKh452Bebk09P9YK_2oQNGUnrAq6LRe4BtVqzsrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbmVy/ZGNvb2tzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/OC9wdW1wa2luX2Ny/ZWFtX2NvbGRfYnJl/dzExLTM2MHg0ODAu/anBn" },
    { name: "Orange Juice", price: 3, category: "juice", image: "https://imgs.search.brave.com/fa2yZf6FdYAbNVuBIys7_kJenN_LWRd5GxJpyTWZEXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU0/OTAyMzI3L3Bob3Rv/L29yYW5nZS1qdWlj/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZEYtRUxrQ0FL/eGlHVlMwS0NwZE9E/UnBXdGgybkVqMVRI/amtaZk1YNFgyWT0" },
    
    { name: " Spinach smoothie", price: 3, category: "smoothie", image: "https://imgs.search.brave.com/XBU10Yop7GAVHpUbcL8EI7UZ55SINtB6GAPeQL9AfS0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcw/NTA5ODc2L3Bob3Rv/L3NwaW5hY2gtc21v/b3RoaWUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXhLYTNF/emhFYTFpMS1WekRP/NTk5ZzBpZU1sRWNY/VnJWWTBvQnEtbXZq/RVk9" },
    { name: "Kiwi smoothie", price: 3, category: "smoothie", image: "https://imgs.search.brave.com/x2ayQKYzArMdTI2xMB9HC1c9yzdF49z9PeXDFXCGEV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzk3LzY5LzU0/LzM2MF9GXzg5NzY5/NTQzM19PZkpFQmt1/bW5IbldLMjJqb04y/a0dWNkQ2ZWJWVXhq/cy5qcGc" },
    
    { name: "Two cups of coffee and some cereal ", price: 3, category: "snacks", image: "https://imgs.search.brave.com/kmI_zzuEo7XUE9EusjEw6O5b9WQRGmrXMATIEvdZ0Yk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyLzQ3/L2MwLzgyNDdjMGU0/Nzg4MDU2NmEwYzk1/MGY3ODdmY2QxMjZm/LmpwZw" },
    { name: "Vanilla Milkshake", price: 3, category: "milkshakes", image: "https://imgs.search.brave.com/U_MZGsXgYToivqV9KkgpxXmUbEVH7Ojk1XqPO40ZLws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTgwMTI3L3Bob3Rv/L21pbGtzaGFrZS12/YW5pbGxhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz11eDB6/ak0ydzd1aUd5bzlt/LXRPUEZoYnpCSHJ0/Wm85Zm9nVXJmWXRj/LUhJPQ" },
    
    { name: "Coconut Water", price: 3, category: "drinks", image: "https://imgs.search.brave.com/LYCEraXgFtji_cfZ9Otf79i9N4mgKcluDU5ITcL02Ik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk4/MDU0NTI4L3Bob3Rv/L2NvY29udXQtd2F0/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU9zUVBFY01z/cF9BcmtUWXlaT1Rv/a04zbVRmWWRSNEZK/dzJvQW5pN016bG89" },
    { name: "Red velvet ", price: 3, category: "cake", image: "https://imgs.search.brave.com/V2jDjiqYrdWqo7sNFqR__ORwMQJbpM5EaUi8vkHy-dM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA5L1JlZC1WZWx2/ZXQtQ2FrZS5qcGc" },
    { name: "Cappuccino", price: 5, category: "hot drinks", image: "https://imgs.search.brave.com/g2-W1WzcWQ9OdOL1RiM0HIqvqIXanX1RfFxI1Buudqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzk0LzgyLzg3/LzM2MF9GXzE5NDgy/ODcwM192dU5qejhP/dGI2NlZmSTRyUXln/OXRCVVB1R0F1Z3NV/Ui5qcGc" },
    { name: "Choco Milkshake", price: 3, category: "milkshakes", image: "https://imgs.search.brave.com/kG3ycqNLxmJLrT-1hl4RMmLDzBWLPg7WbmnEgBQ08xo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NTgwMTc3L3Bob3Rv/L2Nob2NvbGF0ZS1t/aWxrc2hha2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW8y/aVpvZ2U4RFUzZmNn/b2pqd2pNbnJJS0tW/bVdfZGdFSS1RMmlr/UjBOXzQ9" },

    // Add more beverage data
];

function displayBeverages(filteredBeverages = beverages) {
    const products = document.getElementById('products');
    products.innerHTML = filteredBeverages.map(beverage => `
        <div class="item">
            <img src="${beverage.image}" alt="${beverage.name}">
            <h2>${beverage.name}</h2>
            <p>$${beverage.price}</p>
        </div>
    `).join('');
}

function applyFilters() {
    const cost = document.getElementById('beverage-cost').value;
    const category = document.getElementById('beverage-category').value;

    const filteredBeverages = beverages.filter(beverage => {
        return (!cost || beverage.price <= cost) &&
               (!category || beverage.category === category);
    });

    displayBeverages(filteredBeverages);
}

document.addEventListener('DOMContentLoaded', () => displayBeverages());