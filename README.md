Project test done by Oladapo Stephen Ayoola.

// Run this Project
1. yarn install
2. yarn start


// WHAT I HAVE DONE

I have created multiple component and routes (home page, Not found, Story and ShowStories) called them from the AppRouter via BrowserRouter.
On click of the "Top Stories" from the NavLink will call the datafetcher which gets and sets the stories. 
This is done by making a API request to the given Base API URL, gets the data and maps it into the landing page.
Each story returns the ID, By, title, kids, time and url. 

// EXTRA FEATURES
I added extra NavLink - Latest Stories and Best Stories
I have addes the number of comments per story.
I used multiple component to pass the data across (MVC)
I used tailwind for the CSS styling
isLoading feature, to display "Loading" as it awaits the data from the API
Error handling (catch error) if there is any error in getting the stories
