window.onload = function() {
    timenow()
}
function timenow() {

    const now = new Date()
    const hr = now.getHours();
    const cona = document.getElementById('greetings')
    const asdasd = document.getElementById('shiftIllustration')


    const newImage = document.createElement('img');
    // To append to a specific element with an ID (e.g., a div with id="imageContainer"):
    const imageContainer = document.getElementById('shiftIllustration');
    
    if (imageContainer) {
        imageContainer.appendChild(newImage);
    }

    if (hr <= 6 && hr >= 0) {
        cona.textContent = 'Midnight'
        newImage.src = '/images/nisd.webp'
    }
    else if (hr <= 12 && hr >= 7) {
        cona.textContent = 'Morning'
        newImage.src = '/images/das.webp'
    }

    else if (hr >= 13 && hr <= 18) {
        cona.textContent = 'Afternoon'
        newImage.src = '/images/das.webp'
    }
    else { 
        cona.textContent = 'Evening'
        newImage.src = '/images/nisd.webp'
    }
    
}
