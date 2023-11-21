    // Pole pro ukládání informací o žácích
    var students = [];

    // Funkce pro přidání žáka
    function addStudent() {
      // Získání hodnoty z inputu
      var studentName = document.getElementById("studentName").value;

      // Kontrola, zda žák již existuje
      if (students.some(student => student.name === studentName)) {
        alert("Žák již existuje!");
        return;
      }

      // Přidání žáka do pole
      students.push({ name: studentName });

      // Aktualizace seznamu žáků
      updateStudentList();

      // Vyčištění pole pro další vstup
      document.getElementById("studentName").value = "";
    }

    // Funkce pro aktualizaci seznamu žáků
    function updateStudentList() {
      // Získání elementu seznamu
      var studentListElement = document.getElementById("studentList");

      // Vyprázdnění seznamu
      studentListElement.innerHTML = "";

      // Přidání žáků do seznamu
      students.forEach(function(student, index) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(student.name));

        // Přidání tlačítek pro upravení a smazání žáka
        var editButton = document.createElement("button");
        editButton.appendChild(document.createTextNode("Upravit"));
        editButton.onclick = function() { editStudent(index) };
        li.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Smazat"));
        deleteButton.onclick = function() { deleteStudent(index) };
        li.appendChild(deleteButton);

        studentListElement.appendChild(li);
      });
    }

    // Funkce pro upravení žáka
    function editStudent(index) {
      var newName = prompt("Zadejte nové jméno pro žáka:");
      if (newName !== null) {
        students[index].name = newName;
        updateStudentList();
      }
    }

    // Funkce pro smazání žáka
    function deleteStudent(index) {
      students.splice(index, 1);
      updateStudentList();
    }