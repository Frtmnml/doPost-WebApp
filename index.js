fetch("https://script.google.com/macros/s/AKfycbx4thpONC6C4osKA9rSzEXWnvxBxWGsMVt2gy01hha62dMuY6ZLMuMWwBOzSjNHRuRc/exec")
  .then(res => res.json())
  .then(data => {
    console.log("Datos recibidos:", data);
  });
