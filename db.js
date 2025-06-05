// the code lines below create an array(userDb) in the local storage of the browser. (This will serve as the database for this project)===========start


// if there isn't any user database in the local storage, create one with an empty array 
// (i did this with an if statement because if i simply did this "localStorage.setItem("userDb", JSON.stringify([])" it will overwrite the existing userDb every time the page is loaded)
if (!localStorage.getItem("userDb")) {
  localStorage.setItem("userDb", JSON.stringify([]));
}

// get the user database from the local storage and parse it to convert it from a string to an array
let db = JSON.parse(localStorage.getItem("userDb"));
// ==================================================================end

// function to add the new user's object to the array saved in the local storage and to update the array by re-saving it again after the array has been modified
function saveDb(new_user) {
  db.push(new_user);
  localStorage.setItem("userDb", JSON.stringify(db));
}
