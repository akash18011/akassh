// server.test.js
const request = require('supertest');
const { app, server } = require('./index'); // Import the app and server

describe('GET /data', () => {
	afterAll(() => {
	    server.close(); // Close the server after all tests
  	});
	it('should respond with 200 OK and a JSON object', async () => {
	const response = await request(app).get('/data');

	expect(response.status).toBe(200);
	// expect(response.body.msg).toEqual('Success');
	});
});
