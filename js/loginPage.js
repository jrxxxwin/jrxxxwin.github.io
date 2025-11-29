function signup() {
    const sign = document.getElementById('signSide')
    const login = document.getElementById('loginSide')

    login.style.display = 'none'
    sign.style.display = 'flex'
}
function logins() {
    const sign = document.getElementById('signSide')
    const login = document.getElementById('loginSide')
    
    sign.style.display = 'none'
    login.style.display = 'flex'
}

function quickBrowse() {
     document.getElementById('browseSection').scrollIntoView({behavior: 'smooth'})
}
function quickHome() {
     document.getElementById('homeSection').scrollIntoView({behavior: 'smooth'})
}
function quickGuide() {
     document.getElementById('guideSection').scrollIntoView({behavior: 'smooth'})
}
function quickFeatures() {
     document.getElementById('featuresSection').scrollIntoView({behavior: 'smooth'})
}
function quickTest() {
     document.getElementById('testSection').scrollIntoView({behavior: 'smooth'})
}
function asddd() {
     window.location.href = "/base/loginPage.html"
}

function checkLog() {
    const email = document.getElementById('emailLogin')
    const pass = document.getElementById('passLogin')

    if (email == null || pass == null) {
        alert(email + pass)
    }
    else {
        const name = email.value
        const as = pass.value
        if (name == 'user1' && as == '123')
            window.location.href = "/base/dashboard.html"
    }
}