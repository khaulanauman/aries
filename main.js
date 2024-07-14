function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    applyTheme();
  }

  function applyTheme() {
    const selectedColor = document.getElementById('favColor').value;

    // Remove any existing theme classes
    document.body.classList.remove('blue', 'purple', 'pink', 'yellow');

    // Add the selected theme class to the body
    document.body.classList.add(selectedColor);

    // Save the selected theme in localStorage
    localStorage.setItem('theme', selectedColor);
  }

  // Apply the saved theme on page load
  window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      document.getElementById('favColor').value = savedTheme;
    }
  }