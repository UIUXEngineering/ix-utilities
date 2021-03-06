/** Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff',
  rsComboMarksRange = '\\u0300-\\u036f',
  reComboHalfMarksRange = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange = '\\u20d0-\\u20ff',
  rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
const rsZWJ = '\\u200d';

/** Used to detect strings with
 * http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/
 */
const reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

/**
 * Checks if `_string` contains Unicode symbols.
 *
 * Returns `true` if a symbol is found, else `false`.
 *
 * @param string The _string to inspect.
 */
export function hasUnicode(string: string): boolean {
  return reHasUnicode.test(string);
}
