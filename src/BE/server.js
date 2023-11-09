// express 모듈 호출
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5306;
 
// http://localhost:5306/ 으로 접속 시 응답메시지 출력
app.get('/', (req,res) => {
    res.send('Server Response Success');
})
 
app.listen(PORT, () => {
    console.log(`서버 실행중 : http://localhost:${PORT}/`)
})