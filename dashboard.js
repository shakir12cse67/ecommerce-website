const adminList=document.getElementById("adminProducts");

function render(){

adminList.innerHTML="";

products.forEach((p,index)=>{

adminList.innerHTML+=`
<p>
${p.name} - $${p.price}

<button onclick="deleteProduct(${index})">
Delete
</button>

</p>
`;

});

}

render();

function addProduct(){

const name=document.getElementById("name").value;
const price=document.getElementById("price").value;
const category=document.getElementById("category").value;

products.push({
id:Date.now(),
name,
price,
category,
rating:4
});

render();

}

function deleteProduct(i){

products.splice(i,1);

render();

}