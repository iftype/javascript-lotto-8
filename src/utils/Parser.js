class Parser {
  static stringToNumberArray(str) {
    if (typeof str !== 'string') return null;

    const numberArray = str
      .split(',')
      .map((e) => e.trim())
      .map(Number);

    if (numberArray.some(Number.isNaN)) return null;
    return numberArray;
  }
}
export default Parser;
