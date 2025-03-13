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
      <div class="bar" style="height: ${entry.depth1*2}px;"></div>
      `;
     
      document.getElementById('depth1-graph').prepend(dataContainer1);
       if (document.getElementById('depth1-graph').children.length > 15) {
        //document.getElementById('depth1-graph').removeChild(container.lastChild);
        }
  
  dataContainer1.onmouseover = function(event) {
  dataContainer1.style.display = "block";
  dataContainer1.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
  dataContainer1.style.left = event.pageX + "px";
  dataContainer1.style.top = event.pageY + "px";
};
      
dataContainer1.onmouseout = function() {
  dataContainer1.style.display = "none";
};

      const dataContainer2 = document.createElement('div');
      dataContainer2.className = 'bar';  // Set the class to "bar"
      
      dataContainer2.innerHTML = `
      <div class="bar" style="height: ${entry.depth2*2}px;"></div>
      `;
        
      document.getElementById('depth2-graph').prepend(dataContainer2);
 if (document.getElementById('depth2-graph').children.length > 15) {
  //document.getElementById('depth2-graph').removeChild(container.lastChild);
              }

              dataContainer2.onmouseover = function(event) {
                dataContainer2.style.display = "block";
                dataContainer2.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
                dataContainer2.style.left = event.pageX + "px";
                dataContainer2.style.top = event.pageY + "px";
              };
                    
              dataContainer2.onmouseout = function() {
                dataContainer2.style.display = "none";
              };

      const dataContainer3 = document.createElement('div');
      dataContainer3.className = 'bar';  // Set the class to "bar"
      
      dataContainer3.innerHTML = `
      <div class="bar" style="height: ${(entry.temp1)*5}px;"></div>
      `;
            
      document.getElementById('temp1-graph').prepend(dataContainer3);
if (document.getElementById('temp1-graph').children.length > 15) {
  //document.getElementById('temp1-graph').removeChild(container.lastChild);
  }

                dataContainer3.onmouseover = function(event) {
                  dataContainer3.style.display = "block";
                  dataContainer3.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
                  dataContainer3.style.left = event.pageX + "px";
                  dataContainer3.style.top = event.pageY + "px";
                };
                      
                dataContainer3.onmouseout = function() {
                  dataContainer3.style.display = "none";
                };
         
         
      const dataContainer4 = document.createElement('div');
      dataContainer4.className = 'bar';  // Set the class to "bar"
      
      dataContainer4.innerHTML = `
      <div class="bar" style="height: ${(entry.temp2)*5}px;"></div>
      `;

      document.getElementById('temp2-graph').prepend(dataContainer4);
                     if (document.getElementById('temp2-graph').children.length > 15) {
                     // document.getElementById('temp2-graph').removeChild(container.lastChild);
                     }

    }
    dataContainer4.onmouseover = function(event) {
      dataContainer4.style.display = "block";
      dataContainer4.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
      dataContainer4.style.left = event.pageX + "px";
      dataContainer4.style.top = event.pageY + "px";
    };
          
    dataContainer4.onmouseout = function() {
      dataContainer4.style.display = "none";
    };


         
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
      <div class="bar" style="height: ${entry.depth1*2}px;"></div>
      `;
      
      document.getElementById('depth1-graph').prepend(dataContainer1);
  if (document.getElementById('depth1-graph').children.length > 15) {
   // document.getElementById('depth1-graph').removeChild(container.lastChild);
   }

        dataContainer1.onmouseover = function(event) {
          dataContainer1.style.display = "block";
          dataContainer1.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
          dataContainer1.style.left = event.pageX + "px";
          dataContainer1.style.top = event.pageY + "px";
        };
              
        dataContainer1.onmouseout = function() {
          dataContainer1.style.display = "none";
        };
 

      const dataContainer2 = document.createElement('div');
      dataContainer2.className = 'bar';  // Set the class to "bar"
      
      dataContainer2.innerHTML = `
      <div class="bar" style="height: ${entry.depth2*2}px;"></div>
      `;
     
      document.getElementById('depth2-graph').prepend(dataContainer2);
   if (document.getElementById('depth2-graph').children.length > 15) {
    //document.getElementById('depth2-graph').removeChild(container.lastChild);
    }

        dataContainer2.onmouseover = function(event) {
          dataContainer2.style.display = "block";
          dataContainer2.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
          dataContainer2.style.left = event.pageX + "px";
          dataContainer2.style.top = event.pageY + "px";
        };
              
        dataContainer2.onmouseout = function() {
          dataContainer2.style.display = "none";
        };
 


      const dataContainer3 = document.createElement('div');
      dataContainer3.className = 'bar';  // Set the class to "bar"
      
      dataContainer3.innerHTML = `
      <div class="bar" style="height: ${(entry.temp1)*5}px;"></div>
      `;
   document.getElementById('temp1-graph').prepend(dataContainer3);
      if (document.getElementById('temp1-graph').children.length > 15) {
      //  document.getElementById('temp1-graph').removeChild(container.lastChild);
      }
     
        dataContainer3.onmouseover = function(event) {
          dataContainer3.style.display = "block";
          dataContainer3.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
          dataContainer3.style.left = event.pageX + "px";
          dataContainer3.style.top = event.pageY + "px";
        };
              
        dataContainer3.onmouseout = function() {
          dataContainer3.style.display = "none";
        };
 

      const dataContainer4 = document.createElement('div');
      dataContainer4.className = 'bar';  // Set the class to "bar"
      
      dataContainer4.innerHTML = `
      <div class="bar" style="height: ${(entry.temp2)*5}px;"></div>
      `;
 
      document.getElementById('temp2-graph').prepend(dataContainer4);

       if (document.getElementById('temp2-graph').children.length > 15) {
       // document.getElementById('temp2-graph').removeChild(container.lastChild);
       }
   
        dataContainer4.onmouseover = function(event) {
          dataContainer4.style.display = "block";
          dataContainer4.innerText = ` date:${entry.date} \n time:${entry.time} \n depth:${entry.depth1*2}`; // You can change this dynamically
          dataContainer4.style.left = event.pageX + "px";
          dataContainer4.style.top = event.pageY + "px";
        };
              
        dataContainer4.onmouseout = function() {
          dataContainer4.style.display = "none";
        };
 

});
