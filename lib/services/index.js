const AuthService = require('./lib/AuthService')
const TestService = require('./lib/TestService')
const FileService = require('./lib/FileService')

module.exports = {
  authService: new AuthService(),
  testService: new TestService(),
  fileService: new FileService()
}
