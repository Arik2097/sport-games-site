document.addEventListener("DOMContentLoaded", () => {
  const fields = [
    {
      city: "תל אביב",
      name: "מגרש דיזנגוף",
      size: "40x20 מטר",
      hours: "08:00-23:00",
    },
    {
      city: "תל אביב",
      name: "פארק הירקון",
      size: "50x25 מטר",
      hours: "07:00-22:00",
    },
    {
      city: "פתח תקווה",
      name: "איצדיון שלמה",
      size: "45x22 מטר",
      hours: "10:00-22:00",
    },
    {
      city: "פתח תקווה",
      name: "גן אהרון",
      size: "38x18 מטר",
      hours: "08:00-21:00",
    },
    {
      city: "חיפה",
      name: "קריית אליעזר",
      size: "42x22 מטר",
      hours: "09:00-23:00",
    },
    {
      city: "חיפה",
      name: "נווה שאנן",
      size: "35x17 מטר",
      hours: "07:00-20:00",
    },
    {
      city: "ירושלים",
      name: "גן סאקר",
      size: "50x30 מטר",
      hours: "08:00-23:00",
    },
    {
      city: "ירושלים",
      name: "קריית יובל",
      size: "40x20 מטר",
      hours: "09:00-21:00",
    },
    {
      city: "באר שבע",
      name: "פארק נחל",
      size: "48x24 מטר",
      hours: "06:00-22:00",
    },
    {
      city: "באר שבע",
      name: "רמות ספורט",
      size: "38x19 מטר",
      hours: "07:00-20:00",
    },
    {
      city: "רמת גן",
      name: "מרום נווה",
      size: "45x22 מטר",
      hours: "10:00-23:00",
    },
    {
      city: "רמת גן",
      name: "הפארק הלאומי",
      size: "50x25 מטר",
      hours: "08:00-22:00",
    },
    {
      city: "הרצליה",
      name: "מרכז הספורט",
      size: "42x20 מטר",
      hours: "07:00-21:00",
    },
    {
      city: "הרצליה",
      name: "רמת השרון",
      size: "40x18 מטר",
      hours: "06:00-20:00",
    },
    {
      city: "נתניה",
      name: "הקאנטרי קלאב",
      size: "50x30 מטר",
      hours: "08:00-23:00",
    },
    {
      city: "נתניה",
      name: "קריית השרון",
      size: "38x19 מטר",
      hours: "07:00-20:00",
    },
    {
      city: "אשדוד",
      name: "פארק אשדוד",
      size: "40x20 מטר",
      hours: "09:00-21:00",
    },
    {
      city: "אשקלון",
      name: "היכל הספורט",
      size: "45x22 מטר",
      hours: "10:00-22:00",
    },
    {
      city: "כפר סבא",
      name: "איצטדיון העירוני",
      size: "50x25 מטר",
      hours: "08:00-22:00",
    },
    {
      city: "מודיעין",
      name: "מרכז מודיעין",
      size: "42x20 מטר",
      hours: "07:00-21:00",
    },
  ];

  window.searchFields = function () {
    const locationInput = document.getElementById("location").value.trim();
    if (!locationInput) {
      alert("אנא הזן עיר לחיפוש!");
      return;
    }

    const resultsList = document.getElementById("fields-list");
    resultsList.innerHTML = "";

    const filteredFields = fields.filter((field) =>
      field.city.includes(locationInput)
    );

    if (filteredFields.length === 0) {
      resultsList.innerHTML = "<li>לא נמצאו מגרשים מתאימים</li>";
    } else {
      filteredFields.forEach((field) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${field.name}</strong> - ${field.city}<br>
                              <b>גודל:</b> ${field.size} | <b>שעות פעילות:</b> ${field.hours}`;
        resultsList.appendChild(listItem);
      });
    }

    document.getElementById("search").style.display = "none";
    document.getElementById("fields-section").style.display = "block";
  };

  window.goBack = function () {
    document.getElementById("search").style.display = "block";
    document.getElementById("fields-section").style.display = "none";
  };
});
