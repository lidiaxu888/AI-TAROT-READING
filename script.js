async function bacaTarot() {
  const pertanyaan = document.getElementById('pertanyaan').value;
  const hasilDiv = document.getElementById('hasil');
  
  // Tampilkan pesan loading
  hasilDiv.innerText = "🔮 Sedang membaca tarotmu...";

  // Ganti dengan API key kamu
  const API_KEY = "GANTI_API_KEY_KAMU_DISINI";
  const url = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: `Kamu adalah pembaca tarot yang ramah dan penuh makna. Jawab pertanyaan ini dengan ramalan tarot yang positif, jelas, dan mudah dimengerti: ${pertanyaan}`
        }]
      })
    });

    const data = await response.json();
    hasilDiv.innerText = data.choices[0].message.content;
  } catch (error) {
    hasilDiv.innerText = "Maaf, ada error saat membaca tarot. Coba lagi ya!";
    console.error(error);
  }
}
