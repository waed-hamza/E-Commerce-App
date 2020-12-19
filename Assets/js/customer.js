let storedCarts = JSON.parse(localStorage.getItem("carts"));
let storedProduct = JSON.parse(localStorage.getItem("storeProducts"));


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
storedProduct = storedProduct ? storedProduct : initialProducts;
 let carts = storedCarts ? storedCarts : [];

// Products Container
let productsContainer = document.getElementsByClassName("products-container")[0];

showCarts();

function showCarts() {

    productsContainer.innerHTML = "";

    storedProduct.map(function(cartItem, i) {

        let product_div = document.createElement('div');
        product_div.className = "product-div";
        let product_category = cartItem.productCategory;
        let product_name = cartItem.productName;
        product_div.className = "product-div " + product_category + " " + product_name;
        productsContainer.appendChild(product_div);


        let product__div = document.createElement('div');
        product__div.className = "product--div";
        product_div.appendChild(product__div);


        let product___div = document.createElement('div');
        product___div.className = "product---div";
        product__div.appendChild(product___div);

        // Product Image
        let product_img_div = document.createElement('div');
        product_img_div.className = "product-img-div";
        product___div.appendChild(product_img_div);

        let product_img = document.createElement('img');
        product_img.className = "product-img";
        let imgSrc = cartItem.productImg;
        product_img.setAttribute("src", imgSrc);
        product_img_div.appendChild(product_img);


        // Product Name Div
        let product_name_div = document.createElement('div');
        product_name_div.className = "product-category-div";
        product___div.appendChild(product_name_div);

        let product_name_span = document.createElement('span');
        product_name_span.className = "product-content-span";
        let product_name__span = cartItem.productName;
        let product_name_span_text = document.createTextNode(product_name__span);
        product_name_span.appendChild(product_name_span_text);
        product_name_div.appendChild(product_name_span);


        // Content Div
        let product_content_div = document.createElement('div');
        product_content_div.className = "product-content-div";
        product___div.appendChild(product_content_div);


        // Price
        let product_content__div = document.createElement('div');
        product_content__div.className = "product-content--div";
        product_content_div.appendChild(product_content__div);

        let product_content_span = document.createElement('span');
        product_content_span.className = "product-content-span";
        let product_content__span = cartItem.productPrice;
        let product_content_span_text = document.createTextNode(product_content__span);
        product_content_span.innerText = "$";
        product_content_span.appendChild(product_content_span_text);
        product_content__div.appendChild(product_content_span);


        // Add button
        let add_button = document.createElement('div');
        add_button.className = "header-btns--div";
        product_content_div.appendChild(add_button);

        let add_button_a = document.createElement('a');
        add_button_a.setAttribute('class', 'header-btns-a add-btn');
        add_button.appendChild(add_button_a);

        let add_button_a_div = document.createElement('div');
        add_button_a_div.className = "header-btns-a-div";
        add_button_a.appendChild(add_button_a_div);

        let add_button_span = document.createElement('span');
        add_button_span.innerText = "Add";
        add_button_a_div.appendChild(add_button_span);


        // Category Div
        let product_category_div = document.createElement('div');
        product_category_div.className = "product-category-div";
        product___div.appendChild(product_category_div);

        let product_category_span = document.createElement('span');
        let product_category__span = cartItem.productCategory;
        product_category_span.innerText = "Category: ";
        let product_category_span_text = document.createTextNode(product_category__span);
        product_category_span.appendChild(product_category_span_text);
        product_category_div.appendChild(product_category_span);

        addedCart(cartItem, i);
    });
}

// When Add Button Pressed, push item on carts array and save it on local storage
function addedCart(cartItem, i) {
    document.getElementsByClassName("add-btn")[i].addEventListener('click', function() {
        // check if cart already added
        if (!(carts.includes(cartItem))) {
            carts.push(cartItem);
        }

        // local Storage
        localStorage.setItem("carts", JSON.stringify(carts));
    });
}




// Filters & Display

// Display
//  Set Grid Display as default
document.getElementsByClassName("fa--list")[2].setAttribute("style", "color: #595b83;");

