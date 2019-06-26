const https = require ('https');

const url = 'https://api.darksky.net/forecast/c4c630ad228f8ba9bfaa7ca6699c4186/40,-75?units=si&lang=ru';

const request = https.request(url, (response)=>{

    let data = '';

    response.on('data', (chunk)=>{
        data = data + chunk.toString();

    })

    response.on ('end', ()=> {
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.on('error', (error)=>{
    console.log('An error',error)
})

request.end();