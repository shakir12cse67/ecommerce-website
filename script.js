div.innerHTML=`
<img src="${p.image}">
<div class="product-content">
<h3>${p.name}</h3>
<p>$${p.price}</p>
<p>⭐ ${p.rating}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`;