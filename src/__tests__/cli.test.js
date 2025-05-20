const { execSync } = require('child_process');
const path = require('path');

describe('CLI Interface', () => {
  const cliPath = path.join(__dirname, '../../index.js');

  describe('reverse command', () => {
    it('should reverse a string', () => {
      const output = execSync(`node ${cliPath} reverse hello`).toString().trim();
      expect(output).toBe('olleh');
    });
  });

  describe('palindrome command', () => {
    it('should identify palindromes', () => {
      const output = execSync(`node ${cliPath} palindrome radar`).toString().trim();
      expect(output).toBe('"radar" is a palindrome');
    });

    it('should identify non-palindromes', () => {
      const output = execSync(`node ${cliPath} palindrome hello`).toString().trim();
      expect(output).toBe('"hello" is not a palindrome');
    });
  });

  describe('truncate command', () => {
    it('should truncate string to specified length', () => {
      const output = execSync(`node ${cliPath} truncate "hello world" 5`).toString().trim();
      expect(output).toBe('hello...');
    });
  });

  describe('count command', () => {
    it('should count character occurrences', () => {
      const output = execSync(`node ${cliPath} count hello`).toString().trim();
      expect(output).toContain('h: 1');
      expect(output).toContain('e: 1');
      expect(output).toContain('l: 2');
      expect(output).toContain('o: 1');
    });
  });
}); 