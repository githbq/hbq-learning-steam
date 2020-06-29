`消费者示例1`
const rs = process.stdin

let count = 0
rs.on('data', chunk => {
  console.log(chunk.toString())
  rs.pause() // 每次接收到数据后都暂停
  console.log(rs.isPaused())
  console.log('count: ', count++)
  // 这里我们模拟每次接收的数据处理3 秒再回复flowing 模式
  setTimeout(() => rs.resume(), 3000)
})