function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "20px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


  let summaryCollection = document.getElementsByTagName('summary');
  let signsCollection = document.getElementsByClassName('faq-open-icon');
  
  for(let i = 0; i < summaryCollection.length; i++) {
    summaryCollection[i].onclick = function() {
      if(signsCollection[i].innerHTML === '+') signsCollection[i].innerHTML = '—';
      else signsCollection[i].innerHTML = '+';
    }
  }


