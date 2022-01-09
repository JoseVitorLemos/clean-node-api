import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .expect('access-control-allow-headers', '*')
      .send({
        name: 'any_name',
        email: 'any_email@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
