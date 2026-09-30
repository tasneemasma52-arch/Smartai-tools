function generateText() {
  const userInput = document.getElementById("textInput").value;
  const outputDiv = document.getElementById("textOutput");

  if (!userInput.trim()) {
    outputDiv.innerText = "Please enter a prompt first!";
    return;
  }

  outputDiv.innerText = "🤖 AI is thinking...";

  // Using standard Promise syntax
  puter.ai.chat(userInput)
    .then(function(response) {
      outputDiv.innerText = response.toString();
    })
    .catch(function(error) {
      outputDiv.innerText = "Error: " + error.message;
    });
}
