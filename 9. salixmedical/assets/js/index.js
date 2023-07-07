
/* Report PopUp */
const reportOpen = document.querySelector(".report-open");
const reportPopup = document.querySelector(".reportpopup");
const reportContinue = document.querySelector(".report-continue");
const closeBtn = document.querySelector(".close-btn");

reportOpen.addEventListener('click', () => {
    reportPopup.style.display = 'flex';
})

reportContinue.addEventListener('click', () => {
    reportPopup.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    reportPopup.style.display = 'none';
})
/* Report PopUp End */




/* banner search area */
const searchLink = document.querySelector(".search-link");
const searchPopup = document.querySelector(".search-popup");
const searchOverlay = document.querySelector(".searchoverlay");
const overlayClose = document.querySelector(".overlay-close");

searchLink.addEventListener('click', () => {
    searchPopup.style.display = 'flex';
    searchOverlay.classList.add("move");
})

overlayClose.addEventListener('click', () => {
    searchPopup.style.display = 'none';
    searchOverlay.classList.remove("move");
})
/* banner search area End */




/* Reference PopUp */
const callReference = document.querySelectorAll(".call-refer");
const referencePopup = document.querySelector(".referencepopup");
const referProceed = document.querySelector(".proceed-btn");
const referCancel = document.querySelector(".cancel-btn");

for (let i = 0; i < callReference.length; i++) {
    document.querySelectorAll(".call-refer")[i].addEventListener('click', () => {
        referencePopup.classList.add("active");

        // Get and Set the external links
        // console.log(document.querySelectorAll(".call-refer")[i].getAttribute("data-href"));
        // referProceed.setAttribute("href", document.querySelectorAll(".call-refer")[i].getAttribute("data-href"));
        const getLink = document.querySelectorAll(".call-refer")[i].getAttribute("data-href");
        setPopupLink(getLink);
    })
}

function setPopupLink(getLink) {
    referProceed.setAttribute("href", getLink);
    console.log(getLink);
}

referProceed.addEventListener('click', () => {
    referencePopup.classList.remove("active");
})

referCancel.addEventListener('click', () => {
    referencePopup.classList.remove("active");
})
/* Reference PopUp End */




/* Reference Hide and Show */
const referHeading = document.querySelector(".refer__heading");
const headingArrow = document.querySelector(".heading-arrow");

referHeading.addEventListener('click', () => {
    const referBody = document.querySelector(".refer__body").getAttribute("class");

    if (referBody === "refer__body collapes") {
    console.log(referBody);
        document.querySelector(".refer__body").classList.remove("collapes");
        headingArrow.classList.remove("rotate");
    } else {
    console.log(referBody);
        document.querySelector(".refer__body").classList.add("collapes");
        headingArrow.classList.add("rotate");
    }
})

/* Reference Hide and Show End */




/* DGBI tab selection */
const ibsTabBody = document.querySelector(".ibs-tab__body");
const cicTabBody = document.querySelector(".cic-tab__body");


// DeskTop tab
const ibsTabHeading = document.querySelector(".ibs-tab-heading");
const cicTabHeading = document.querySelector(".cic-tab-heading");

ibsTabHeading.addEventListener('click', () => {
    ibsTabHeading.classList.add("active");
    cicTabHeading.classList.remove("active");
    // Tab Body hide and show
    ibsTabBody.style.display = "block";
    cicTabBody.style.display = "none";
})

cicTabHeading.addEventListener('click', () => {
    cicTabHeading.classList.add("active");
    ibsTabHeading.classList.remove("active");
    // Tab Body hide and show
    ibsTabBody.style.display = "none";
    cicTabBody.style.display = "block";
})

// Mobile tab
const ibsTabHead = document.querySelector(".ibs-tab__head");
const cicTabHead = document.querySelector(".cic-tab__head");

ibsTabHead.addEventListener('click', () => {
    ibsTabHead.classList.add("active");
    cicTabHead.classList.remove("active");
    // Tab Body hide and show
    ibsTabBody.style.display = "block";
    cicTabBody.style.display = "none";
})

cicTabHead.addEventListener('click', () => {
    cicTabHead.classList.add("active");
    ibsTabHead.classList.remove("active");
    // Tab Body hide and show
    ibsTabBody.style.display = "none";
    cicTabBody.style.display = "block";
})
/* DGBI tab selection End */
