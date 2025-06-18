const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1ea483e5bfdeeed65201aded9736929a&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response, body) => {
        if (error) {
            callback('İnternet bağlantısını kontrol ediniz.', undefined)
        } else if (body.error) {
            callback('URL bilgilerini kontrol ediniz.', undefined)
        } else {
            callback(undefined, {
                sicaklik: body.current.temperature,
                hissedilen: body.current.feelslike,
                yagis: body.current.precip,
                hava: body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast
