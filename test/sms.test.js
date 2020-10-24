const { greenSmsInstance } = require('./../examples/greensms');
const chai = require('chai');
const chaiAsPromise = require('chai-as-promised');

const { expect } = chai;

chai.use(chaiAsPromise);

describe('SMS', function() {

  it('should have a key request_id', async function() {
    const data = await greenSmsInstance.sms.send({
      to: '919987409698',
      txt: 'Here is your message for delivery',
    });
    expect(data).to.have.property('requestId');
  });

  it('should throw an Error if to is not specified', async function() {
    await expect(greenSmsInstance.sms.send()).to.be.rejectedWith(Error);
  });

  it('should have a key status', async function() {

    const smsStatusParams = {
      id: 'dc2bac6d-f375-4e19-9a02-ef0148991635',
      extended: true
    };

    const data = await greenSmsInstance.sms.status(smsStatusParams);
    expect(data).to.have.property('status');
  });

});
