export function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
