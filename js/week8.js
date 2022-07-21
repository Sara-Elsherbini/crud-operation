
document.addEventListener('click', function (eventInfo) {
    sayHello(eventInfo);
})
function sayHello(eventInfo) {
    console.log(eventInfo.clientX);
    console.log(eventInfo.clientY);

}

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var product;
console.log(productNameInput, productPriceInput, productCategoryInput, productDescInput);

var productList;

if (localStorage.getItem("ourProducts") == null) {
    productList = [];
}
else {
    productList = JSON.parse(localStorage.getItem("ourProducts"));
    displayProduct();
}

/* localStorage.getItem();*/

function addProduct() {
    product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    };
    productList.push(product);
    localStorage.setItem("ourProducts", JSON.stringify(productList))
    displayProduct();
    /* clearForm() */
}
function displayProduct() {
    var cartoona = "";
    for (var i = 0; i < productList.length; i++) {
        cartoona +=
            `<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td><button  class="btn btn-warning">update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
    console.log(cartoona);
}
function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}


/* 
var productContainer =
[
{name:'toshiba',price:9000,category:'mobile',desc:'good'},
{name:'NOkia',price:900,category:'phone',desc:'very good'},
{name:'lenevo',price:5000,category:'taptop',desc:'excellent'},
{name:'toshiba',price:9000,category:'mobile',desc:'very bad'},
{name:'samsung',price:3000,category:'mobile',desc:'bad'},
{name:'toshiba',price:9000,category:'mobile',desc:'good'},
{name:'NOkia',price:900,category:'phone',desc:'very good'},
{name:'lenevo',price:5000,category:'taptop',desc:'excellent'},
{name:'toshiba',price:9000,category:'mobile',desc:'very bad'},
{name:'samsung',price:3000,category:'mobile',desc:'bad'},
] */

function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProduct();

}

function searchProduct()
{

    var term = "sam";
    var wantedProducts=[];
    for (var i = 0; i < productList.length; i++)
    {
        /* if (productList[i].name.toLowerCase() == term.toLocaleLowerCase()) */
        if (productList[i].name.toLowerCase().includes(term.toLocaleLowerCase()))
        {
            wantedProducts.push(productList[i]);
        }
    }
    var cartoona = "";
    for (var i = 0; i <wantedProducts.length; i++) {
        cartoona +=
            `<tr>
        <td>${i}</td>
        <td>${wantedProducts[i].name}</td>
        <td>${wantedProducts[i].price}</td>
        <td>${wantedProducts[i].category}</td>
        <td>${wantedProducts[i].desc}</td>
        <td><button  class="btn btn-warning">update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
}
searchProduct();