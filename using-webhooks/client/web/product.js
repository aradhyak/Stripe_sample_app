const products = {  
  product_id_1: {
    id: "product_id_1",
    name: "Shoe",
    price:"10 INR"
  },
  product_id_2: {
    id: "product_id_2",
    name: "Watch",
    price:"20 INR"
  },
  product_id_3: {
    id: "product_id_3",
    name: "Shirt",
    price:"30 INR"
  },
};
function get_product_id(product_id){
  return products[product_id].id
}

function product_details_function() {
  const product_list = document.getElementById("product_list");
  const selected_product = products[product_list.value]

  const item_name = document.getElementById("item_name");
  const item_price = document.getElementById("item_price");
 
  item_name.innerHTML=selected_product.name;
  item_price.innerHTML=selected_product.price;
}
