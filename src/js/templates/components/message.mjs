/**
 * Generates an HTML message element with a message text that is provided.
 * @param {string} message - The message text to be displayed.
 *
 * @returns {HTMLDivElement} The generated message element
 */
export function messageTemplate(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("py-3");

  const messageText = document.createElement("p");
  messageText.textContent = message;
  messageElement.appendChild(messageText);

  return messageElement;
}
