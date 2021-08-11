const request = require('request')
request('http://localhost/Btn2PDF/index.html', function (
  error,
  response,
  body
) {
  console.error('error:', error)
  console.log('body:', body)
})