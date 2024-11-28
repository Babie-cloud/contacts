const firebaseConfig = {
    apiKey: "AIzaSyCprVQMnEdITWmKM_y4a-vCEnJCnx0WDAs",
    authDomain: "webservices-6f739.firebaseapp.com",
    projectId: "webservices-6f739",
    storageBucket: "webservices-6f739.firebasestorage.app",
    messagingSenderId: "216181289047",
    appId: "1:216181289047:web:775496e8aec46124fab312",
    measurementId: "G-0CN641RZZ7"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  document.getElementById("contacts").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("full-name");
    var email = getElementVal("email");
    var date = getElementVal("date");
  
    console.log(name, email, date);
    saveMessages(name, email, date);
  
    // // enable the alert
    // document.querySelector(".alert").style.display = "block";
  
    // // remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    // reset the form
    document.getElementById("contacts").reset();
  
  }
  
  const saveMessages = (name, email, date) => {
    var newContacts = contactsDB.push();
  
    newContacts.set({
      fullname: name,
      email: email,
      date : date,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };