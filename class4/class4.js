// var books = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
//     { title: "1984", author: "George Orwell", genre: "Dystopian" },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
//     { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" }
// ];

// // Function to display books on the webpage
// function displayBooks() {
//     var bookList = document.getElementById("bookList");
//     bookList.innerHTML = ""; // Clear previous content

//     // Loop through the array and create HTML elements to display each book
//     books.forEach(function(book) {
//         var bookDiv = document.createElement("div");
//         bookDiv.innerHTML = "<h2>" + book.title + "</h2>" +
//                             "<p>Author: " + book.author + "</p>" +
//                             "<p>Genre: " + book.genre + "</p>";
//         bookList.appendChild(bookDiv);
//     });
// }

// // Call the function to display books when the page loads
// displayBooks();





// Array to store tasks
var tasks = [];

// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var taskName = input.value.trim();

    if (taskName !== "") {
        tasks.push({ name: taskName, completed: false });
        input.value = ""; // Clear the input field
        displayTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to mark a task as completed
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear previous tasks

    tasks.forEach(function(task, index) {
        var li = document.createElement("li");
        li.textContent = task.name;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeTask(index);
        };

        var toggleButton = document.createElement("button");
        toggleButton.textContent = task.completed ? "Undo" : "Complete";
        toggleButton.onclick = function() {
            toggleTask(index);
        };

        li.appendChild(removeButton);
        li.appendChild(toggleButton);
        taskList.appendChild(li);
    });
}

// Initial display of tasks
displayTasks();
