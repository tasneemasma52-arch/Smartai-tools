async function generateText() {
  const userInput = document.getElementById("textInput").value;
  const outputDiv = document.getElementById("textOutput");

  if (!userInput.trim()) {
    outputDiv.innerText = "Please enter a prompt first!";
    return;
  }

  // Show status while AI is working
  outputDiv.innerText = "🤖 AI is generating your response, please wait...";

  try {
    // Calls Puter.js AI model directly
    const response = await puter.ai.chat(userInput);
    
    // Displays the response in the result box
    outputDiv.innerText = response.toString();
  } catch (error) {
    outputDiv.innerText = "Error generating response: " + error.message;
  }
}
