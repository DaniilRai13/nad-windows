const TELEGRAM_BOT_TOKEN = '6978457392:AAEgu54EszfEobhrm5MeSD8dTbUEj7MO1h8';
const TELEGRAM_CHAT_ID = '@NAD_app_bot1';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const form = document.querySelector('form')
const inputForName = form.querySelector('.form-name')
const inputForPhone = form.querySelector('.form-phone')
const btn = form.querySelector('.form-btn')

inputForName.addEventListener('input', () => {
    btn.disabled = !isValid(inputForName.value, inputForPhone.value)
})

inputForPhone.addEventListener('input', () => {
    btn.disabled = !isValid(inputForName.value, inputForPhone.value)
    console.log(inputForPhone.value.length)
})

inputForPhone.addEventListener('focus', (e) => {
    if (!(e.target.value.length > 4 && e.target.value.slice(0, 4) === '+375')) {
        e.target.value = '+375'
    }

})

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let { username, userphone } = Object.fromEntries(new FormData(e.target).entries())

    // First of all we create new FormData
    //after that we make array of arrays[key,value] and then we make object of our array[](fromEntries)


    try {
        let applicationNumber = 0

        await setApplicationNumber(username, userphone)
        await countApplications().then(data => applicationNumber = data)

        let applicationText = `Заявка номер ${applicationNumber} \nИмя: ${username} \nНомер телефона: ${userphone}`
        console.log(applicationText)
        // form.reset()
        let response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: applicationText,
            })
        });

        if (response.ok) {
            form.reset()
            btn.disabled = true
        } else {
            throw new Error(response.statusText)
        }
    } catch (error) {
        console.log(error)
        console.log('Application text was not sent ')
    }

})

function isValid(name, phone) {
    return (name.length < 20 && name.length >= 2) && (phone.length == 13)
}

async function setApplicationNumber(name, phone) {
    return await fetch('https://nad-windows-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: new Date(Date.now()),
            name,
            phone,
        })
    });
}

async function countApplications() {
    return await fetch('https://nad-windows-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => {
            return Object.keys(data).length === null ? 0 : Object.keys(data).length
        })
}
