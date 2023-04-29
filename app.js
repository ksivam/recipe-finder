function search() {
    var searchValue = getValueOf("searchInput").toLowerCase();

    var matchedRecipes = searchRecipes(searchValue, recipes);
    if (matchedRecipes.length > 0) {
        // Display the matched recipes
        displayRecipes(matchedRecipes);
    } else {
        // No recipes found, suggest restaurants
        var matchedRestaurants = searchRestaurants(searchValue, restaurants);
        if(matchedRestaurants.length > 0) {
            displayRestaurants(matchedRestaurants);
        } else {
            var recipeContainer = getElement("recipeContainer");
            recipeContainer.innerHTML = "";
            // no restaurants found, display no results note
            var noResultsNote = createElement("div");
            addStyleClass(noResultsNote, "no-results-note");

            var noResultsText = createElement("p");
            noResultsText.textContent =
                "\"Uh oh, looks like there's nothing cooking with those ingredients or restrictions. How about trying something else? Let's whip up something delicious together!";
            addStyleClass(noResultsText, "no-results-text");
            append(noResultsNote, noResultsText);

            append(recipeContainer, noResultsNote);
        }
    }
}
