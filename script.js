const loadingMsgs = [
  "HANG ON A SEC",
  "I'M WORKING ON IT",
  "DUDE JUST WAIT",
  "I'm cuming",
  "Hold your horse is",
  "WAIT FOR IT"
]
function loadHTML(id, file) {
    fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(error => console.error('Error loading file:', error));
} 

const randomMsg = loadingMsgs[Math.floor(Math.random() * loadingMsgs.length)];
console.log(randomMsg);

const loaderContent = `<h2>${randomMsg}</h2><br><span class="throbber"></span>`;

document.getElementById("loader").innerHTML = loaderContent;

window.addEventListener('load', () => {
  // Hide the loader
  document.getElementById('loader').style.display = 'none';
  // Show the content
  document.getElementById('content').style.display = 'block';
});

   