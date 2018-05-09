"using strict";
$(document).ready( () => {
  let newHtmlBox;
  let origHtmlBox;

  let tableNum;
  let tableEl;
  let party;

  let reservation = [];
    
  // Fade the form in
  $(".table").on("click", function(event) {
    tableEl = $(event.target)
    tableNum = $(event.target).text();
    $("#table-id").text(tableNum);
    $(".hidden").fadeIn(500);
  });

  // Fade the form out
  $(".close-window").on("click", function(event) {
    $(".hidden").fadeOut(500);
  });


  // This function reveals/changes the text inside a box
  $(".reserved").on("mouseenter", function(event) {
    console.log(event);
    newHtmlBox = $(event.target).html(`<div class="popup"><p>Name: ${name}</p><p>Party Size${partySize}</p></div>`);
    origHtmlBox = $(event.target).html();
    // $(event.target).append(name);
  }).on("mouseleave", function(event) {
    $(event.target).html(origHtmlBox);
  });


  // Get the value of what is entered, store to party object, push to reservation array, and fade out the form
  $(".btn").on("click", function(event) {
    party = {
      reserveName: $("#name").val(),
      contactNumber: $("#phone").val(),
      partySize: $("#party").val(),
      resTable: tableNum
    }
    reservation.push(party);
    console.log(reservation);

    $("#name").val("");
    $("#phone").val("");
    $("#party").val("");
    $(tableEl).toggleClass("available reserved");
    $(".hidden").fadeOut(500);
  });

  // $("#clear-btn").on("click", function(event) {
  //   userName = $("#name-id").val("");
  //   $("#name-id").val("");
  //   container.attr("name", userName);
  //   container.toggleClass("available reserved");
  //   $("form").fadeOut(500).hide();
  // });

  // // This event will not run on new elements with the button class
  // $(".button").on("click", () => {
  //   console.log("On a click of a certain element");
  //   $(event.target).css("color", "red");
  // });
  
  // // This event will log that a key has been pressed
  // $(document).on("keypress", function(index) {
  //   console.log("Somebody pressed a key");
  // });

  
  // // This event will run on new elements with the button class
  // $(document).on("click", ".button", (x) => {
  //   console.log("success!");
  // });
  

});




