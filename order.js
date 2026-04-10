const item = document.getElementById("item");
const qty = document.getElementById("qty");
const price = document.getElementById("price");

function calculatePrice(){
    const total= item.value * qty.value;
    price.value = total + "£";
}

item.addEventListener("change",calculatePrice);
qty.addEventListener("input",calculatePrice);

calculatePrice();

 function checkout(){
    const orderData = {
        itemText:item.options[item.selectedIndex].text,
        Quantity:qty.value,
        total:price.value,
        address:document.getElementById("address").value,
        mobile:document.getElementById("mobile").value,
        email:document.getElementById("email").value
    };

    localStorage.setItem("order", JSON.stringify(orderData));
    window.location.href= "checkout.html";

 }


