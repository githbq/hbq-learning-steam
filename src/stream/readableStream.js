const fs = require('fs')
// 创建一个可读流
const rs = fs.createReadStream('./package-lock.json', {
  // 相当于控制水桶大小
  highWaterMark: 1024 // 控制流每次 on data 的大小，默认是16kb
})
let onDataCount = 0
rs.on('data', chunk => { // 每挑桶一次
  console.log(chunk.toString('utf-8'))
  console.log(onDataCount++) // 挑桶多少次
})

rs.on('end', () => {
  console.log('end')
})