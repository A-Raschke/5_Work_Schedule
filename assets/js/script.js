// listen for save button clicks
var saveButton = $('.saveBtn');

// function saves to local storage
var save = function() {
  var value = $(this).siblings('.description').val();
  var hour = $(this).parent().attr('id');
  localStorage.setItem(hour, value);
};

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// runs save function on click
saveButton.on('click', save);

// function uses DayJS to get the current hour and check if before, during or after
function hourUpdater() {
  var currentHour = dayjs().hour();
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}
hourUpdater();