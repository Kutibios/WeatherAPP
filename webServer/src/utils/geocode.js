const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://eu1.locationiq.com/v1/search?key=pk.1e724185e23dcbcd2ee9a1e15dd053c3&q=' + encodeURIComponent(address) + '&format=json&limit=1'

    request({ url, json: true }, (error, response, body) => {
        if (error) {
            callback('Internet bağlantısını kontrol ediniz.', undefined)
        } else if (body.error) {
            callback('URL bilgilerini kontrol ediniz.', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location: body[0].display_name
            })
        }
    })
}

module.exports = geocode
