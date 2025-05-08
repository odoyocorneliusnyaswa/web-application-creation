document.addEventListener('DOMContentLoaded', function() {
    // Set minimum date for pickup and dropoff
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const pickupDateInput = document.getElementById('pickupDate');
    const dropoffDateInput = document.getElementById('dropoffDate');

    if (pickupDateInput && dropoffDateInput) {
        // Format date as YYYY-MM-DD for input value
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        // Set min dates
        pickupDateInput.min = formatDate(today);
        pickupDateInput.value = formatDate(today);

        dropoffDateInput.min = formatDate(tomorrow);
        dropoffDateInput.value = formatDate(tomorrow);

        // Update dropoff min date when pickup date changes
        pickupDateInput.addEventListener('change', function() {
            const newMinDate = new Date(this.value);
            newMinDate.setDate(newMinDate.getDate() + 1);

            dropoffDateInput.min = formatDate(newMinDate);

            // If current dropoff date is before new min date, update it
            if (new Date(dropoffDateInput.value) < newMinDate) {
                dropoffDateInput.value = formatDate(newMinDate);
            }
        });
    }

    // Same location checkbox functionality
    const sameLocationCheckbox = document.getElementById('sameLocation');
    const dropoffLocationSelect = document.getElementById('dropoffLocation');

    if (sameLocationCheckbox && dropoffLocationSelect) {
        sameLocationCheckbox.addEventListener('change', function() {
            if (this.checked) {
                dropoffLocationSelect.value = '';
                dropoffLocationSelect.disabled = true;
            } else {
                dropoffLocationSelect.disabled = false;
            }
        });

        // Initial state
        if (sameLocationCheckbox.checked) {
            dropoffLocationSelect.value = '';
            dropoffLocationSelect.disabled = true;
        }
    }

    // Rental search form submission
    const rentalSearchForm = document.getElementById('rentalSearchForm');

    if (rentalSearchForm) {
        rentalSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const pickupLocation = document.getElementById('pickupLocation').value;
            const dropoffLocation = sameLocationCheckbox.checked ? pickupLocation : document.getElementById('dropoffLocation').value;
            const pickupDate = document.getElementById('pickupDate').value;
            const pickupTime = document.getElementById('pickupTime').value;
            const dropoffDate = document.getElementById('dropoffDate').value;
            const dropoffTime = document.getElementById('dropoffTime').value;
            const carType = document.getElementById('carType').value;

            // Calculate rental duration in days
            const pickup = new Date(`${pickupDate}T${pickupTime}`);
            const dropoff = new Date(`${dropoffDate}T${dropoffTime}`);
            const durationMs = dropoff - pickup;
            const durationDays = Math.ceil(durationMs / (1000 * 60 * 60 * 24));

            // Update total prices based on duration
            const totalPrices = document.querySelectorAll('.total-price');
            const prices = document.querySelectorAll('.price');

            totalPrices.forEach((totalPrice, index) => {
                const dailyPrice = parseInt(prices[index].textContent.replace('$', ''));
                totalPrice.textContent = `$${dailyPrice * durationDays} total for ${durationDays} days`;
            });

            // Filter cars by type if selected
            if (carType !== 'all') {
                const filterButtons = document.querySelectorAll('.filter-btn');
                filterButtons.forEach(btn => btn.classList.remove('active'));

                const selectedFilterBtn = document.querySelector(`.filter-btn[data-filter="${carType}"]`);
                if (selectedFilterBtn) {
                    selectedFilterBtn.classList.add('active');
                    filterCars(carType);
                } else {
                    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
                    filterCars('all');
                }
            }

            // Scroll to available cars section
            document.querySelector('.available-cars').scrollIntoView({ behavior: 'smooth' });

            // Show success message
            const searchContainer = document.querySelector('.search-container');
            const successMessage = document.createElement('div');
            successMessage.className = 'search-success';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Showing available cars for ${formatDateForDisplay(pickupDate)} to ${formatDateForDisplay(dropoffDate)}</p>
            `;

            // Style success message
            successMessage.style.display = 'flex';
            successMessage.style.alignItems = 'center';
            successMessage.style.gap = '10px';
            successMessage.style.backgroundColor = '#e6f7e6';
            successMessage.style.color = '#2ecc71';
            successMessage.style.padding = '10px 15px';
            successMessage.style.borderRadius = '4px';
            successMessage.style.marginTop = '20px';

            // Remove existing success message if any
            const existingMessage = document.querySelector('.search-success');
            if (existingMessage) {
                existingMessage.remove();
            }

            searchContainer.appendChild(successMessage);
        });
    }

    // Format date for display (MM/DD/YYYY)
    function formatDateForDisplay(dateString) {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    // Format time for display (convert 24h to 12h format)
    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter cars
            const filter = this.dataset.filter;
            filterCars(filter);
        });
    });

    function filterCars(filter) {
        const carCards = document.querySelectorAll('.car-card');

        carCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Sort functionality
    const sortSelect = document.getElementById('sortBy');

    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            const carCards = Array.from(document.querySelectorAll('.car-card'));
            const carsGrid = document.querySelector('.cars-grid');

            // Sort cars based on selected option
            carCards.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.price').textContent.replace('$', ''));
                const priceB = parseInt(b.querySelector('.price').textContent.replace('$', ''));

                switch (sortValue) {
                    case 'price-asc':
                        return priceA - priceB;
                    case 'price-desc':
                        return priceB - priceA;
                    case 'size-asc':
                        return getSizeValue(a.dataset.category) - getSizeValue(b.dataset.category);
                    case 'size-desc':
                        return getSizeValue(b.dataset.category) - getSizeValue(a.dataset.category);
                    case 'popular':
                        // For demo purposes, we'll use a predefined popularity order
                        return getPopularityValue(a.dataset.category) - getPopularityValue(b.dataset.category);
                    default:
                        return 0;
                }
            });

            // Re-append sorted cards to the grid
            carCards.forEach(card => carsGrid.appendChild(card));
        });
    }

    // Helper function to get size value for sorting
    function getSizeValue(category) {
        switch (category) {
            case 'economy':
                return 1;
            case 'suv':
                return 2;
            case 'luxury':
                return 3;
            case 'special':
                return 4;
            default:
                return 0;
        }
    }

    // Helper function to get popularity value for sorting
    function getPopularityValue(category) {
        switch (category) {
            case 'suv':
                return 1; // Most popular
            case 'economy':
                return 2;
            case 'luxury':
                return 3;
            case 'special':
                return 4;
            default:
                return 0;
        }
    }

    // Book Now button functionality
    const bookButtons = document.querySelectorAll('.btn-book');

    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const carName = this.dataset.car;
            const carCard = this.closest('.car-card');
            const dailyPrice = carCard.querySelector('.price').textContent;
            const totalPrice = carCard.querySelector('.total-price').textContent;

            // Create booking modal
            createBookingModal(carName, dailyPrice, totalPrice);
        });
    });

    function createBookingModal(carName, dailyPrice, totalPrice) {
        // Create modal elements
        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // Get rental dates from search form
        const pickupDate = document.getElementById('pickupDate').value;
        const pickupTime = document.getElementById('pickupTime').value;
        const dropoffDate = document.getElementById('dropoffDate').value;
        const dropoffTime = document.getElementById('dropoffTime').value;

        // Format dates for display
        const formattedPickupDate = formatDateForDisplay(pickupDate);
        const formattedDropoffDate = formatDateForDisplay(dropoffDate);

        // Calculate rental duration in days
        const pickup = new Date(`${pickupDate}T${pickupTime}`);
        const dropoff = new Date(`${dropoffDate}T${dropoffTime}`);
        const durationMs = dropoff - pickup;
        const durationDays = Math.ceil(durationMs / (1000 * 60 * 60 * 24));

        // Extract price values
        const dailyPriceValue = parseInt(dailyPrice.replace('$', ''));
        const baseTotalPrice = dailyPriceValue * durationDays;

        // Modal content
        modalContent.innerHTML = `
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h3>Book Your Rental Car</h3>
                <p>${carName}</p>
            </div>
            <div class="booking-details">
                <p><span class="label">Pickup Date:</span> <span>${formattedPickupDate} at ${formatTime(pickupTime)}</span></p>
                <p><span class="label">Dropoff Date:</span> <span>${formattedDropoffDate} at ${formatTime(dropoffTime)}</span></p>
                <p><span class="label">Duration:</span> <span>${durationDays} days</span></p>
                <p><span class="label">Daily Rate:</span> <span>${dailyPrice}</span></p>
            </div>
            <form class="booking-form">
                <h4>Driver Information</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name*</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name*</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email Address*</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number*</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                </div>
                <h4>Additional Options</h4>
                <div class="form-group checkbox-group">
                    <input type="checkbox" id="insurance" name="insurance">
                    <label for="insurance">Add Collision Damage Waiver ($15/day)</label>
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox" id="gps" name="gps">
                    <label for="gps">Add GPS Navigation ($8/day)</label>
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox" id="additionalDriver" name="additionalDriver">
                    <label for="additionalDriver">Additional Driver ($10/day)</label>
                </div>
                <div class="booking-total">
                    <p><span>Base Rate (${durationDays} days):</span> <span>$${baseTotalPrice}</span></p>
                    <p class="insurance-cost" style="display: none;"><span>Insurance:</span> <span>$${15 * durationDays}</span></p>
                    <p class="gps-cost" style="display: none;"><span>GPS Navigation:</span> <span>$${8 * durationDays}</span></p>
                    <p class="driver-cost" style="display: none;"><span>Additional Driver:</span> <span>$${10 * durationDays}</span></p>
                    <p class="total"><span>Total:</span> <span>$${baseTotalPrice}</span></p>
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">I agree to the <a href="terms.html" target="_blank">Terms and Conditions</a>*</label>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline cancel-booking">Cancel</button>
                    <button type="submit" class="btn btn-primary confirm-booking">Confirm Booking</button>
                </div>
            </form>
        `;

        // Append modal to body
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Show modal
        modal.style.display = 'block';

        // Close modal functionality
        const closeModal = modalContent.querySelector('.close-modal');
        const cancelBooking = modalContent.querySelector('.cancel-booking');

        closeModal.addEventListener('click', function() {
            modal.remove();
        });

        cancelBooking.addEventListener('click', function() {
            modal.remove();
        });

        // Additional options functionality
        const insuranceCheckbox = modalContent.querySelector('#insurance');
        const gpsCheckbox = modalContent.querySelector('#gps');
        const additionalDriverCheckbox = modalContent.querySelector('#additionalDriver');

        const insuranceCost = modalContent.querySelector('.insurance-cost');
        const gpsCost = modalContent.querySelector('.gps-cost');
        const driverCost = modalContent.querySelector('.driver-cost');
        const totalElement = modalContent.querySelector('.total span:last-child');

        // Update total when options change
        function updateTotal() {
            let total = baseTotalPrice;

            if (insuranceCheckbox.checked) {
                total += 15 * durationDays;
                insuranceCost.style.display = 'flex';
            } else {
                insuranceCost.style.display = 'none';
            }

            if (gpsCheckbox.checked) {
                total += 8 * durationDays;
                gpsCost.style.display = 'flex';
            } else {
                gpsCost.style.display = 'none';
            }

            if (additionalDriverCheckbox.checked) {
                total += 10 * durationDays;
                driverCost.style.display = 'flex';
            } else {
                driverCost.style.display = 'none';
            }

            totalElement.textContent = `$${total}`;
        }

        insuranceCheckbox.addEventListener('change', updateTotal);
        gpsCheckbox.addEventListener('change', updateTotal);
        additionalDriverCheckbox.addEventListener('change', updateTotal);

        // Form submission
        const bookingForm = modalContent.querySelector('.booking-form');

        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const insurance = document.getElementById('insurance').checked;
            const gps = document.getElementById('gps').checked;
            const additionalDriver = document.getElementById('additionalDriver').checked;

            // In a real application, you would send this data to your server
            console.log('Booking submitted:', {
                carName,
                firstName,
                lastName,
                email,
                phone,
                pickupDate: formattedPickupDate,
                pickupTime: formatTime(pickupTime),
                dropoffDate: formattedDropoffDate,
                dropoffTime: formatTime(dropoffTime),
                insurance,
                gps,
                additionalDriver,
                totalPrice: totalElement.textContent
            });

            // Show success message
            modalContent.innerHTML = `
                <div class="booking-success">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Booking Confirmed!</h3>
                    <p>Thank you, ${firstName}! Your reservation for the ${carName} has been confirmed.</p>
                    <p>A confirmation email has been sent to ${email}.</p>
                    <div class="booking-summary">
                        <h4>Booking Summary</h4>
                        <p><span class="label">Reservation #:</span> <span>RES-${Math.floor(Math.random() * 1000000)}</span></p>
                        <p><span class="label">Vehicle:</span> <span>${carName}</span></p>
                        <p><span class="label">Pickup:</span> <span>${formattedPickupDate} at ${formatTime(pickupTime)}</span></p>
                        <p><span class="label">Return:</span> <span>${formattedDropoffDate} at ${formatTime(dropoffTime)}</span></p>
                        <p><span class="label">Total:</span> <span>${totalElement.textContent}</span></p>
                    </div>
                    <button class="btn btn-primary close-success">Close</button>
                </div>
            `;

            // Style success message
            const bookingSuccess = modalContent.querySelector('.booking-success');
            bookingSuccess.style.textAlign = 'center';
            bookingSuccess.style.padding = '20px';

            const successIcon = modalContent.querySelector('.success-icon');
            successIcon.style.fontSize = '4rem';
            successIcon.style.color = '#2ecc71';
            successIcon.style.marginBottom = '20px';

            const bookingSummary = modalContent.querySelector('.booking-summary');
            bookingSummary.style.backgroundColor = 'var(--light-bg)';
            bookingSummary.style.padding = '15px';
            bookingSummary.style.borderRadius = '4px';
            bookingSummary.style.margin = '20px 0';
            bookingSummary.style.textAlign = 'left';

            const summaryItems = bookingSummary.querySelectorAll('p');
            summaryItems.forEach(item => {
                item.style.display = 'flex';
                item.style.justifyContent = 'space-between';
                item.style.marginBottom = '10px';
            });

            const closeSuccessBtn = modalContent.querySelector('.close-success');
            closeSuccessBtn.style.marginTop = '20px';

            closeSuccessBtn.addEventListener('click', function() {
                modal.remove();
            });
        });
    }
});