var restaurants = [
    {
        name: "Mama's Italian Kitchen",
        description: "Authentic Italian cuisine served in a cozy atmosphere",
        cuisine: "Italian",
        address: "123 Main St., Vancouver, BC",
        phone: "555-1234",
        rating: 4.5,
        image: "https://www.mammasitalian.ca/images/logohome-u76.png?crc=3930046569"
    },
    {
        name: "Nonna's Pasta House",
        description: "Classic Italian dishes made with fresh ingredients",
        cuisine: "Italian",
        address: "456 Oak St., Vancouver, BC",
        phone: "555-5678",
        rating: 4.3,
        image: "https://oldspaghettifactory.ca/wp-content/uploads/2023/02/OSF_Menu_2023-08-scaled.jpg"
    },
    {
        name: "Sakura Sushi",
        description: "Fresh sushi and sashimi made to order",
        cuisine: "Japanese",
        address: "456 Broadway, Vancouver, BC",
        phone: "555-5678",
        rating: 4.2,
        image: "https://res.cloudinary.com/codefusiontech/image/upload/f_auto,q_auto:best/v1601693840/sushisakura/hero.jpg"
    },
    {
        name: "Kishimoto Japanese Kitchen",
        description: "Creative Japanese cuisine served in a modern atmosphere",
        cuisine: "Japanese",
        address: "2054 W 4th Ave, Vancouver, BC",
        phone: "555-6789",
        rating: 4.6,
        image: "https://static.wixstatic.com/media/6b590b_9319d3e4a9924127b0a57706f748ea44~mv2.jpg/v1/fill/w_1642,h_805,al_c,q_85,enc_auto/6b590b_9319d3e4a9924127b0a57706f748ea44~mv2.jpg"
    },
    {
        name: "The Fish Counter",
        description: "Fresh seafood served in a casual setting",
        cuisine: "Seafood",
        address: "1234 Commercial Dr., Vancouver, BC",
        phone: "555-9012",
        rating: 4.8,
        image: "https://thefishcounter.ca/wp-content/uploads/2023/03/fish-dinner-chips-1684828.jpg"
    },
    {
        name: "La Taqueria",
        description: "Authentic Mexican street food in a vibrant atmosphere",
        cuisine: "Mexican",
        address: "123 Hastings St., Vancouver, BC",
        phone: "555-3456",
        rating: 4.7,
        image: "https://images.squarespace-cdn.com/content/v1/5af35a5ada02bc86d2f7c845/1636997473081-Y0CHHZ526OS5V58AL8GR/image-asset.jpeg?format=2500w"
    },
    {
        name: "Vij's",
        description: "Creative Indian cuisine served in a modern setting",
        cuisine: "Indian",
        address: "1234 W Broadway, Vancouver, BC",
        phone: "555-7890",
        rating: 4.9,
        image: "https://static.wixstatic.com/media/11062b_6ffa784444774a4997c879c0bd717418~mv2.jpeg/v1/crop/x_1926,y_0,w_5047,h_6675/fill/w_822,h_1100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indian%20Food.jpeg"
    },
    {
        name: "Phnom Penh",
        description: "Cambodian and Vietnamese dishes in a casual eatery",
        cuisine: "Cambodian/Vietnamese",
        address: "244 E Georgia St., Vancouver, BC",
        phone: "555-2345",
        rating: 4.4,
        image: "https://img1.wsimg.com/isteam/ip/5bec54b4-41f6-4ce0-b4e0-1705b65fb223/Phnom%20Penh%20%20red.png/:/rs=w:502,h:292,cg:true,m/cr=w:502,h:292/qt=q:95"
    }
];


function searchRestaurants(searchValue, restaurants) {
    var matchedRestaurants = [];
    for (var i = 0; i < restaurants.length; i++) {
        var restaurant = restaurants[i];
        if (restaurant.name.toLowerCase().indexOf(searchValue) !== -1 ||
            restaurant.description.toLowerCase().indexOf(searchValue) !== -1 ||
            restaurant.cuisine.toLowerCase().indexOf(searchValue) !== -1) {
            matchedRestaurants.push(restaurant);
        }
    }
    return matchedRestaurants;
}

function displayRestaurants(restaurants) {
    var recipeContainer = getElement("recipeContainer");
    recipeContainer.innerHTML = "";

    if (restaurants.length > 0) {
        var noResultsNote = createElement("div");
        addStyleClass(noResultsNote, "no-results-note");
        var noResultsText = createElement("p");
        noResultsText.textContent = "We could not find a matching recipe. Here are some suggested restaurants:";
        addStyleClass(noResultsText, "no-results-text");
        append(noResultsNote, noResultsText);

        append(recipeContainer, noResultsNote);

        for (var i = 0; i < restaurants.length; i++) {
            var restaurant = restaurants[i];

            var restaurantCard = createElement("div");
            addStyleClass(restaurantCard, "restaurant-card");

            var restaurantName = createElement("h3");
            restaurantName.textContent = restaurant.name;
            addStyleClass(restaurantName, "restaurant-name");
            append(restaurantCard, restaurantName);

            var restaurantDetails = createElement("div");
            addStyleClass(restaurantDetails, "restaurant-details");

            var restaurantImage = createElement("img");
            restaurantImage.src = restaurant.image;
            addStyleClass(restaurantImage, "restaurant-image");
            append(restaurantDetails, restaurantImage);

            var restaurantInfo = createElement("div");
            addStyleClass(restaurantInfo, "restaurant-info");

            var restaurantDescription = createElement("p");
            restaurantDescription.textContent = restaurant.description;
            addStyleClass(restaurantDescription, "restaurant-description");
            append(restaurantInfo, restaurantDescription);

            var restaurantCuisine = createElement("p");
            restaurantCuisine.textContent = "Cuisine: " + restaurant.cuisine;
            addStyleClass(restaurantCuisine, "restaurant-cuisine");
            append(restaurantInfo, restaurantCuisine);

            var restaurantAddress = createElement("p");
            var addressLink = createElement("a");
            addressLink.textContent = restaurant.address;
            addressLink.href = "https://www.google.com/maps/place/" + encodeURIComponent(restaurant.address);
            addressLink.target = "_blank";
            addStyleClass(restaurantAddress, "restaurant-address");
            append(restaurantAddress, addressLink);
            append(restaurantInfo, restaurantAddress);

            var restaurantPhone = createElement("p");
            restaurantPhone.textContent = "Phone: " + restaurant.phone;
            addStyleClass(restaurantPhone, "restaurant-phone");
            append(restaurantInfo, restaurantPhone);

            var restaurantRating = createElement("p");
            restaurantRating.textContent = "Rating: " + restaurant.rating;
            addStyleClass(restaurantRating, "restaurant-rating");
            append(restaurantInfo, restaurantRating);

            append(restaurantDetails, restaurantInfo);
            append(restaurantCard, restaurantDetails);

            append(recipeContainer, restaurantCard);
        }
    }
}


