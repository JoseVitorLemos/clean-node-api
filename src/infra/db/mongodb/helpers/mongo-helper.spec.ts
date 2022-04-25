import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    let accountCollection = sut.getCollection('account')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = sut.getCollection('account')
    expect(accountCollection).toBeTruthy()
  })
})
