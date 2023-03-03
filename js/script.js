const form = document.getElementById('raffle-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('You have been raffled');
});
