$(document).ready(function () {
   document.querySelector('.share').addEventListener("click", function () {
    document.querySelector('.shareActive').style.display = document.querySelector('.shareActive').style.display  === 'none' ? 'flex' : 'none';
  });
   document.querySelector('.back').addEventListener("click", function () {
    document.querySelector('.shareActive').style.display = 'none';
    document.querySelector('.author').style.display = 'flex';
  });


  });