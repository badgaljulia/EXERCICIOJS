let intervalId;

function scrollMessage() {
  let messageField = document.getElementById("messageField");
  let message = messageField.value;
  message = message.substring(1) + message[0]; 
  messageField.value = message;
}

function startScroll() {
  intervalId = setInterval(scrollMessage, 200);
}

function stopScroll() {
  clearInterval(intervalId);
}