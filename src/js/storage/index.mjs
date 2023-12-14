/**
 * Saves the specified value associated with the key to localStorage.
 *
 * @param {string} key - The key where to store the value.
 * @param {any} value - The value to be stored.
 *
 * @returns {void}
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retreives the value that is assosiated with the specified key from localStorage.
 * @param {string} key - The key of the item to be retreived.
 * @returns {any} The value that is associated with the key or null.
 */
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * Removes an item with a specified key from localStorage.
 * @param {string} key - The key of the item to be removed.
 */
export function remove(key) {
  localStorage.removeItem(key);
}
