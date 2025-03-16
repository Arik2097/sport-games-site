document.addEventListener("DOMContentLoaded", () => {
  const games = [
    { location: "תל אביב", age: 25, time: "18:00", sport: "כדורגל" },
    { location: "חיפה", age: 22, time: "20:00", sport: "כדורסל" },
    { location: "ירושלים", age: 30, time: "19:30", sport: "כדורגל" },
    { location: "באר שבע", age: 28, time: "21:00", sport: "כדורסל" },
  ];

  let selectedSport = null; // משתנה שישמור את סוג הספורט

  document.getElementById("football").addEventListener("click", function () {
    selectSport("כדורגל");
  });

  document.getElementById("basketball").addEventListener("click", function () {
    selectSport("כדורסל");
  });

  function selectSport(sport) {
    selectedSport = sport; // שמירת סוג הספורט שנבחר
    document.getElementById("sport-selection").style.display = "none"; // הסתרת בחירת הספורט
    document.getElementById("search").style.display = "block"; // הצגת השאלון
  }

  window.searchGames = function () {
    if (!selectedSport) {
      alert("אנא בחר סוג ספורט לפני החיפוש!");
      return;
    }

    const locationInput = document.getElementById("location").value.trim();
    const ageInput = parseInt(document.getElementById("age").value);
    const resultsList = document.getElementById("games-list");
    resultsList.innerHTML = "";

    const filteredGames = games.filter(
      (game) =>
        game.sport === selectedSport &&
        game.location.includes(locationInput) &&
        (!isNaN(ageInput) ? Math.abs(game.age - ageInput) <= 5 : true)
    );

    if (filteredGames.length === 0) {
      resultsList.innerHTML = "<li>לא נמצאו משחקים מתאימים</li>";
      return;
    }

    filteredGames.forEach((game) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${game.sport} - ${game.location}, גיל ממוצע: ${game.age}, שעה: ${game.time}`;
      resultsList.appendChild(listItem);
    });
  };
});
