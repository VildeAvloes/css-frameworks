/**
 * Retrieves a value of the querystring parameter from the current url.
 *
 * @param {string} param - The name of the query string parameter.
 *
 * @returns {string} The value of the specified query string param.
 *
 * @example
 * Example URL : "https://example.com/page?id=1234"
 * const value = getQueryStringParam ("id");
 * console.log(value);
 * Output: "1234"
 */
export function getQueryStringParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
