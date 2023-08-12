document.getElementById('lang').addEventListener('change', function() {
    const selectedLanguage = this.value;
  const newURL = `/${selectedLanguage}/index.html`;
  window.location.href = newURL;
});