// When display button clicked, change its color
for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("display-list-div")[i].addEventListener('click', function() {
        document.getElementsByClassName("fa--list")[i].setAttribute("style", "color: #595b83;");

        // Other buttons returns to its original color
        for (let j = 0; j < 3; j++) {
            if (j != i) {
                document.getElementsByClassName("fa--list")[j].setAttribute("style", "color: #060930;");
            }
        }
        // Filter by category
        if (i == 0) {
            let dropdown_content = document.getElementById("myDropdown");
            dropdown_content.innerHTML = "";
            // Show dropdown
            document.getElementById("myDropdown").classList.toggle("show");

            // First dropdown element: All Categories
            let dropdown_a_all = document.createElement('a');
            dropdown_a_all.className = "dropdown-a";
            dropdown_a_all.innerText = "All";
            dropdown_content.appendChild(dropdown_a_all);

            // Category Array
            let categories = [];
            for (let k = 0; k < storedProduct.length; k++) {
                if (!(categories.includes(storedProduct[k].productCategory))) {
                    categories.push(storedProduct[k].productCategory);
                }
            }

            // Dropdown Content: get Other Categories from category array
            for (let k = 0; k < categories.length; k++) {
                let dropdown_a = document.createElement('a');
                dropdown_a.className = "dropdown-a";
                dropdown_a.innerText = categories[k];
                dropdown_content.appendChild(dropdown_a);
            }

            // Select Specific Category
            for (let k = 0; k <= categories.length; k++) {
                document.getElementsByClassName("dropdown-a")[k].addEventListener('click', function() {
                    // All Categories
                    if (k === 0) {
                        showCarts();
                    } else { //Other categories
                        showCarts();
                        for (let j = 0; j < storedProduct.length; j++) {
                            if (storedProduct[j].productCategory != categories[k - 1]) {
                                let classCategory = "." + storedProduct[j].productCategory;
                                console.log(classCategory);
                                document.querySelectorAll(classCategory).forEach(function(a) {
                                    a.remove();
                                });
                            }
                        }
                    }
                });
            }
        }
        // Display list
        if (i == 1) {
            document.getElementsByClassName("products-container")[0].style.display = "flex";
            document.getElementsByClassName("products-container")[0].style.flexDirection = "column";
            document.getElementsByClassName("products-container")[0].style.alignItems = "center";
        } // Display grid
        else if (i == 2) {
            productsContainer.style.display = "inline-block";
        }
    });
}


// Filters
document.getElementsByClassName("filter--div")[0].addEventListener('click', function() {
    // First filter Low->High
    if (document.getElementsByClassName("filter-radio")[0].checked) {
        // Compare Function to sort array ascending
        function compare(a, b) {
            if (a.productPrice > b.productPrice) {
                return 1;
            } else if (a.productPrice < b.productPrice) {
                return -1;
            }
        }
        storedProduct.sort(compare);
        showCarts();
    }

    // Second filter High->Low
    if (document.getElementsByClassName("filter-radio")[1].checked) {
        // Compare function to sort array descending
        function compare(a, b) {
            if (a.productPrice > b.productPrice) {
                return -1;
            } else if (a.productPrice < b.productPrice) {
                return 1;
            }
        }
        storedProduct.sort(compare);
        showCarts();
    }
}); 


// Search bar
// Name Array
let nameArray = [];
storedProduct.map(function(cartItem,i){
    if(!(nameArray.includes(cartItem.productName))){
        nameArray.push(cartItem.productName);
    }
});

// create li and a elements
for(let i=0; i<nameArray.length; i++){
    let li = document.createElement('li');
    document.getElementById("suggestions-list").appendChild(li);
    let a = document.createElement('a');
    a.className = "a-search";
    a.innerText = nameArray[i];
    li.appendChild(a);

    // Select search items
    document.getElementsByClassName("a-search")[i].addEventListener('click', function(){
        showCarts();
        for(let j=0; j<storedProduct.length; j++){
            if(storedProduct[j].productName != nameArray[i]){
                let className = "."+storedProduct[j].productName;
                document.querySelectorAll(className).forEach(function(a){
                    a.remove();
                });
            }
        }
    });
}
// Search Suggestions
document.getElementById("search-input").addEventListener("input", function(){
    // Show Options
    document.getElementById("suggestions-list").style.display = "block";
    // If Input Empty hide options
    if(document.getElementById("search-input").value == ""){
        document.getElementById("suggestions-list").style.display = "none";
    }

    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("suggestions-list");
    li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    // When x icon clicked close suggestions
    document.getElementsByClassName("fa--times")[0].addEventListener('click', function(){
        document.getElementById("suggestions-list").style.display = "none";
        document.getElementById("search-input").value = "";
    });    
});