export function messageTemplate(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("py-3");

  const messageText = document.createElement("p");
  messageText.textContent = message;
  messageElement.appendChild(messageText);

  return messageElement;
}
