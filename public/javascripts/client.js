/* eslint-disable */

const input = document.getElementById('url');
const button = document.getElementById('actionButton');
const responseA = document.getElementById('responseA');
var form = document.getElementById('actionForm');


console.log('button', button)
button.onclick = async (ev) => {
    const isValidForm = form.checkValidity();
    if (isValidForm) {
        ev.preventDefault()

        let response = await fetch('/api/v1/codes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                url: input.value
            })
        });

        let result = await response.json();
        responseA.setAttribute('href', result.short_url)
        responseA.innerText = result.short_url
        responseA.classList.add(['shown'])

    }

};