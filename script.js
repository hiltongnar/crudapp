// directory


/*

To Do:
---create an array that stores all the user objects

---create a function if someone clicks the submit button
  pull all of the user inputs, store as an object - Search Jquery get input values
  pushes that user object to the master array

---create a function that clears all the inputs

create a function that deletes the cards when a user clicks the delete button

create function that renders all cards to page
  ---delete all current cards
  then render everything that is currently in the master array

  TO DO:
  Look at the CDN for jquery
  Work on getting the button rigged up
  Work on pulling the user input
*/
const bubble = arr => {
  let flag = true;

  while (flag === true) {
    flag = false;

    for (let x = 0; x < arr.length-1; x++) {

      if (arr[x]["last"].toLowerCase() > arr[x + 1]["last"].toLowerCase()) {
        let temp = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = temp;
        flag = true;
      }
    }
  }
  return arr;
}

function phoneNumberSort(str){
  let tempVar = "";

  for (let x = 0; x <= str.length; x++){
    if (Number.isInteger(parseInt(str[x]))){
      tempVar = tempVar + str[x];
    }
  }
  return tempVar;
}

function validateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
    return (false)
}



let userArray = [];

$('#mySubmit').click(function(){
  let first = $("#firstName").val();
  console.log(first)
  let last = $("#lastName").val();
  console.log(last)
  let email = $("#eMail").val();

  console.log(email)
  let phone = $("#phoneNumber").val();
  phone = phoneNumberSort(phone);
    if (first === "" || last === "" || email === "" || phone === ""){
      alert("All fields must be filled out.")
      return;
    }
    if (phone.length !== 10){
      alert("Invalid entry, Please enter 10 digit phone number.")
      return;
    }
    if (validateEmail(email) === false) {
      alert("You have entered an invalid email address!")
      return;
    }

  console.log(phone)
  let tempObj = {};

  tempObj.first = first;
  tempObj.last = last;
  tempObj.email = email;
  tempObj.phone = phone;

//if statements to take only acceptable formats, email phone etc.


  userArray.push(tempObj)

  $("#firstName").val("");
  $("#lastName").val("");
  $("#eMail").val("");
  $("#phoneNumber").val("");

  cardRender();
});

$('#myClear').click(function(){
  let first = $("#firstName").val("");
  let last = $("#lastName").val("");
  let email = $("#eMail").val("");
  let phone = $("#phoneNumber").val("");

});


// splice out userArray
//call card render function

function cardDelete(index){

userArray.splice(index,1);

cardRender();


};

function cardRender(){
  $('.results').empty()

  userArray = bubble(userArray);

  // TO DO - GO THROUGH AND MAKE EVERYTHING DYNAMIC
  for (let index = 0; index < userArray.length; index++) {
    let str = `
                <div class="card">
                  <h2>Member</h2>
                  <p id="cardName" style="font-size: 1.5em;">
                    Name: ` + userArray[index].first + ` ` + userArray[index].last +`
                  </p>
                  <p id="cardEmail" style="font-size: 1.5em;">
                    Email: ` + userArray[index].email + `
                  </p>
                  <p id="cardPhone" style="font-size: 1.5em;">
                    Phone Number: ` + userArray[index].phone +`
                  </p>
                  <p>
                    <button type="button" onClick="cardDelete(${index})"
                     id="`+ index +`">Delete</button>
                  </p>

                 </div>
              `;

    $('.results').append(str);
  }
};
// make delete click event
// console.log (e)
// find the id in dev tools
// splice out that id number from userArray
