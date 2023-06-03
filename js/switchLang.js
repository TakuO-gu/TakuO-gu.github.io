// Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
  
    // Define the language reload anchors
    var language = {
      eng: {
        start: "Let's get start!"
        
      },
      jpn: {
        start: "お仕事はこちらから!"
      },
      krn: {
        start: "그래픽 디자이너!"
      }
    };
  
    // Check if a hash value exists in the URL
    if (window.location.hash) {
  
      // Set the content of the webpage 
      // depending on the hash value
      if (window.location.hash == "#jpn") {
        siteContent.textContent =
          language.jpn.start;
      }
      else if (window.location.hash == "#krn") {
        siteContent.textContent =
          language.krn.start;
      }
    }