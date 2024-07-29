document.addEventListener('DOMContentLoaded', function () {
  const revealButton = document.getElementById('reveal-button');
  const surprise = document.getElementById('surprise');

  revealButton.addEventListener('click', function () {
      surprise.classList.toggle('hidden');
  });

  function countdown() {
      const now = new Date().getTime();
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      nextMonth.setDate(1);
      nextMonth.setHours(0, 0, 0, 0);

      const distance = nextMonth - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
          clearInterval(countdownInterval);
          document.getElementById('countdown-timer').innerHTML = "¡Feliz Cumple Mes!";
      }
  }

  const countdownInterval = setInterval(countdown, 1000);
});