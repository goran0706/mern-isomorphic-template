import assert from 'assert';
import 'dotenv/config';
import http from 'http';

describe('Example Node Server', () => {
  it('should return 301', done => {
    http.get('http://127.0.0.1:8080', res => {
      assert.equal(301, res.statusCode);
      // server.close();
      done();
    });
  });
});
