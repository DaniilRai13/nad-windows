class User {
    async create(user) {
        const res = await fetch('https://nad-windows-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'applicatin/json'
            }
        })
        const data = res.json()
        return console.log(data)
    }
}

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'nadwindo_test',
//     database: 'nadwindo_danik',
//     password: 'Dimalox12!'
// })

// connection.connect((err) => {
//     if (err) console.log(err)
//     else console.log('Database conn.....')
// })


// const contactForm = document.querySelector('#contacts')
// const btn = contactForm.querySelector('.form-btn')

// btn.addEventListener('click', async (e) => {
//     e.preventDefault()
//     console.log(12)
// })
