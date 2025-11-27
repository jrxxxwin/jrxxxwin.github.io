function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.addEventListener('DOMContentLoaded', () => {
    const conta = document.getElementById('connections_container');
    let addhtml = ''
    const c1 = document.getElementById('connections').style.display = 'grid'
     let num = 0
    for (let i = 0; i < users.length; i++) {
        const {firstname, lastname, title} = users[i].name
        const {displaypicture} = users[i].profilePicture
        const {id} = users[i]
        let html = `
            <div id="connections_card" class="connections_card">
                    <div id="connections_img" style="background-image: url(${displaypicture});"></div>
                    <input type="text" class="userID" value="${id}" style="display: none;">
                    <section>
                        <p id="connections_name">${firstname} ${lastname}</p>
                        <p id="connections_X"><span>${title}</span> > <span>Cooking</span></p>
                    </section>
                    <div class="connections_btn"></div>
                </div>
            `
        addhtml += html
        num++
    }
    conta.innerHTML = addhtml
    document.getElementById('countNum').innerText = num
});



document.addEventListener('click', function() {
  const items = document.querySelectorAll('.connections_card'); // Select all div elements with class 'item'

  items.forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'highlighted' class from all item
        items.forEach(i => i.classList.remove('highlighted'));
        
        // Add 'highlighted' class to the clicked item
        this.classList.add('highlighted');
        
        const userID = this.querySelector('.userID').value
        const userINT = parseInt(userID)

        const userinfo = users.find(users => users.id === userINT) || Nusers.find(Nusers => Nusers.id === userINT) || Vusers.find(Vusers => Vusers.id === userINT)
        const preview = document.getElementById('connections_previewC')

        let html = `
        <div id="preview_card">
                <div id="preview_profile">
                    <div class="userBG" style="background-image: url(${userinfo.profilePicture.backgroundpic});"></div>
                    <div class="preview_profile_info">
                        <img src="${userinfo.profilePicture.displaypicture}" alt="">
                        <section>
                            <h1 id="preview_name">${userinfo.name.firstname} ${userinfo.name.lastname}</h1>
                            <h2 id="preview_title">${userinfo.name.title}</h2>
                    </div>
                </div>
                <div class="preview_section">
                    <div>
                        <div id="contact_section">
                            <p>30 connections - 6 mutuals</p>
                            <p>${userinfo.bio.shortBio}</p>
                            <div class="contact-row">
                                <button class="contact-btn">Connected</button>
                                <button class="contact-btn">Message</button>
                                <button class="contact-btn"><img src="https://cdn-icons-png.flaticon.com/128/2311/2311523.png" alt=""></button>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div id="preview_about">
                        <div class="preview_actions">
                            <div>Post</div>
                            <div>Photos</div>
                            <div>Vouch</div>
                        </div>
                        <div class="user_post_container" id="user_post_container">
                        </div>
                    </div>  
                </div>
            </div>`
        preview.innerHTML = html

        const useradasdas = document.getElementById('user_post_container')

        let userTextpost = userinfo.socialPosts.textPosts
        let etxtList = ''
        for (let i = 0; i < userTextpost.length; i++) {
            let {content, date} = userTextpost[i]

            let posthtml = `
                <div class="user_post_card">
                    <div class="user_info">
                        <img src="${userinfo.profilePicture.displaypicture}" alt="">
                        <div class="name">${userinfo.name.firstname} ${userinfo.name.lastname} <br> <div class=postspan>${date}</div></div>
                    </div>
                    <div class="user_post"><p id="postText" onclick="asd()">${content}</p></div>
                    <div class="user_interacions">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt=""></div>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/9256/9256383.png" alt=""></div>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png" alt=""></div>
                    </div>
                </div>
            `
            etxtList += posthtml
        }
        useradasdas.innerHTML = etxtList

        //photos 
        // const asddf = document.getElementById('user_post_container')

        // let userPhotopost = userinfo.socialPosts.picturePosts
        // let etxtasdList = ''
        // for (let i = 0; i < userPhotopost.length; i++) {
        //     let {image, caption, date} = userPhotopost[i]

        //     let posthtml = `
        //         <div class="user_post_card">
        //             <div class="user_info">
        //                 <img src="${userinfo.profilePicture.displaypicture}" alt="">
        //                 <div class="name">${userinfo.name.firstname} ${userinfo.name.lastname} <br> <div class=postspan>${date}</div></div>
        //             </div>
        //             <div class="user_post"><p id="postText" onclick="asd()">${caption}</p><img src="${image}" alt=""></div>
        //             <div class="user_interacions">
        //                 <div><img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt=""></div>
        //                 <div><img src="https://cdn-icons-png.flaticon.com/128/9256/9256383.png" alt=""></div>
        //                 <div><img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png" alt=""></div>
        //             </div>
        //         </div>
        //     `
        //     etxtasdList += posthtml
        // }
        // useradasdas.innerHTML = etxtasdList
    });
  });
});

