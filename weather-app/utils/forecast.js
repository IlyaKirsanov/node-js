const request = require ('request');

// const forecast = (latitude, longitude, callback)=>{
//     const url = 'https://api.darksky.net/forecast/c4c630ad228f8ba9bfaa7ca6699c4186/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si&lang=ru'
//
//     request({url:url, json:true}, (error, response)=>{
//         if(error){
//             callback('Unable to connect to forecast services!', undefined)
//         }else if (response.body.error){
//             callback('Unable to find forecast location', undefined);
//         }else {
//             callback(undefined, {
//                 info: response.body.currently,
//                 temp: response.body.daily.data[0].summary,
//                 rain: response.body.currently.precipProbability
//             })
//         }
//     })
// }

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/c4c630ad228f8ba9bfaa7ca6699c4186/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si&lang=ru'

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to forecast services!', undefined)
        }else if (body.error){
            callback('Unable to find forecast location', undefined);
        }else {
            callback(undefined, {
                info: body.currently,
                temp: body.daily.data[0].summary,
                rain: body.currently.precipProbability
            })
        }
    })
}


module.exports = forecast;