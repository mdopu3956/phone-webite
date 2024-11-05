

const handleSearchInput = () => {
    const inputValue = document.getElementById("inputField").value;
    toggleLoader(true)
    loadData(inputValue)
}

const loadData = async (value) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`);
        const { data } = await res.json()
        loadCard(data)
    } catch (e) {
        console.log(e)
    }
}

const loadCard = (data) => {
    const cardContainer = document.getElementById("cardContainer")
    cardContainer.innerHTML = ""
    data.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `<div>
                            <img width="200" src="${item.image}" alt="">
                        </div>
                        <p>${item.brand}</p>
                        <h2>${item.phone_name}</h2>
                        <button>Details</button>`
        cardContainer.appendChild(div)
    });
    toggleLoader(false)
}

const toggleLoader = (state) => {
    const loaderContainer = document.getElementById("loaderContainer")
    if (state) {
        loaderContainer.classList.add("show")
    } else {
        loaderContainer.classList.remove("show")
    }
}



const defaultData = [
    { brand: "Samsung", phone_name: "Galaxy S22 5G", slug: "samsung_galaxy_s22_5g-11253", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg" },
    { brand: "Samsung", phone_name: "Galaxy Tab S8+", slug: "samsung_galaxy_tab_s8+-11342", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s8-plus.jpg" },
    { brand: "Samsung", phone_name: "Galaxy Tab S8 Ultra", slug: "samsung_galaxy_tab_s8_ultra-11274", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s8-ultra.jpg" },
    { brand: "Samsung", phone_name: "Galaxy S22+ 5G", slug: "samsung_galaxy_s22+_5g-11252", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-plus-5g.jpg" },
    { brand: "Samsung", phone_name: "Galaxy Tab S8", slug: "samsung_galaxy_tab_s8-11343", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s8.jpg" },
    { brand: "Samsung", phone_name: "Galaxy S21 FE 5G", slug: "samsung_galaxy_s21_fe_5g-10954", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-fe-5g.jpg" },
    { brand: "Samsung", phone_name: "Galaxy S22 Ultra 5G", slug: "samsung_galaxy_s22_ultra_5g-11251", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg" }
];



window.addEventListener("load", () => {
    const cardContainer = document.getElementById("cardContainer")
    cardContainer.innerHTML = ""
    defaultData.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `<div>
                            <img width="200" src="${item.image}" alt="">
                        </div>
                        <p>${item.brand}</p>
                        <h2>${item.phone_name}</h2>
                        <button>Details</button>`
        cardContainer.appendChild(div)
    });
})
