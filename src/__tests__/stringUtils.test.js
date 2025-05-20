const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters
} = require('../stringUtils');

describe('String Utilities', () => {
  describe('reverseString', () => {
    it('should reverse a basic string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    it('should handle empty strings', () => {
      expect(reverseString('')).toBe('');
    });

    it('should handle single character strings', () => {
      expect(reverseString('a')).toBe('a');
    });

    it('should handle strings with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    it('should handle strings with special characters', () => {
      expect(reverseString('hello!@#')).toBe('#@!olleh');
    });

    it('should handle strings with numbers', () => {
      expect(reverseString('12345')).toBe('54321');
    });
  });

  describe('isPalindrome', () => {
    it('should identify simple palindromes', () => {
      expect(isPalindrome('radar')).toBe(true);
      expect(isPalindrome('level')).toBe(true);
    });

    it('should identify non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
    });

    it('should handle empty strings', () => {
      expect(isPalindrome('')).toBe(true);
    });

    it('should handle single characters', () => {
      expect(isPalindrome('a')).toBe(true);
    });

    it('should ignore case', () => {
      expect(isPalindrome('Radar')).toBe(true);
      expect(isPalindrome('Level')).toBe(true);
    });

    it('should ignore spaces', () => {
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('Was it a car or a cat I saw')).toBe(true);
    });

    it('should handle special characters', () => {
      expect(isPalindrome('A1b2b1a')).toBe(true);
      expect(isPalindrome('A1b2c1a')).toBe(false);
    });
  });

  describe('truncateString', () => {
    it('should truncate strings longer than maxLength', () => {
      expect(truncateString('hello world', 5)).toBe('hello...');
    });

    it('should not truncate strings shorter than maxLength', () => {
      expect(truncateString('short', 10)).toBe('short');
    });

    it('should handle empty strings', () => {
      expect(truncateString('', 5)).toBe('');
    });

    it('should handle strings equal to maxLength', () => {
      expect(truncateString('hello', 5)).toBe('hello');
    });

    it('should handle zero maxLength', () => {
      expect(truncateString('hello', 0)).toBe('...');
    });

    it('should handle negative maxLength', () => {
      expect(truncateString('hello', -1)).toBe('...');
    });
  });

  describe('countCharacters', () => {
    it('should count characters in a basic string', () => {
      expect(countCharacters('hello')).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1
      });
    });

    it('should handle empty strings', () => {
      expect(countCharacters('')).toEqual({});
    });

    it('should handle strings with repeated characters', () => {
      expect(countCharacters('aaa')).toEqual({ a: 3 });
    });

    it('should handle strings with spaces', () => {
      expect(countCharacters('hello world')).toEqual({
        h: 1,
        e: 1,
        l: 3,
        o: 2,
        w: 1,
        r: 1,
        d: 1,
        ' ': 1
      });
    });

    it('should handle strings with special characters', () => {
      expect(countCharacters('hello!@#')).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1,
        '!': 1,
        '@': 1,
        '#': 1
      });
    });

    it('should handle strings with numbers', () => {
      expect(countCharacters('hello123')).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1,
        '1': 1,
        '2': 1,
        '3': 1
      });
    });
  });
}); 