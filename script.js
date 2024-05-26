document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    modal.onclick = function (e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    }
});

function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}

const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
});

function openReachOutPopup() {
    if (document.getElementById('reach-out-popup')) {
        document.getElementById('reach-out-popup').style.display = 'block';
        return;
    }

    const popup = document.createElement('div');
    popup.id = 'reach-out-popup';
    popup.classList.add('popup');

    const popupContent = document.createElement('form');
    popupContent.classList.add('popup-content');
    popupContent.setAttribute('action', 'submit.php');
    popupContent.setAttribute('method', 'POST');

    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.name = 'name';
    nameField.placeholder = 'Your Name';
    nameField.required = true;

    const phoneField = document.createElement('input');
    phoneField.type = 'text';
    phoneField.name = 'phone';
    phoneField.placeholder = 'Phone Number';
    phoneField.required = true;

    const emailField = document.createElement('input');
    emailField.type = 'email';
    emailField.name = 'email';
    emailField.placeholder = 'Your Email';
    emailField.required = true;

    const projectField = document.createElement('input');
    projectField.type = 'text';
    projectField.name = 'project';
    projectField.placeholder = 'Project';
    projectField.required = true;

    const messageField = document.createElement('textarea');
    messageField.name = 'message';
    messageField.placeholder = 'Your Message';
    messageField.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Enquiry';

    popupContent.appendChild(nameField);
    popupContent.appendChild(phoneField);
    popupContent.appendChild(emailField);
    popupContent.appendChild(projectField);
    popupContent.appendChild(messageField);
    popupContent.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'X';
    closeButton.type = 'button';
    closeButton.onclick = function() {
        document.getElementById('reach-out-popup').style.display = 'none';
    }
    popup.appendChild(closeButton);

    popup.appendChild(popupContent);

    document.body.appendChild(popup);

    popup.style.display = 'block';
}

// Testimonial Swiping Functionality
const testimonialContainer = document.querySelector('.wrapper');
let startX = 0;
let endX = 0;

testimonialContainer.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

testimonialContainer.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const sensitivity = 50; // Adjust this value for swipe sensitivity

    if (startX - endX > sensitivity) {
        // Swiped left, show next testimonial
        showNextTestimonial();
    } else if (endX - startX > sensitivity) {
        // Swiped right, show previous testimonial
        showPreviousTestimonial();
    }
}

function showNextTestimonial() {
    if (currentTestimonial < indicators.length - 1) {
        currentTestimonial++;
        updateTestimonial();
    }
}

function showPreviousTestimonial() {
    if (currentTestimonial > 0) {
        currentTestimonial--;
        updateTestimonial();
    }
}

function updateTestimonial() {
    indicators.forEach((item, i) => {
        if (i === currentTestimonial) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    wrapper.style.marginLeft = `-${100 * currentTestimonial}%`;
}


