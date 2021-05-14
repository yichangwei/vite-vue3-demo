const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')
const http = require('http')

const app = new Koa()
const router = new KoaRouter()
KoaBody({ multipart: true })

// koa引入
require('./serve/test')(router)

app.use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods())

const server = http.createServer(app.callback())

const PORT = 4000
server.listen(PORT, () => {
  console.log(`服务启动成功，端口号: ${PORT}`)
})
