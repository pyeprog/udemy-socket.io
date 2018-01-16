const expect = require('expect');
const {generateMessage} = require('./message');

describe('Generate message', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'test message';
    var message = generateMessage(from, text);
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
