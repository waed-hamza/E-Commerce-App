let storedCarts = JSON.parse(localStorage.getItem("carts"));




let carts = storedCarts ? storedCarts : [];

// Products Container
let productsContainer = document.getElementsByClassName("products-container")[0];

//container div for all items
// let allProducts = document.getElementsByClassName("allProducts")[0];
// let container = document.getElementsByClassName("container")[0];

let totalprice = document.getElementById("totalPrice");
let total = 0;
showCarts();

function showCarts() {
    // allProducts.innerHTML = "";
    totalprice.textContent = "Total price : " + 0;

    // carts.forEach((cartItem , i)=> {

    //     //creat a dive for every item
    //     let productDiv = document.createElement("div");
    //     productDiv.className = "product";

    //     //for the item image
    //     let cardImg = document.createElement("img");
    //     cardImg.src = cartItem.productImg;
    //     productDiv.appendChild(cardImg);
    //     cardImg.className = "cardImg";

    //     //prouduct name
    //     let productName = document.createElement("span");
    //     productName.textContent = cartItem.productName;
    //     productName.className = "productName";
    //     productDiv.appendChild(productName);

     
    //     //creat continer dive for the delete button and the price
    //     let priceAndDeleteContainer = document.createElement("div");
    //     productDiv.appendChild(priceAndDeleteContainer);
    //     priceAndDeleteContainer.className = "priceAndDelete";

    //     //product price
    //     let productPrice = document.createElement("h3");
    //     productPrice.textContent = cartItem.productPrice;
    //     productPrice.className = "productPrice";
    //     priceAndDeleteContainer.appendChild(productPrice);

    //     //delete button
    //     let deleteButton = document.createElement("button");
    //     deleteButton.textContent = "Delete";
    //     deleteButton.className = "deleteButton";
    //     priceAndDeleteContainer.appendChild(deleteButton);


    //     //product category
    //     let productCategory = document.createElement("span");
    //     productCategory.textContent = cartItem.productCategory;
    //     productCategory.className = "productCategory";
    //     productDiv.appendChild(productCategory);

  

    //     allProducts.appendChild(productDiv);



    //     //delete items
    //     deleteButton.addEventListener("click", function () {
      
    //         let confirmationResults = confirm(
    //             "Are you sure you want to delete this product?"
    //         );
    //         if (confirmationResults) {
    
    //             carts.splice(i, 1);
    //             localStorage.setItem("carts", JSON.stringify(carts));
    //             showCarts(); 
    //         }
           
    //     });

    // });


    productsContainer.innerHTML = "";
    
    carts.map(function(cartItem, i){

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


        // Delete button
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
        add_button_span.innerText = "Delete";
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


        //delete items
        add_button_a.addEventListener("click", function () {
    
            let confirmationResults = confirm(
                "Are you sure you want to delete this product?"
            );
            if (confirmationResults) {

                carts.splice(i, 1);
                localStorage.setItem("carts", JSON.stringify(carts));
                showCarts(); 
            }
            
        });
    });
    
    total = carts.reduce(function(accumulator, currentValue) {
 
        return accumulator + currentValue.productPrice;
    
      },0)
      
 
      totalprice.textContent = "Total price : " + total;
 
    localStorage.setItem("carts", JSON.stringify(carts));
}

// container.appendChild(allProducts);


// Search bar
// Name Array
let nameArray = [];
carts.map(function(cartItem,i){
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
        for(let j=0; j<carts.length; j++){
            if(carts[j].productName != nameArray[i]){
                let className = "."+carts[j].productName;
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