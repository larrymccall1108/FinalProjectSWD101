function loadGetHub () {
  let gitHubRequest = new XMLHttpRequest();
  gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const gitObject = JSON.parse(this.responseText);
      for (var i = 0; i < gitObject.length; i++) {
           
      document.getElementById("gitBio").innerHTML += gitObject[i].name;
      document.getElementById("gitBio").innerHTML += "<br>";
      
    } 
  }
};
  
  gitHubRequest.open("GET", "https://api.github.com/users/larrymccall1108/repos", true);
  gitHubRequest.send();
  }


function openSlideMenu() {
    document.getElementById('side-menu').style.width
    = '250px';
    document.getElementById('main').style.marginLeft
    = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width
    = '0px';
    document.getElementById('main').style.marginLeft
    = '0px';
}
     