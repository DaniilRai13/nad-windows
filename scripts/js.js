const form = document.querySelector('form')
const inputForName = form.querySelector('.form-name')
const inputForPhone = form.querySelector('.form-phone')
const btn = form.querySelector('.form-btn')

let userClass = new User()

inputForName.addEventListener('input', () => {
    console.log(isValid(inputForName.value, inputForPhone.value))
    btn.disabled = !isValid(inputForName.value, inputForPhone.value)
})

inputForPhone.addEventListener('input', () => {
    console.log(isValid(inputForName.value, inputForPhone.value))
    btn.disabled = !isValid(inputForName.value, inputForPhone.value)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (isValid(inputForName.value, inputForPhone.value)) {
        console.log(inputForName.value, inputForPhone.value)
        const userInfo = {
            name: inputForName.value.trim(),
            phone: inputForPhone.value.trim(),
            date: new Date().toJSON(),
        }
        // btn.disabled = true
        userClass.create(userInfo).then(() => {
                inputForName.value = inputForPhone.value = ''
                btn.disabled = true
            })
    }
})

function isValid(name, phone) {
    return (name.length < 20 && name.length >= 2) && (phone.length <= 13 && phone.length >= 9)
}







