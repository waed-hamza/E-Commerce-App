let initialProducts = [{
    id: 0,
    productName: "t-shirt",
    productDetails: "white t-shirt",
    productPrice: 13.5,
    productImg: "./../Assets/images/t-shirt.png",
    productCategory: "clothes"
},
{
    id: 1,
    productName: "iphone-x",
    productDetails: "gray",
    productPrice: 2000,
    productImg: "./../Assets/images/iphone x.png",
    productCategory: "phones"
}];


let name = document.getElementById("input-name");
let detail = document.getElementById("input-detail");
let price = document.getElementById("input-price");
let image = document.getElementById("input-image");
let category = document.getElementById("input-category");
let allProducts = document.querySelector(".allProducts");
let Containers = document.querySelector(".Containers");
let storedProduct = JSON.parse(localStorage.getItem("storeProducts"));
let addProducts = document.getElementById("add");
let submitForm = document.querySelector(".seller-form");
let popUpForm = document.querySelector('.drop-down-form');
let addStatement = document.querySelector(".addStatement");
let products = storedProduct ? storedProduct : initialProducts;
let productForm = {};
let openForm = false;
let openEditProduct = false;


let addPara = document.createElement("p");
addPara.className = "add-p"
addPara.innerText = "you don't have any product if you want to add product click on Add product";






showProduct()

// open the form from Add button
addProducts.addEventListener('click', function() {
    if (!openForm) {
        popUpForm.style.display = "block";
        openForm = true
    } else {
        popUpForm.style.display = "none";
        openForm = false;
    }
})


// show the new product on the screen
function showProduct() {

    allProducts.innerHTML = "";
    if (products.length == 0) {

        addStatement.style.display = "flex"
        addStatement.appendChild(addPara)

    } else {
        addStatement.style.display = "none"
    }
    products.map(function(product, index) {

        let nameLabel = document.createElement("span");
        let priceLabel = document.createElement("span");

        let categoryLabel = document.createElement("span");
        let Image = document.createElement("img");
        let productContainer = document.createElement("div");
        let data = document.createElement("div");
        let sellerBtn = document.createElement("div");
        let deleteBtn = document.createElement("button");
        let editBtn = document.createElement("button");
        let pContainer = document.createElement("div");

        allProducts.appendChild(productContainer);
        productContainer.className = "product";
        data.className = "data";
        pContainer.className = "container"
        nameLabel.className = "product-content-span";
        Image.className = "product-img";
        priceLabel.className = "product-content-span"
        categoryLabel.className = "product-category-div";
        deleteBtn.innerText = "Delete";
        editBtn.innerText = "Edit";
        editBtn.className = "edit-btn"
        sellerBtn.className = "seller-btn"
        deleteBtn.className = "delete-btn"
        editBtn.className = "edit-btn"
        nameLabel.innerText = product.productName;
        priceLabel.innerText = product.productPrice;

        categoryLabel.innerText = "Category:" + product.productCategory;
        Image.src = product.productImg;


        allProducts.appendChild(productContainer);

        productContainer.appendChild(Image);

        productContainer.appendChild(pContainer);

        pContainer.appendChild(nameLabel);
        pContainer.appendChild(priceLabel);
        pContainer.appendChild(categoryLabel)
        pContainer.appendChild(sellerBtn);


        sellerBtn.appendChild(deleteBtn);
        sellerBtn.appendChild(editBtn);


        //delete product

        deleteBtn.addEventListener('click', function() {
            products.splice(index, 1);
            showProduct();


        });



        // edit the product name and price
        editBtn.addEventListener('click', function() {

            let editName = document.createElement("span");
            let editPrice = document.createElement("span");
            let nameInput = document.createElement("input");
            let priceInput = document.createElement("input");
            let submitEdit = document.createElement("button");
            let editDiv = document.createElement('div')
            submitEdit.innerText = "submit";
            editDiv.className = "edit-div"
            nameInput.value = product.productName;
            priceInput.value = product.productPrice;
            editName.innerText = "Edit Name :";
            editPrice.innerText = "Edit Price :";
            submitEdit.className = "editSubmit"
            if (!openEditProduct) {
                editDiv.appendChild(editName);
                editDiv.appendChild(nameInput);
                editDiv.appendChild(editPrice);
                editDiv.appendChild(priceInput);
                editDiv.appendChild(submitEdit);
                pContainer.appendChild(editDiv);
                openEditProduct = true;
            }

            submitEdit.addEventListener('click', function() {

                product.productName = nameInput.value;
                product.productPrice = priceInput.value;
                nameLabel.innerText = nameInput.value;

                priceLabel.innerText = priceInput.value;
                if (openEditProduct) {
                    editDiv.remove()
                    localStorage.setItem("storeProducts", JSON.stringify(products));
                    openEditProduct = false;

                }
            });

        });
    });
    localStorage.setItem("storeProducts", JSON.stringify(products));


}

// store the information from form to local storage
submitForm.addEventListener('submit', function(event) {

    productForm.productName = name.value;
    productForm.productDetails = detail.value;
    productForm.productPrice = price.value;
    productForm.productImg = image.value;
    productForm.productCategory = category.value;
    products.push(productForm);
    popUpForm.style.display = "none";
    localStorage.setItem("storeProducts", JSON.stringify(products));

    showProduct();

    openForm = false;
    name.value = "";
    detail.value = "";
    price.value = "";
    image.value = "";

});