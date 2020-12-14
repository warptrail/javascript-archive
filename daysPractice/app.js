console.log(dayjs());

const events = document.querySelectorAll(".event");

events.forEach((event) => {
  // console.log(event);
  const date = dayjs(event.dataset.date).format("dddd, MMMM D - h:mm A");
  console.log(date);
  const dateElement = event.querySelector(".date");
  dateElement.innerText = date;
});
