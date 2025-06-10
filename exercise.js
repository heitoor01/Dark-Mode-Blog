function darkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('themeChanger').textContent = '☀️ Light Mode';
    } else {
        document.getElementById('themeChanger').textContent = '🌙 Dark Mode';
    }
}