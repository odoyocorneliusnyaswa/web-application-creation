document.addEventListener('DOMContentLoaded', function() {
    // Populate year dropdown
    const yearSelect = document.getElementById('year');
    if (yearSelect) {
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= 1950; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }
    }

    // Multi-step form navigation
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');

    // Next button click
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = parseInt(this.closest('.form-step').dataset.step);

            // Validate current step
            if (validateStep(currentStep)) {
                // Hide current step
                document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');

                // Show next step
                document.querySelector(`.form-step[data-step="${currentStep + 1}"]`).classList.add('active');

                // Update progress
                document.querySelector(`.progress-step[data-step="${currentStep + 1}"]`).classList.add('active');

                // Scroll to top of form
                document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Previous button click
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = parseInt(this.closest('.form-step').dataset.step);

            // Hide current step
            document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');

            // Show previous step
            document.querySelector(`.form-step[data-step="${currentStep - 1}"]`).classList.add('active');

            // Scroll to top of form
            document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Validate form step
    function validateStep(step) {
        const currentStep = document.querySelector(`.form-step[data-step="${step}"]`);
        const requiredFields = currentStep.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');

                // Add error message if it doesn't exist
                let errorMessage = field.nextElementSibling;
                if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                    errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.textContent = 'This field is required';
                    errorMessage.style.color = '#e74c3c';
                    errorMessage.style.fontSize = '0.8rem';
                    errorMessage.style.marginTop = '5px';
                    field.parentNode.insertBefore(errorMessage, field.nextSibling);
                }
            } else {
                field.classList.remove('error');

                // Remove error message if it exists
                const errorMessage = field.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.remove();
                }
            }
        });

        return isValid;
    }

    // Photo upload functionality
    const photoInput = document.getElementById('photos');
    const photoUploadArea = document.getElementById('photoUploadArea');
    const photoPreview = document.getElementById('photoPreview');

    if (photoInput && photoUploadArea && photoPreview) {
        photoUploadArea.addEventListener('click', function() {
            photoInput.click();
        });

        photoUploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            photoUploadArea.style.borderColor = 'var(--secondary-color)';
            photoUploadArea.style.backgroundColor = 'rgba(231, 76, 60, 0.05)';
        });

        photoUploadArea.addEventListener('dragleave', function() {
            photoUploadArea.style.borderColor = 'var(--border-color)';
            photoUploadArea.style.backgroundColor = 'transparent';
        });

        photoUploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            photoUploadArea.style.borderColor = 'var(--border-color)';
            photoUploadArea.style.backgroundColor = 'transparent';

            if (e.dataTransfer.files.length) {
                handleFiles(e.dataTransfer.files);
            }
        });

        photoInput.addEventListener('change', function() {
            if (this.files.length) {
                handleFiles(this.files);
            }
        });

        function handleFiles(files) {
            // Limit to 15 photos
            const totalPhotos = photoPreview.children.length + files.length;
            if (totalPhotos > 15) {
                alert('You can upload a maximum of 15 photos.');
                return;
            }

            Array.from(files).forEach(file => {
                if (!file.type.match('image.*')) {
                    alert('Please upload image files only.');
                    return;
                }

                const reader = new FileReader();

                reader.onload = function(e) {
                    const photoItem = document.createElement('div');
                    photoItem.className = 'photo-item';

                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = 'Car photo';

                    const removeBtn = document.createElement('span');
                    removeBtn.className = 'remove-photo';
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.addEventListener('click', function() {
                        photoItem.remove();
                    });

                    photoItem.appendChild(img);
                    photoItem.appendChild(removeBtn);
                    photoPreview.appendChild(photoItem);
                };

                reader.readAsDataURL(file);
            });
        }
    }

    // Form submission
    const sellCarForm = document.getElementById('sellCarForm');
    if (sellCarForm) {
        sellCarForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate all steps
            let isValid = true;
            for (let i = 1; i <= formSteps.length; i++) {
                if (!validateStep(i)) {
                    isValid = false;

                    // Show the step with errors
                    formSteps.forEach(step => step.classList.remove('active'));
                    document.querySelector(`.form-step[data-step="${i}"]`).classList.add('active');

                    break;
                }
            }

            if (isValid) {
                // Collect form data
                const formData = new FormData(this);

                // In a real application, you would send this data to your server
                console.log('Form submitted successfully!');

                // Show success message
                const formContainer = document.querySelector('.form-container');
                formContainer.innerHTML = `
                    <div class="success-message">
                        <div class="success-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h2>Listing Submitted Successfully!</h2>
                        <p>Thank you for listing your vehicle with AutoHub. Our team will review your listing and it will be published shortly.</p>
                        <p>You will receive a confirmation email with details about your listing.</p>
                        <div class="success-buttons">
                            <a href="account.html" class="btn btn-primary">View My Listings</a>
                            <a href="index.html" class="btn btn-outline">Back to Home</a>
                        </div>
                    </div>
                `;

                // Style success message
                const successMessage = document.querySelector('.success-message');
                successMessage.style.textAlign = 'center';
                successMessage.style.padding = '30px';

                const successIcon = document.querySelector('.success-icon');
                successIcon.style.fontSize = '4rem';
                successIcon.style.color = '#2ecc71';
                successIcon.style.marginBottom = '20px';

                const successButtons = document.querySelector('.success-buttons');
                successButtons.style.display = 'flex';
                successButtons.style.justifyContent = 'center';
                successButtons.style.gap = '20px';
                successButtons.style.marginTop = '30px';

                // Scroll to top of success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');

        // Initially hide all answers
        answer.style.display = 'none';

        question.addEventListener('click', function() {
            // Toggle the current answer
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                toggle.innerHTML = '<i class="fas fa-minus"></i>';
                item.classList.add('active');
            } else {
                answer.style.display = 'none';
                toggle.innerHTML = '<i class="fas fa-plus"></i>';
                item.classList.remove('active');
            }
        });
    });

    // Enhancement options pricing calculation
    const enhancements = document.querySelectorAll('input[name="enhancements"]');
    const listingDuration = document.getElementById('listingDuration');

    if (enhancements.length && listingDuration) {
        // Function to calculate and display total price
        function updateTotalPrice() {
            let basePrice = 0;

            // Get listing duration price
            const durationValue = listingDuration.value;
            switch (durationValue) {
                case '30':
                    basePrice = 0;
                    break;
                case '60':
                    basePrice = 15;
                    break;
                case '90':
                    basePrice = 25;
                    break;
                case 'until-sold':
                    basePrice = 40;
                    break;
            }

            // Add enhancement prices
            let enhancementPrice = 0;
            enhancements.forEach(enhancement => {
                if (enhancement.checked) {
                    switch (enhancement.value) {
                        case 'Featured':
                            enhancementPrice += 15;
                            break;
                        case 'Highlight':
                            enhancementPrice += 10;
                            break;
                        case 'Premium':
                            enhancementPrice += 30;
                            break;
                    }
                }
            });

            const totalPrice = basePrice + enhancementPrice;

            // Display total price
            let totalPriceElement = document.getElementById('totalPrice');
            if (!totalPriceElement) {
                totalPriceElement = document.createElement('div');
                totalPriceElement.id = 'totalPrice';
                totalPriceElement.className = 'total-price';
                listingDuration.parentNode.parentNode.appendChild(totalPriceElement);

                // Style total price element
                totalPriceElement.style.marginTop = '20px';
                totalPriceElement.style.padding = '15px';
                totalPriceElement.style.backgroundColor = 'var(--light-bg)';
                totalPriceElement.style.borderRadius = '4px';
                totalPriceElement.style.fontWeight = 'bold';
            }

            totalPriceElement.innerHTML = `Total: $${totalPrice}`;
            if (totalPrice > 0) {
                totalPriceElement.innerHTML += ' <small>(Payment details will be collected after submission)</small>';
            }
        }

        // Update price when options change
        listingDuration.addEventListener('change', updateTotalPrice);
        enhancements.forEach(enhancement => {
            enhancement.addEventListener('change', updateTotalPrice);
        });

        // Initial calculation
        updateTotalPrice();
    }
});