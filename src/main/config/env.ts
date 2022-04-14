export default {
  mongoUrl: process.env.__MONGO_URI__ ?? 'mongodb://127.0.0.1:27017/clean-node-api',
  port: process.env.PORT ?? 5050
}
