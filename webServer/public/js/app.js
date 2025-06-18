const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    
    messageOne.textContent = 'Yükleniyor...'
    messageTwo.textContent = ''
    
    fetch('/api/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = `Sıcaklık: ${data.forecast.temperature}°C, Hissedilen: ${data.forecast.feelsLike}°C, Hava Durumu: ${data.forecast.weather}`
            }
        })
    })
});

console.log('Script çalıştı');

fetch('https://puzzle.mead.io/puzzle')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Puzzle data:', data);
    })
    .catch((error) => {
        console.error('Puzzle fetch error:', error);
    });

fetch('http://localhost:3000/api/weather?address=ankara')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Weather data location:', data.location);
        console.log('Weather data forecast:', data.forecast);
    })
    .catch((error) => {
        console.error('Weather fetch error:', error);
    });
