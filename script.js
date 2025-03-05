// Chart.js for Profit/Loss Graph
const ctx = document.getElementById('profitChart').getContext('2d');
const profitChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Profit/Loss',
      data: [100, 150, 200, 250, 300, 350],
      borderColor: '#3498db',
      tension: 0.4,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Toggle between Login and Sign-Up sections
document.getElementById('showSignup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
  });
  
  document.getElementById('showLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  });

  // Sign-Up Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const contact = document.getElementById('signupContact').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      document.getElementById('passwordError').style.display = 'block';
      return; // Stop form submission
    } else {
      document.getElementById('passwordError').style.display = 'none';
    }
  
    // Check if terms are agreed
    if (!agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return; // Stop form submission
    }
  
    // If everything is valid, proceed with sign-up
    const userData = {
      name,
      email,
      contact,
      password,
    };
  
    // Send data to the server (you'll need a back-end for this)
    console.log('User Data:', userData);
    alert('Sign-up successful!');
    // Redirect to login page
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  });