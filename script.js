
const buttonWrapper = document.querySelector(".rating-btns");
const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");
const ratingResult = document.querySelector("span.result-num");
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thankYou-container");
//console.log(ratingButtons);

ratingsCard();

function ratingsCard () {
    //iterate through ratingButton
    ratingButtons.forEach ((button, buttonIdx) => {
        // buttonIdx gives the index of the current button in the array
        
        //listen for each button click
        button.addEventListener("click", () => {
            // disable all buttons to prevent further clicks ---check css
            buttonWrapper.classList.add("disabled");
            // pass the textContent of the clicked buuton to the thankyou component
            ratingResult.textContent = button.textContent;
            
            // call another forEach, otherButton and otherIndex gives the value and index of the other (maybe all) items in the array
            
            ratingButtons.forEach((otherButton, otherIndex) => {
                // console.log(otherButton);
                // console.log(otherIndex);
                //adds style to the button
                button.classList.add("active");
                //adds style to the previous button
                if (otherIndex === buttonIdx - 1) {
                    otherButton.classList.add("before-active");
                }
                
            });
            //console.log(buttonIdx);
            
            // console.log(button);
            
        })
        
    })
    
    //submit button function
    
    submitButton.addEventListener("click", () => {
        ratingContainer.classList.add("hide");
        if (thankYouContainer.classList.contains("hide")) {
            thankYouContainer.classList.remove("hide");
        }
        thankYouContainer.classList.add("show")
    })
    
}





