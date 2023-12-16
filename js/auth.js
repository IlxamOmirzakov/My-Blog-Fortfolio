const logoutEL = document.querySelector('#logout')

const urlParams = window.location.search
const params = new URLSearchParams(urlParams)

const clientEmail = params.get('email') || localStorage.getItem('email')
const clientPassword = params.get('password') || localStorage.getItem('password')

let registeredUsers = [
    {
        email: 'omirzaqovilham@gmail.com',
        password: '123',
    },
]

function checkAuth() {
    const isExistUser = registeredUsers.find(item => item.email === clientEmail)

    if (!isExistUser || !isExistUser.password !== clientPassword) {
        localStorage.clear()  
        window.location.replace("../form.html")
        
    } else {
        if (params.get('email')) {
            Toastify({
                text:'Login successfull!',
                icon: 'success',
            }).showToast()
        }
        localStorage.setItem('email', isExistUser.email)
         localStorage.setItem('password', isExistUser.password)
    }
}

function logout() {
    localStorage.clear()
    window.location.replace("../form.html")
}

logoutEL.onclick = () => {
    const isConfirm = confirm('Dou you want logout?')

    if(isConfirm) {
        logout()
    }
}

checkAuth()