/**
 * Clears the container with all child elements.
 *
 * @param {HTMElement} container - The container element to be cleared
 * @returns {void}
 */
export function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
