let products = JSON.parse(
    localStorage.getItem(
        "meticProducts"
    )
) || [

{
    name:"Oversized Tee",
    status:"In Design",
    cost:"£12",
    price:"£35"
},

{
    name:"Crop Tank",
    status:"Testing",
    cost:"£10",
    price:"£28"
},

{
    name:"Hoodie",
    status:"Ready",
    cost:"£20",
    price:"£55"
}

];

const grid =
document.getElementById(
    "productGrid"
);

const searchInput =
document.getElementById(
    "searchInput"
);

function renderProducts(){

    const searchTerm =

    searchInput
    ? searchInput.value.toLowerCase()
    : "";

    const filteredProducts =

    products.filter(product =>

        product.name
        .toLowerCase()
        .includes(searchTerm)

    );

    if(filteredProducts.length === 0){

        grid.innerHTML = `

        <div class="empty-state">

            <h2>
                No products found
            </h2>

        </div>

        `;

        return;
    }

    grid.innerHTML = "";

    filteredProducts.forEach(
        (product,index) => {

            const costValue =
            parseFloat(
                product.cost.replace(
                    "£",
                    ""
                )
            ) || 0;

            const priceValue =
            parseFloat(
                product.price.replace(
                    "£",
                    ""
                )
            ) || 0;

            const profit =
            priceValue - costValue;

            const card =
            document.createElement(
                "div"
            );

            card.classList.add(
                "product-card"
            );

            card.innerHTML = `
<div class="product-image-wrap">

    ${product.image
? `<img class="product-image" src="${product.image}" alt="${product.name}">`
: `<div class="product-placeholder"></div>`
}

</div>

<h3>${product.name}</h3>

<p>${product.status}</p>

<div class="product-meta">

    <span>${product.cost}</span>

    <span>${product.price}</span>

</div>
`;

            grid.appendChild(
                card
            );

        }

    );

}

renderProducts();

if(searchInput){

    searchInput.addEventListener(
        "input",
        renderProducts
    );

}

const addBtn =
document.getElementById(
    "addProductBtn"
);

const modal =
document.getElementById(
    "productModal"
);

if(addBtn && modal){

    addBtn.addEventListener(
        "click",
        () => {

            modal.style.display =
            "flex";

        }
    );

}

function addProduct(){

    const name =
    document.getElementById(
        "productName"
    ).value;

    const cost =
    document.getElementById(
        "productCost"
    ).value;

    const price =
    document.getElementById(
        "productPrice"
    ).value;

    const status =
    document.getElementById(
        "productStatus"
    ).value;

    if(
        !name ||
        !cost ||
        !price
    ){
        alert(
            "Fill all fields."
        );
        return;
    }

    products.push({

    name,
    cost:`£${cost}`,
    price:`£${price}`,
    status,
    image

});

    localStorage.setItem(

        "meticProducts",

        JSON.stringify(
            products
        )

    );

    modal.style.display =
    "none";

    renderProducts();

}

function deleteProduct(index){

    products.splice(
        index,
        1
    );

    localStorage.setItem(

        "meticProducts",

        JSON.stringify(
            products
        )

    );

    renderProducts();

}

const savedTheme =
localStorage.getItem(
    "theme"
);

if(savedTheme){

    document.body.classList.add(
        savedTheme
    );

}
const image =
document.getElementById(
    "productImage"
).value;

function exportProducts(){

    let csv =

    "Name,Status,Cost,Price\n";

    products.forEach(product => {

        csv +=

        `${product.name},`

        +

        `${product.status},`

        +

        `${product.cost},`

        +

        `${product.price}\n`;

    });

    const blob =

    new Blob(

        [csv],

        {

            type:"text/csv"

        }

    );

    const url =

    URL.createObjectURL(
        blob
    );

    const a =

    document.createElement(
        "a"
    );

    a.href = url;

    a.download =

    "metic-products.csv";

    a.click();

}