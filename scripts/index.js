document.addEventListener('DOMContentLoaded',()=>{
    
    let cart        = document.querySelector('.cart svg');
    let cartSubMenu = document.querySelector('.cart-submenu');
    let decreaseBtn = document.querySelector('.decrease-icon');
    let increaseBtn = document.querySelector('.increase-icon');
    let quantity    = document.querySelector('input[name=quantity]');
    let mainImage   = document.querySelector('.main-image');
    let popUpProduct= document.querySelector('.product-pop');
    let closeBtn    = document.querySelector('.close-btn svg');
    let overlay     = document.querySelector('.overlay');
    let addToCart   = document.querySelector('.add-to-cart');
    let cartBody    = document.querySelector('.cart-products');
    let price       = document.querySelector('.price');
    let cartQuantityLabel = document.querySelector('.cart-items-quantity');
    let humMenu = document.querySelector('.hum-menu');
    let humMenuImage = document.querySelector('.hum-menu img');
    let nav     = document.querySelector('nav');
    let navOverlay = document.querySelector('.nav-overlay');

    // Cart Sub Menu
    cart.addEventListener('click',(e)=>{
        e.stopPropagation();
        cartSubMenu.classList.toggle('showCartMenu');
    });

    // Product Quantity
    decreaseBtn.addEventListener('click',()=>{
        if (quantity.value >=1){
            quantity.value = Number(quantity.value) -1;
        }
    });

    increaseBtn.addEventListener('click',()=>{
        quantity.value= Number(quantity.value) +1;
    });

    // Pop up Product images
    mainImage.addEventListener('click',()=>{
        popUpProduct.classList.add('pop-up');
        overlay.style.display= "block";
        popUpProduct.style.display="block";
    });

    closeBtn.addEventListener('click',()=>{
        popUpProduct.classList.remove('pop-up');
        overlay.style.display= "none";
        popUpProduct.style.display="none";
    }); 

    // Add to cart 
    addToCart.addEventListener('click',()=>{
        if (quantity.value > 0){
            cartBody.classList.remove('empty');
            cartBody.innerHTML = `
            <div class="row justify-between align-i-center">
                <div class="cart-product-thumbnail">
                <img src="images/image-product-1-thumbnail.jpg" alt="">
                </div>
                <div class="cart-product-info">
                <div class="cart-product-name">Fall Limited Edition Sneakers</div>
                <div class="cart-product-price">
                    <span class="main-price">$125.00</span>
                    <span>x</span>
                    <span class="quantity">${quantity.value}</span>
                    <span class="total">
                    <strong>$${ (price.getAttribute('data-price') * quantity.value).toFixed(2) }</strong>
                    </span>
                </div>
                </div>
                <div class="delete-btn">
                <img src="images/icon-delete.svg" alt="">
                </div>
            </div>
            <div class="checkout row justify-center">
                    <button>Checkout</button>
            </div>    
            `;

            // update cart label
            cartQuantityLabel.style.display="block";
            cartQuantityLabel.textContent = quantity.value;

            document.querySelector('.cart-products .delete-btn').
                addEventListener('click',()=>{
                    cartBody.classList.add('empty');
                    cartBody.innerHTML = "Your cart is empty";
                    cartQuantityLabel.style.display= "none";
                });
        }
    });

    humMenu.addEventListener('click',()=>{
        if (nav.style.display == "block"){
            nav.style.display="none";
            navOverlay.style.display="none";
            humMenuImage.setAttribute('src','images/icon-menu.svg');
        }else{
            nav.style.display="block";
            navOverlay.style.display="block";
            humMenuImage.setAttribute('src','images/icon-close.svg');
        }
    });
});