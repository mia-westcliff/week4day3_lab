var photo = []; //Declare an empty array to store image element
var fileName = []; // Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contain an image
var image = []; //Declare an empty variable to store the assambled image list code
var openList = "<li ld= 'photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var openCaptionTag = "<p class = 'caption'>";
var closeCaptionTag = "</p>";
var openDescTag = "<p class = 'discription' onclick='showInfo(0)'>";
var closeDescTag = "</p>";

//create a loop to create 6 images starting with index of 0
for (var i = 0; i < 10; i++){
    fileName.push("petGallery" + (i + 1)); //create image file name and store in the array
    photo.push("<img src='images/" + fileName[i] + ".jpg'>"); //Assemble file name into image element and store in a array
    image = openList + photo[i] + openCaptionTag + "Caption" + closeCaptionTag + openDescTag + "discription" + closeDescTag + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(Push) the assembled list code into an array
}

//Display all six images
document.getElementById("album").innerHTML = imageList;


// Text information array
var informationArray = [
    {
        caption: "Caption 1",
        information: "Information about Image 1",
    },
    {
        caption: "Caption 2",
        information: "Information about Image 2",
    },
    {
        caption: "Caption 3",
        information: "Information about Image 3",
    },
    {
        caption: "Caption 4",
        information: "Information about Image 4",
    },
    {
        caption: "Caption 5",
        information: "Information about Image 5",
    },
    {
        caption: "Caption 6",
        information: "Information about Image 6",
    },
    {
        caption: "Caption 7",
        information: "Information about Image 7",
    },
    {
        caption: "Caption 8",
        information: "Information about Image 8",
    },
    {
        caption: "Caption 9",
        information: "Information about Image 9",
    },
    {
        caption: "Caption 10",
        information: "Information about Image 10",
    },
];

// Function to display information box
function displayInfo(index) {
    var infoBox = document.createElement("div");
    infoBox.className = "info-box";

    // Heading
    var heading = document.createElement("h2");
    heading.textContent = informationArray[index].caption;

    // Text Information
    var infoText = document.createElement("p");
    infoText.textContent = informationArray[index].information;

    // Text Link to Close
    var closeLink = document.createElement("a");
    closeLink.textContent = "Click This to Close";
    closeLink.href = "#";
    closeLink.onclick = function () {
        infoBox.remove();
    };

    infoBox.appendChild(heading);
    infoBox.appendChild(infoText);
    infoBox.appendChild(closeLink);

    document.querySelector(".image-list").appendChild(infoBox);
}

var descriptions = document.querySelectorAll(".discription");
descriptions.forEach(function (desc, index) {
    desc.addEventListener("click", function () {
        displayInfo(index);
    });
});