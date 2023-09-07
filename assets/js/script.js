$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").click(function (event) {

    event.preventDefault();
  
    var textVal = $(this).siblings(".time-block").val();
    var hourVal = $(this).parent().attr("id").split("-")[1];

    localStorage.setItem(hourVal, textVal);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  loopNum();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  getLocal();
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MMM D, YYYY'));
})

function getLocal () {
  for (let i=9; i<=17; i++) {
    $(`#hour-${i} .time-block`).val(localStorage.getItem(`${i}`));
  }
}

function loopNum () {
  for (let i=9; i<=17; i++) {
    sortHours(i);
  }
}

function sortHours (hour) {
  let currentHour = dayjs().format('HH');
  if (hour < currentHour) {
    let classHour = $(`#hour-${hour}`);
    if (classHour.hasClass("past")) {
    } else {
      classHour.removeClass("present");
      classHour.removeClass("future");
      classHour.addClass("past");
    }
  } else if (hour > currentHour) {
    let classHour = $(`#hour-${hour}`);
    if (classHour.hasClass("future")) {
    } else {
      let classHour = $(`#hour-${hour}`);
      classHour.removeClass("present");
      classHour.removeClass("past");
      classHour.addClass("future");
    }
  } else {
    let classHour = $(`#hour-${hour}`);
    if (classHour.hasClass("present")) {
    } else {
      let classHour = $(`#hour-${hour}`);
      classHour.removeClass("past");
      classHour.removeClass("future");
      classHour.addClass("present");
    }
  }
}