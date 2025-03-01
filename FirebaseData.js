import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyClMKnJj5AMrkzfJscHRBwRyXXsRQUzUaU",
  authDomain: "water-level-sensor-data-78d28.firebaseapp.com",
  databaseURL: "https://water-level-sensor-data-78d28-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "water-level-sensor-data-78d28",
  storageBucket: "water-level-sensor-data-78d28.firebasestorage.app",
  messagingSenderId: "442646995845",
  appId: "1:442646995845:web:9309293caa66d25a29daec",
  measurementId: "G-7QT1V26PK5"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Reference to your data
const dataRef = ref(db, 'sensors/data');


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
      <span>${entry.date}</span>
      <span>${entry.time}</span>
      <span>${entry.depth1}</span>
      <span>${entry.temp1}</span>
      <span>${entry.depth2}</span>
      <span>${entry.temp2}</span>
      `;
      document.getElementById('dashboard').prepend(dataContainer);


      const dataContainer1 = document.createElement('div');
      dataContainer1.className = 'bar';  // Set the class to "bar"
      
      dataContainer1.innerHTML = `
      <div class="bar" style="height: ${entry.depth1}px;"></div>
      `;
      document.getElementById('depth1-graph').prepend(dataContainer1);

      const dataContainer2 = document.createElement('div');
      dataContainer2.className = 'bar';  // Set the class to "bar"
      
      dataContainer2.innerHTML = `
      <div class="bar" style="height: ${entry.depth2}px;"></div>
      `;
      document.getElementById('depth2-graph').prepend(dataContainer2);


      const dataContainer3 = document.createElement('div');
      dataContainer3.className = 'bar';  // Set the class to "bar"
      
      dataContainer3.innerHTML = `
      <div class="bar" style="height: ${(entry.temp1)*2} px;"></div>
      `;
      document.getElementById('temp1-graph').prepend(dataContainer3);


      const dataContainer4 = document.createElement('div');
      dataContainer4.className = 'bar';  // Set the class to "bar"
      
      dataContainer4.innerHTML = `
      <div class="bar" style="height: ${(entry.temp2)*2}px;"></div>
      `;
      document.getElementById('temp2-graph').prepend(dataContainer4);

    }
  });


// Listen for new data and update dashboard
onChildAdded(dataRef, (snapshot) => {
  const data = snapshot.val();
  console.log('New data:', data);
  // Create new elements for the dashboard
  const dataContainer = document.createElement('div');
  dataContainer.className="data-row";
   const entry = data[latestkey]

  dataContainer.innerHTML = `
  <span>${entry.date}</span>
  <span>${entry.time}</span>
  <span>${entry.depth1}</span>
  <span>${entry.temp1}</span>
  <span>${entry.depth2}</span>
  <span>${entry.temp2}</span>
  `;
  document.getElementById('dashboard').prepend(dataContainer);



  const dataContainer1 = document.createElement('div');
      dataContainer1.className = 'bar';  // Set the class to "bar"
      
      dataContainer1.innerHTML = `
      <div class="bar" style="height: ${entry.depth1}px;"></div>
      `;
      document.getElementById('depth1-graph').prepend(dataContainer1);

      const dataContainer2 = document.createElement('div');
      dataContainer2.className = 'bar';  // Set the class to "bar"
      
      dataContainer2.innerHTML = `
      <div class="bar" style="height: ${entry.depth2}px;"></div>
      `;
      document.getElementById('depth2-graph').prepend(dataContainer2);


      const dataContainer3 = document.createElement('div');
      dataContainer3.className = 'bar';  // Set the class to "bar"
      
      dataContainer3.innerHTML = `
      <div class="bar" style="height: ${(entry.temp1)*2} px;"></div>
      `;
      document.getElementById('temp1-graph').prepend(dataContainer3);


      const dataContainer4 = document.createElement('div');
      dataContainer4.className = 'bar';  // Set the class to "bar"
      
      dataContainer4.innerHTML = `
      <div class="bar" style="height: ${(entry.temp2)*2}px;"></div>
      `;
      document.getElementById('temp2-graph').prepend(dataContainer4);



});
