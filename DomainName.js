function changeLanguage(language) {
    
    const newPath = `/${language}`;

    history.pushState({}, '', newPath);
  
    console.log('New path:', window.location.pathname);
  }
  