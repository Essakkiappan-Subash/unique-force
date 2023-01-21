

// Show and Hide the popup

const openPopup = document.querySelector('#open-fda');
const closePopup = document.querySelector('#close-fda');
const closePopupBtn = document.querySelector('#more-fda');
const fdaPopup = document.querySelector('.popUp');

openPopup.addEventListener('click', () => {
    fdaPopup.style.display = 'grid';
})

closePopup.addEventListener('click', () => {
    fdaPopup.style.display = 'none';
})

closePopupBtn.addEventListener('click', () => {
    fdaPopup.style.display = 'none';
})


// floating ISI expand Colaupsh

const expandIsi = document.querySelector('#floatisi-expand');
const ColaupshIsi = document.querySelector('#floatisi-cloupsh');
const floatingIsi = document.querySelector('.floatingisi');

expandIsi.addEventListener('click', () => {
    floatingIsi.style.height = '350px';
    expandIsi.style.display = 'none';
    ColaupshIsi.style.display = 'block';
});

ColaupshIsi.addEventListener('click', () => {
    floatingIsi.style.height = '150px';
    expandIsi.style.display = 'block';
    ColaupshIsi.style.display = 'none';
});




const isiLink = document.querySelector('#isi-link');
const isiScroll = document.querySelector('#isi');

isiLink.addEventListener('click', function () {
    scrollX = '200px';
    isiScroll.scrollIntoView({
        behavior: "smooth",
    })
})