//Open Friend

document.getElementById('open_fr_panel').addEventListener('click', function() {
    const c1 = document.getElementById('connections')
    const c2 = document.getElementById('REconnections')
    const c3 = document.getElementById('VFconnections')

    c1.style.display = 'grid'
    c2.style.display = 'none'
    c3.style.display = 'none'

    const conta = document.getElementById('connections_container')
    let addhtml = ''
    let num = 0
    for (let i = 0; i < users.length; i++) {
        const {firstname, lastname, title} = users[i].name
        const {displaypicture} = users[i].profilePicture
        const {id} = users[i]
        let html = `
            <div id="connections_card" class="connections_card">
                    <div id="connections_img" style="background-image: url(${displaypicture});"></div>
                    <input type="text" class="userID" value="${id}" style="display: none;">
                    <section>
                        <p id="connections_name">${firstname} ${lastname}</p>
                        <p id="connections_X"><span>${title}</span> > <span>Cooking</span></p>
                    </section>
                    <div class="connections_btn"></div>
                </div>
            `
        addhtml += html
        num++
    }
    conta.innerHTML = addhtml
    document.getElementById('countNum').innerText = num

})

//Open Friend Req

document.getElementById('open_rf_panel').addEventListener('click', function() {
    const c1 = document.getElementById('connections')
    const c2 = document.getElementById('REconnections')
    const c3 = document.getElementById('VFconnections')

    c1.style.display = 'none'
    c2.style.display = 'grid'
    c3.style.display = 'none'

    const conta = document.getElementById('REconnections_container')
    let addhtml = ''
    let num = 0
    for (let i = 0; i < Nusers.length; i++) {
        const {firstname, lastname, title} = Nusers[i].name
        const {displaypicture} = Nusers[i].profilePicture
        const {id} = Nusers[i]

        let html = `
            <div id="connections_card" class="connections_card">
                    <div id="connections_img" style="background-image: url(${displaypicture});"></div>
                    <input type="text" class="userID" value="${id}" style="display: none;">
                    <section>
                        <p id="connections_name">${firstname} ${lastname}</p>
                        <p id="connections_X"><span>${title}</span> > <span>Cooking</span></p>
                    </section>
                    <div class="connections_btn"></div>
                </div>
            `
        addhtml += html
        num++
    }
    conta.innerHTML = addhtml
    document.getElementById('countNums').innerText = num
})

//Profile View

document.getElementById('open_vr_panel').addEventListener('click', function() {
    const c1 = document.getElementById('connections')
    const c2 = document.getElementById('REconnections')
    const c3 = document.getElementById('VFconnections')

    c1.style.display = 'none'
    c2.style.display = 'none'
    c3.style.display = 'grid'

    const conta = document.getElementById('VIconnections_container')
    let addhtml = ''
    let num = 0
    for (let i = 0; i < Vusers.length; i++) {
        const {firstname, lastname, title} = Vusers[i].name
        const {displaypicture} = Vusers[i].profilePicture
        const {id} = Vusers[i]

        let html = `
            <div id="connections_card" class="connections_card">
                    <div id="connections_img" style="background-image: url(${displaypicture});"></div>
                    <input type="text" class="userID" value="${id}" style="display: none;">
                    <section>
                        <p id="connections_name">${firstname} ${lastname}</p>
                        <p id="connections_X"><span>${title}</span> > <span>Cooking</span></p>
                    </section>
                    <div class="connections_btn"></div>
                </div>
            `
        addhtml += html
        num++
    }
    conta.innerHTML = addhtml
    document.getElementById('countNumss').innerText = num
})


function asd() {
    const textContainer = document.getElementById('postText')
    textContainer.classList.toggle('expanded');
}
