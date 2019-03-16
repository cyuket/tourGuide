let userId
auth.onAuthStateChanged(user => {


   
    if (user) {
        userId = user.uid
        //console.log(userId)
        user.getIdTokenResult().then(id => {
            let currentUser = firebase.auth().currentUser.email;
            let currentUserSession = sessionStorage.setItem("user", currentUser);
            let currentUserId = sessionStorage.setItem("userId", userId);
            //user.admin = id.claims.admin;

            setupUi(user);

        })
        //get data bo

    } else {
        //setupGuides([]);
        let currentUserId = sessionStorage.setItem("userId", '');
        setupUi();
    }
});

const searchButton = document.querySelector("#tourBookingForm")

let signupForm = document.querySelector('#register')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['reg_email'].value
    const password = signupForm['reg_password'].value
    const username = signupForm['reg_username'].value
    const firstName = signupForm['reg_firstName'].value
    const lastName = signupForm['reg_lastName'].value

    // if (password == cpassword) {
    //signup a user
    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                email,
                username,
                lastName,
                firstName,
                userId: cred.user.uid
            });

        }).then(() => {

            //body.removeClass("show_form_popup_register");
            signupForm.reset();
        })
    // }


})

//login
const loginForm = document.querySelector('#loginform');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['user_login'].value
    const password = loginForm['user_pass'].value
    //console.log(email, password)
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)


        loginForm.reset();
    })
})
//logout

const logout = document.querySelector('#out');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('You are Logged Out');
    })
})
