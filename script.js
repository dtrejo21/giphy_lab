console.log("Hello")

var submitBtn = document.getElementById("submitBtn");
var gifsDiv = document.getElementById("gifsDiv");
var searchInput = document.getElementById("searchInput");

//This will be used if you're only calling a function once
submitBtn.addEventListener("click", async (event) => 
{
    event.preventDefault(); //Prevent form submission (optional)
    
    //https://api.giphy.com/v1/channels/serach?api_key=8OECCDzpDsuaUDoO7AbaLVbdmfYH9gIn

    try {
        const apiKey = "8OECCDzpDsuaUDoO7AbaLVbdmfYH9gIn";
        const searchTerm = searchInput.value;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}`;
    
        const response = await fetch(url);
        const data = await response.json();
        const images = data.data;

        images.forEach(gif => {
            const img = document.createElement("img");
            img.src = gif.images.original.url;
            gifsDiv.appendChild(img); // Step 3: Add the image url to the gifsDiv
        });

        console.log(data.data[0]);
        console.log(data.data[0].images.original.url);
        // Process the data returned from the API
        // console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.log(error);
    }

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

