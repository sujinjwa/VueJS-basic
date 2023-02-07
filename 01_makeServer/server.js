let http = require('http'); // node로부터 http 모듈 받아오기
let fs = require('fs'); // node로부터 파일 시스템 모듈 받아오기

// mySet = 서버 구동 시 셋팅 코드
const mySet = (request, response) => {
    let url = request.url; // request.url = 브라우저에서 요청할 때 보내는 url 기록
    if(url === '/') {
        url = '/index.html';
    }

    response.writeHead(200, {'Content-Type': 'text/html'});
    let htmlFile = fs.readFileSync(__dirname + url);
    response.end(htmlFile);
}

const app = http.createServer(mySet); // http 프로그램 안에 들어 있는 createServer() 함수에 mySet을 인자로 넣어 메모리에 올린다/
app.listen(8080);


// console.log('js작동된다.');