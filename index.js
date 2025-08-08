fetch("https://script.google.com/macros/s/AKfycbxdTuulBuJ2_SQY184JhQBGjybaoLLKf6GuAy0fAos1Qtvyiw7zLUFiE59KXUEjvek/exec")
  .then(res => res.json())
  .then(data => {
    console.log("Datos recibidos:", data);
  });
