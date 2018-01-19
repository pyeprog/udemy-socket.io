const expect = require('expect');
const {isRealString} = require('./validation');

describe('validation function', () => {
  it('should reject non-string value', () => {
    var testCase1 = 123;
    var testCase2 = true;
    expect(isRealString(testCase1)).toBe(false);
    expect(isRealString(testCase2)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var testCase1 = '     ';
    expect(isRealString(testCase1)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var testCase1 = 'dbc';
    expect(isRealString(testCase1)).toBe(true);
  });
});
