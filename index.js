let form = document.getElementById("form");

let clear_storage_button = document.getElementById("clear-storage");

// a function that saves the user input(name and password) to the local storage of the browser
function saveUserDetails() {
  // gets the username and password inputted by the user
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // create new object for the user
  let user = {
    username: username,
    password: password,
  };

  // a called function to add the new user's object to the array saved in the local storage and to save the updated array
  saveDb(user);
}

// added an event listener to the form to listen for the submit event and save the user details(by running the saveUserDetails function) when the form is submitted
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  saveUserDetails();
});