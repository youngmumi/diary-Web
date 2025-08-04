async function loadDiary() {
    try {
        const response = await fetch('diary/diary.json');
        const data = await response.json();

        const container = document.getElementById('diaryDisplay');
        container.innerHTML = `
      <h2>${data.title}</h2>
      <p><em>${data.date}</em></p>
      <p>${data.content}</p>
    `;
    } catch (err) {
        document.getElementById('diaryDisplay').textContent = '일기를 불러오지 못했습니다.';
        console.error(err);
    }
}

loadDiary();
