
function setupPage() {
  document.getElementById("memoir-cnf").style.display = "none";
  document.getElementById("poetry").style.display = "none";
  document.getElementById("interviews-journalism").style.display = "none";
  document.getElementById("bio").style.display = "none";
  document.getElementById("pfp").style.display = "block";
}

function loadMemoirCNF() {
  setupPage();
  document.getElementById("pfp").style.display = "none";
  document.getElementById("memoir-cnf").style.display = "block";
}

function loadPoetry() {
  setupPage();
  document.getElementById("pfp").style.display = "none";
  document.getElementById("poetry").style.display = "block";
}

function loadInterviewsJournalism() {
  setupPage();
  document.getElementById("pfp").style.display = "none";
  document.getElementById("interviews-journalism").style.display = "block";
}

function loadBio() {
  setupPage();
  document.getElementById("pfp").style.display = "none";
  document.getElementById("bio").style.display = "block";
}