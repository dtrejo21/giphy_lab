console.log("Hello")

var submitBtn = document.getElementById("submitBtn");

//This will be used if you're only calling a function once
submitBtn.addEventListener("click", (event) => 
{
    event.preventDefault(); //Prevent form submission (optional)

    //Perform your desired action here
    console.log("Button clicked!");
});


/*
submitBtn.addeventListener("click", fetchGiphyImages);
function fetchGiphyImages(event)
{
    event.preventDeafult(); //prevent form submission(optional)
    
    //Perform your desired action here
    console.log("Button clicked!");
}*/
