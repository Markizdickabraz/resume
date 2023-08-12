document.getElementById('lang').addEventListener('change', function() {
    const selectedLanguage = this.value;

    if (selectedLanguage === 'en') { 
        const newURL = `/index.html`
        window.location.href = newURL;
    }
    if (selectedLanguage === 'ua') { 
         const newURL = `/resume/index-uk.html`;   
         window.location.href = newURL;
        }
});
