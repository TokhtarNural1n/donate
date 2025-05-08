document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = document.getElementById('amount').value.trim();
  
    if (name && email && amount && Number(amount) >= 100) {
      document.getElementById('thanksMessage').classList.remove('hidden');
      this.reset();
    } else {
      alert('Барлық жолақтарды дұрыс толтырыңыз (сома кемінде 100 ₸ болуы тиіс).');
    }
  });
  