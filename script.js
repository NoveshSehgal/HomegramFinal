function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openReachOutPopup() {
  // Check if the popup already exists to avoid creating multiple popups
  if (document.getElementById('reach-out-popup')) {
      document.getElementById('reach-out-popup').style.display = 'block';
      return;
  }
  
  // Create the popup element (div)
  const popup = document.createElement('div');
  popup.id = 'reach-out-popup';
  popup.classList.add('popup'); // Add a class for styling

  // Create the popup content (form)
  const popupContent = document.createElement('form');
  popupContent.classList.add('popup-content'); // Add a class for styling
  popupContent.setAttribute('action', 'submit.php'); // Set form action (replace with your form processing script)
  popupContent.setAttribute('method', 'POST'); // Set form method (replace with your preference)

  // Add form fields (name, email, message)
  const nameField = document.createElement('input');
  nameField.type = 'text';
  nameField.name = 'name';
  nameField.placeholder = 'Your Name';
  nameField.required = true;

  const PhoneNoField = document.createElement('input');
  PhoneNoField.type = 'text';
  PhoneNoField.name = 'Phone No';
  PhoneNoField.placeholder = 'Phone No';
  PhoneNoField.required = true;

  const emailField = document.createElement('input');
  emailField.type = 'email';
  emailField.name = 'email';
  emailField.placeholder = 'Your Email';
  emailField.required = true;

  const ProjectField = document.createElement('input');
  ProjectField.type = 'text';
  ProjectField.name = 'Phone No';
  ProjectField.placeholder = 'Phone No';
  ProjectField.required = true;

  const messageField = document.createElement('textarea');
  messageField.name = 'message';
  messageField.placeholder = 'Your Message';
  messageField.required = true;

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Send Enquiry';

  // Add form fields and submit button to the popup content
  popupContent.appendChild(nameField);
  popupContent.appendChild(emailField);
  popupContent.appendChild(PhoneNoField);
  popupContent.appendChild(Field);
  popupContent.appendChild(messageField);
  popupContent.appendChild(submitButton);

  // Add a close button to the popup
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button'); // Add a class for styling
  closeButton.textContent = 'X';
  closeButton.type = 'button'; // Ensure the close button doesn't submit the form
  closeButton.onclick = function() {
      document.getElementById('reach-out-popup').style.display = 'none';
  }
  popup.appendChild(closeButton);

  // Append the popup content to the popup element
  popup.appendChild(popupContent);

  // Append the popup element to the body
  document.body.appendChild(popup);

  // Display the popup
  popup.style.display = 'block';
}
