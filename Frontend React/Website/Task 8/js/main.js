var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDes = document.getElementById("productDes");
var tableBody = document.getElementById("tableBody");
var productContainer = [];

function retrieveData() {
    var name = productName.value;
    var price = productPrice.value;
    var category = productCat.value;
    var description = productDes.value;
    product = {
        name: name,
        price: price,
        category: category,
        description: description,
    }
    productContainer.push(product);
    clearInputs();
    createRows();
    displayData();
};

function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCat.value = "";
    productDes.value = "";
}

var box = "";

function createRows() {
    box = "";
    for (let i = 0; i < productContainer.length; i++) {
        box += `
            <tr>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].description}</td>
                <td>
                    <button class="btn btn-danger">Delete</button>
                    <button class="btn btn-success">Update</button>
                </td>
            </tr>
        `;
    }
}

function displayData(){
    tableBody.innerHTML = box;
}
