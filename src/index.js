// index.js

// Callbacks
const handleClick = (event) => {
  if (event.target.tagName === "IMG") {
    const ramenInfo = getRamenInfo('event'.target);
    
    displayRamenInfo(ramenInfo);
  }
};

// helper function to handleClick:
function getRamenInfo(image) {
  const ramenName = image.getAttribute();
  const ramenRestaurant = image.getAttribute();
  const ramenRating = image.getAttribute();
  const ramenComment = image.getAttribute();
  //come back to this and fill in where to get these from

  return {
    Name: ramenName,
    Restaurant: ramenRestaurant,
    Rating: ramenRating,
    Comment: ramenComment
  };
};
//helper function to then display ramen information:
function displayRamenInfo() {
  const ramenDetail = document.querySelector("#ramen-detail");
  ramenDetail.innerHTML= "";
  //name
  const nameElement = document.createElement("h2");
  nameElement.textContent = ramenInfo.name;
  ramenDetail.appendChild(nameElement);
  //restaurant
  const restaurantElement = document.createElement("h3");
  restaurantElement.textContent = ramenInfo.restaurant;
  ramenDetail.appendChild(restaurantElement);
  //rating
  const ratingElement = document.createElement("p");
  ratingElement.textcontent = ramenInfo.rating;
  ramenDetail.appendChild(ratingElement);
  //comment
  const commentElement = document.createElement("p");
  commentElement.textcontent = ramenInfo.comment;
  ramenDetail.appendChild(commentElement);
};







const addSubmitListener = () => {
  // Add code
}






//****************************************************************
//Below is for the top display of ramen images. */
const displayRamens = () => {
  fetch('http://localhost:3000/ramens');
  .then(response => response.json())
  .then(data => {
    const ramenMenuDiv = document.getElementById('ramen-menu');

    data.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.images;

      ramenMenuDiv.appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
//displaying ramens once page loads:
document.addEventListener('DOMContentLoaded', displayRamens());

const ramenMenu = document.querySelector("#ramen-menu");
ramenMenu.addEventListener("click", handleClick);


const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
