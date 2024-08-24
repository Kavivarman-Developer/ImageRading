// Handling image carousel
const imgs = document.querySelectorAll('.img a');
const imgDivs = document.querySelectorAll('.img');
let imgId = 1;

imgs.forEach(img => {
    img.addEventListener('click', e => {
        e.preventDefault();
        imgId = img.dataset.id;

        imgDivs.forEach(imgDiv => {
            imgDiv.classList.remove('active');
        });

        img.parentElement.classList.add('active');
        moveImage();
    });
});

function moveImage() {
    const imgWidth = document.querySelector('.main-image img').clientWidth;
    const width = (imgId - 1) * imgWidth;
    document.querySelector('.main-image').style.transform = `translateX(${-width}px)`;
}

// Handling quantity and price updates
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const qtyText = document.querySelector('#qty');
const limit = document.querySelector('#limited');
const price = document.querySelector('#price');

minusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyText.value);

    if (qty > 0) {
        qty--;
        qtyText.value = qty;
        limit.innerText = 'Quantity';
        limit.classList.remove('limit');

        updatePriceAndLimit(qty);
    }
});

plusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyText.value);

    if (qty < 5) {
        qty++;
        qtyText.value = qty;
        updatePriceAndLimit(qty);
    }
});

function updatePriceAndLimit(qty) {
    let newPrice;
    if (qty === 5) {
        newPrice = '$79.00';
        limit.innerText = 'Sorry, Limited';
        limit.classList.add('limit');
    } else if (qty === 4) {
        newPrice = '$69.00';
    } else if (qty === 3) {
        newPrice = '$59.00';
    } else if (qty === 2) {
        newPrice = '$49.00';
    } else if (qty === 1) {
        newPrice = '$39.00';
    } else {
        newPrice = '$00.00';
    }

    price.innerText = newPrice;
    price.style.color = 'green';
}

// Handling color selection
const colorSelect = document.querySelector('select');
const box = document.querySelector('#box');

colorSelect.addEventListener('change', event => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedColor = parseInt(selectedOption.dataset.id);

    const boxColor = selectedColor === 1 ? 'black' :
        selectedColor === 2 ? 'red' : 'green';

    box.style.backgroundColor = boxColor;
    colorSelect.style.borderColor = boxColor;
});

// Handling star rating
const stars = document.querySelectorAll('.star-gruop .star');
console.log(stars);

const reviews = document.querySelector('.stars span');
console.log(reviews);

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const currentStar = index + 1;
        reviews.innerText = `${currentStar} Reviews`;
        reviews.style.color = 'green';

        stars.forEach((star, i) => {
            star.innerHTML = currentStar > i ? '&#9733;' : '&#9734;';
            star.style.color = currentStar > i ? 'red' : 'gray';
        });
    });
});
