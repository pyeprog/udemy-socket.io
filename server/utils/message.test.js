const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('Generate message', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'test message';
    var message = generateMessage(from, text);
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('Generate location message', () => {
  it('should generate correct location object', () => {
    var from = 'Tom';
    var latitude = 15;
    var longitude = 23;
    var url = 'http://www.google.com/maps?q=15,23';
    var locationMsg = generateLocationMessage(from, latitude, longitude);
    expect(locationMsg.url).toBe(url);
    expect(locationMsg.from).toBe(from);
    expect(locationMsg.createAt).toBeA('number');
    expect(locationMsg).toInclude({url, from});
  });
});
