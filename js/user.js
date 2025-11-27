document.addEventListener('DOMContentLoaded', () => {
    const conta = document.getElementById('card_container');
    let addhtml = ''

    for (let i = 0; i < users.length; i++) {
        const {firstname, lastname, title, location} = users[i].name
        const {displaypicture, backgroundpic} = users[i].profilePicture
        const {id} = users[i]
        let randomNumber = getRandomIntInclusive(1, 10);
        let html = `
            <div class="profile_card" id="profile_card" value="${id}">
                <img src="${displaypicture}" alt="">
                <input type="text" class="userID" value="${id}" style="display: none;">
                <section>
                    <h1 id="profile_name" class="profile_name">${firstname} ${lastname}</h1>
                    <h2 id="profile_title">${title}</h2>
                    <p id="profile_place" class="profile_place">${location}</p>
                    <p id="post_time">${randomNumber} days ago</p>
                    <p id="profile_viewed">Viewed</p>
                </section>
                
                <button><img src="https://cdn-icons-png.flaticon.com/128/5368/5368396.png" alt=""></button>
            </div>
            `;
        addhtml += html
    }
    conta.innerHTML = addhtml
});
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.profile_card'); // Select all div elements with class 'item'

  items.forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'highlighted' class from all item
        items.forEach(i => i.classList.remove('highlighted'));
        
        
        // Add 'highlighted' class to the clicked item
        this.classList.add('highlighted');
        
        const userID = this.querySelector('.userID').value
        const userINT = parseInt(userID)

        const userinfo = users.find(users => users.id === userINT);
        const preview = document.getElementById('preview_container')

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
                       <div id="preview_personal_information">
                            <h1>Basic Information</h1>
                            <p><strong>Age: </strong>${userinfo.name.age} years old</p>
                            <p><strong>Location: </strong>${userinfo.name.location}</p>
                            <p><strong>Email: </strong>${userinfo.contacts.email}</p>
                        </div>
                        <div id="contact_section">
                            <h1>Contact</h1>
                            <div class="contact-row">
                                <button class="contact-btn" onclick="window.location.href='${userinfo.contacts.email}'">Email</button>
                                <button class="contact-btn" onclick="window.open('${userinfo.contacts.social.instagram}')">Instagram</button>
                            </div>
                        </div>
                        <div style="margin-top:14px">
                                <h1>Availability</h1>
                                <div class="meta">Open for commissions and collaborations — flexible schedule</div>
                        </div> 
                    </div>
                    <div>
                       <div id="preview_about">
                            <h1>About me</h1>
                            <p>${userinfo.bio.shortBio}</p>
                        </div>
                        <div id="skills_section">
                            <h1>Skills</h1>
                        </div> 
                    </div>  
                </div>
            </div>`
        preview.innerHTML = html
        const skillsContainer = document.getElementById('skills_section')
        let userSkills = userinfo.skills.offered

        let ul = document.createElement("ul");

        // Iterate through the array and create list items
        for (let i = 0; i < userSkills.length; i++) {
            let li = document.createElement("li"); // Create a list item element
            li.textContent = userSkills[i]; // Set the text content of the list item
            ul.appendChild(li); // Append the list item to the unordered list
        }

        // Append the complete unordered list to the container.
        skillsContainer.appendChild(ul)
        
    });
  });
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let open = false
const sad = document.getElementById('user_btn')

sad.addEventListener('click', function(e) {

    const cota = document.getElementById('dropdown')
    const p = document.querySelectorAll("dropdownmenu")
    const over = document.getElementById('overlay')
    if (open == false) {
        cota.classList.add('dropdownOpen')
        over.style.display = "block"
        open =  true

        over.addEventListener('click', function() {
            over.style.display = "none"
            cota.classList.remove('dropdownOpen')
            open = false
        })
    }
    else {
        cota.classList.remove('dropdownOpen')
        open = false
    }
});
