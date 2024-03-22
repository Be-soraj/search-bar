window.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('search1').click();
  }
});
document.getElementById('search1').addEventListener('click', function() {
  window.location = `https://www.google.com/search?q=${document.getElementById('inpt').value}`;
});