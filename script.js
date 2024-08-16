// Initial prices for calculations
const basePrice = 100;
const discountRate = 0.30;

function updateValues(index) {
    const slider = document.getElementById(`rangeSlider${index}`);
    const shares = document.getElementById(`shares${index}`);
    const discount = document.getElementById(`discount${index}`);
    const actualPrice = document.getElementById(`actualPrice${index}`);
    const comparePrice = document.getElementById(`comparePrice${index}`);
    const limitedPrice1 = document.getElementById(`limitedPrice${index}`);
    const limitedPrice2 = document.getElementById(`limitedPrice${index}_2`);
    const limitedPrice3 = document.getElementById(`limitedPrice${index}_3`);

    // Get the current value of the slider
    const sliderValue = slider.value;

    // Update shares display
    shares.textContent = sliderValue;

    // Calculate discount percentage dynamically
    const calculatedDiscount = Math.round(sliderValue * discountRate);

    // Calculate dynamic prices based on slider value
    const newPrice = basePrice - (basePrice * (calculatedDiscount / 100));
    const compareNewPrice = basePrice + (basePrice * (calculatedDiscount / 200));
    const limitedNewPrice = basePrice + ((basePrice - newPrice) * (calculatedDiscount / 100));

    // Update discount display
    discount.textContent = `${calculatedDiscount}%`;

    // Update prices display
    actualPrice.textContent = newPrice.toFixed(2);
    comparePrice.textContent = compareNewPrice.toFixed(2);
    limitedPrice1.textContent = limitedNewPrice.toFixed(2);
    limitedPrice2.textContent = limitedNewPrice.toFixed(2);
    limitedPrice3.textContent = limitedNewPrice.toFixed(2);
}

// Initialize default values on load for all sections
document.querySelectorAll('.box').forEach((box, index) => {
    updateValues(index + 1);
});
