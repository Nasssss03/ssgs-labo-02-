const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters
} = require('../stringUtils');

describe('String Utilities', () => {
  describe('reverseString', () => {
    it('should reverse a string correctly', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('')).toBe('');
      expect(reverseString('a')).toBe('a');
    });
  });

  describe('isPalindrome', () => {
    it('should identify palindromes correctly', () => {
      expect(isPalindrome('radar')).toBe(true);
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('')).toBe(true);
      expect(isPalindrome('a')).toBe(true);
    });
  });

  describe('truncateString', () => {
    it('should truncate string to specified length', () => {
      expect(truncateString('hello world', 5)).toBe('hello');
      expect(truncateString('short', 10)).toBe('short');
      expect(truncateString('', 5)).toBe('');
    });
  });

  describe('countCharacters', () => {
    it('should count character occurrences correctly', () => {
      expect(countCharacters('hello')).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1
      });
      expect(countCharacters('')).toEqual({});
      expect(countCharacters('aaa')).toEqual({ a: 3 });
    });
  });
}); 