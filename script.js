document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за подписку!');
    this.reset();
});
