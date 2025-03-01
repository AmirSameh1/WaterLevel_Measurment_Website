import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "x",

    authDomain: "xxxx",
    
    projectId: "xxxx",
    
    storageBucket: "xxxxx",
    
    messagingSenderId: "xxxxx",
    
    appId: "xxxxx"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Reference to your data
const dataRef = ref(db, 'your-data-path');


// Fetch all past data and update dashboard
onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    console.log('All data:', data);
    
    // Clear existing data
    document.getElementById('dashboard').innerHTML = '';
    
    // Loop through the data and create elements for each entry
    for (const key in data) {
      const entry = data[key];
      const dataContainer = document.createElement('div');
      dataContainer.className = 'data-row';  // Set the class to "data-row"
      
      dataContainer.innerHTML = `
      <span>${data.date}</span>
      <span>${data.time}</span>
      <span>${data.depth1}</span>
      <span>${data.temp1}</span>
      <span>${data.depth2}</span>
      <span>${data.temp2}</span>
        <hr>
      `;
      document.getElementById('dashboard').appendChild(dataContainer);
    }
  });


// Listen for new data and update dashboard
onChildAdded(dataRef, (snapshot) => {
  const data = snapshot.val();
  console.log('New data:', data);
  // Create new elements for the dashboard
  const dataContainer = document.createElement('div');
  dataContainer.className="data-row";

  dataContainer.innerHTML = `
  <span>${data.date}</span>
  <span>${data.time}</span>
  <span>${data.depth1}</span>
  <span>${data.temp1}</span>
  <span>${data.depth2}</span>
  <span>${data.temp2}</span>
    <hr>
  `;
  document.getElementById('dashboard').appendChild(dataContainer);
});