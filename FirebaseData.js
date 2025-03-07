import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC-D17GV3prkmQDssF9ZbXiKGQq2-XLsiE",

  authDomain: "project-0-51c9c.firebaseapp.com",

  databaseURL: "https://project-0-51c9c-default-rtdb.firebaseio.com",

  projectId: "project-0-51c9c",

  storageBucket: "project-0-51c9c.firebasestorage.app",

  messagingSenderId: "486817466192",

  appId: "1:486817466192:web:108b7eadfc3b6fe3604e55"


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
      if (document.getElementById('depth1-graph').children.length > 15) {
                container.removeChild(container.lastChild);}
      document.getElementById('depth1-graph').prepend(dataContainer1);

      const dataContainer2 = document.createElement('div');
      dataContainer2.className = 'bar';  // Set the class to "bar"
      
      dataContainer2.innerHTML = `
      <div class="bar" style="height: ${entry.depth2}px;"></div>
      `;
         if (document.getElementById('depth2-graph').children.length > 15) {
                container.removeChild(container.lastChild);
              }
      document.getElementById('depth2-graph').prepend(dataContainer2);


      const dataContainer3 = document.createElement('div');
      dataContainer3.className = 'bar';  // Set the class to "bar"
      
      dataContainer3.innerHTML = `
      <div class="bar" style="height: ${(entry.temp1)*2.5} px;"></div>
      `;
            if (document.getElementById('temp1-graph').children.length > 15) {
                container.removeChild(container.lastChild);}
      document.getElementById('temp1-graph').prepend(dataContainer3);


      const dataContainer4 = document.createElement('div');
      dataContainer4.className = 'bar';  // Set the class to "bar"
      
      dataContainer4.innerHTML = `
      <div class="bar" style="height: ${(entry.temp2)*2.5}px;"></div>
      `;
               if (document.getElementById('temp2-graph').children.length > 15) {
                container.removeChild(container.lastChild);}
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
      if (document.getElementById('depth1-graph').children.length > 15) {
        container.removeChild(container.lastChild);}
      document.getElementById('depth1-graph').prepend(dataContainer1);

      const dataContainer2 = document.createElement('div');
      dataContainer2.className = 'bar';  // Set the class to "bar"
      
      dataContainer2.innerHTML = `
      <div class="bar" style="height: ${entry.depth2}px;"></div>
      `;
      if (document.getElementById('depth2-graph').children.length > 15) {
        container.removeChild(container.lastChild);}
      document.getElementById('depth2-graph').prepend(dataContainer2);


      const dataContainer3 = document.createElement('div');
      dataContainer3.className = 'bar';  // Set the class to "bar"
      
      dataContainer3.innerHTML = `
      <div class="bar" style="height: ${(entry.temp1)*2} px;"></div>
      `;
      if (document.getElementById('temp1-graph').children.length > 15) {
        container.removeChild(container.lastChild);}
      document.getElementById('temp1-graph').prepend(dataContainer3);


      const dataContainer4 = document.createElement('div');
      dataContainer4.className = 'bar';  // Set the class to "bar"
      
      dataContainer4.innerHTML = `
      <div class="bar" style="height: ${(entry.temp2)*2}px;"></div>
      `;
      if (document.getElementById('temp2-graph').children.length > 15) {
        container.removeChild(container.lastChild);}
      document.getElementById('temp2-graph').prepend(dataContainer4);



});
