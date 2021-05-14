const path = require('path')
const fs = require('fs')

module.exports = function(router) {
  router.get('/serve/test/get', async ctx => {
    ctx.body = {
      code: '200',
      data: { method: 'get' },
    }
  })
  router.post('/serve/test/post', async ctx => {
    ctx.body = {
      code: '200',
      data: { method: 'post' },
    }
  })

  router.post('/serve/download', async ctx => {
    const filePath = path.join(__dirname, 'logo.png')
    let file = fs.createReadStream(filePath)
    await new Promise((resolve, reject) => {
      file.on('open', function () {
        ctx.set('content-type', 'application/octet-stream')
        ctx.body = file
        resolve()
      })
      file.on('error', function (err) {
        reject(err)
      })
    })
  })
}
