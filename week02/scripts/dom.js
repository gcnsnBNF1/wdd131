const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    // Check if the input is not empty
    if (input.value.trim() !== "") {
        // Create new list item and delete button
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // Set the content
        li.textContent = input.value;
        deleteButton.textContent = "❌";

        // Append the delete button to the list item
        li.appendChild(deleteButton);
        
        // Append the list item to the list
        list.appendChild(li);

        // Clear the input field and refocus
        input.value = "";
        input.focus();

        // Add event listener to the delete button
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });
    } else {
        // If input is empty, focus on the input field
        input.focus();
    }
});