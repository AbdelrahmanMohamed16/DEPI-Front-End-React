var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDes = document.getElementById("productDes");
var tableBody = document.getElementById("tableBody");
var addAndUpdateBtn = document.getElementById("addAndUpdateBtn");
var currentIndex = 0;
var productContainer = [];

if (localStorage.getItem("products")) {
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayData(productContainer);
}
function action() {
  console.log(addAndUpdateBtn.innerHTML == "Add Product");
  console.log(addAndUpdateBtn.innerHTML == "Update Product");
  console.log(validateData(productName, productName.value, /^[A-Z][a-z]{3,}$/));
  console.log(validateData(productPrice, productPrice.value, /^[0-9]{1,}$/));
  console.log(validateData(productCat, productCat.value, /^[A-Z][a-z]{3,}$/));
  console.log(validateData(productDes, productDes.value, /^[A-Z][a-z]{3,}$/));
  if (
    addAndUpdateBtn.innerHTML == "Add Product" &&
    validateData(productName, productName.value, /^[A-Z][a-z]{3,}$/) &&
    validateData(productPrice, productPrice.value, /^[0-9]{1,}$/) &&
    validateData(productCat, productCat.value, /^[A-Z][a-z]{3,}$/) &&
    validateData(productDes, productDes.value, /^[A-Z][a-z]{3,}$/)
  ) {
    addProduct();
    clearInputs();
  } else if (
    addAndUpdateBtn.innerHTML == "Update Product" &&
    validateData(productName, productName.value, /^[A-Z][a-z]{3,}$/) &&
    validateData(productPrice, productPrice.value, /^[0-9]{1,}$/) &&
    validateData(productCat, productCat.value, /^[A-Z][a-z]{3,}$/) &&
    validateData(productDes, productDes.value, /^[A-Z][a-z]{3,}$/)
  ) {
    updateProduct(currentIndex);
    clearInputs();
  } else {
    console.log("Enter a Valid Data");
  }
}
function addProduct() {
  var name = productName.value;
  var price = productPrice.value;
  var category = productCat.value;
  var description = productDes.value;
  product = {
    name: name,
    price: price,
    category: category,
    description: description,
  };
  productContainer.push(product);
  localStorage.setItem("products", JSON.stringify(productContainer));
  clearInputs();
  displayData(productContainer);
}

function clearInputs() {
  productName.value = "";
  productPrice.value = "";
  productCat.value = "";
  productDes.value = "";
}

function displayData(data) {
  var box = "";
  for (let i = 0; i < data.length; i++) {
    box += `
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].name}</td>
                <td>${data[i].price}</td>
                <td>${data[i].category}</td>
                <td>${data[i].description}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteProduct(${i});">Delete</button>
                    <button class="btn btn-warning" onclick="retrieveProductData(${i});">Update</button>
                </td>
            </tr>
        `;
  }
  tableBody.innerHTML = box;
}

function deleteProduct(index) {
  console.log(index);
  productContainer.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayData(productContainer);
}

function updateProduct(index) {
  currentIndex = index;
  product = {
    name: productName.value,
    price: productPrice.value,
    category: productCat.value,
    description: productDes.value,
  };
  productContainer[index] = product;
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayData(productContainer);
  addAndUpdateBtn.innerHTML = "Add Product";
}

function retrieveProductData(index) {
  addAndUpdateBtn.innerHTML = "Update Product";
  product = productContainer[index];
  productName.value = product.name;
  productPrice.value = product.price;
  productCat.value = product.category;
  productDes.value = product.description;
}

function search(name) {
  console.log(name);
  filteredProducts = [];
  for (let i = 0; i < productContainer.length; i++) {
    if (productContainer[i].name.toLowerCase().includes(name.toLowerCase())) {
      filteredProducts.push(productContainer[i]);
    }
  }
  displayData(filteredProducts);
}

function deleteAll() {
  localStorage.setItem("products", "[]");
  productContainer = [];
  displayData(productContainer);
}

function validateData(inputField, data, rule) {
  if (rule.test(data)) {
    inputField.classList.remove("is-invalid");
    inputField.classList.add("is-valid");
    return true;
  } else {
    inputField.classList.remove("is-valid");
    inputField.classList.add("is-invalid");
    return false;
  }
}
