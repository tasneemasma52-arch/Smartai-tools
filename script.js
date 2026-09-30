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

// Function to copy generated text to clipboard
function copyToClipboard() {
  const outputText = document.getElementById("textOutput").innerText;

  if (!outputText || outputText === "Your AI-generated response will appear here...") {
    alert("Nothing to copy yet!");
    return;
  }

  navigator.clipboard.writeText(outputText).then(() => {
    const copyBtn = document.getElementById("copyBtn");
    copyBtn.innerText = "✅ Copied!";
    
    // Reset button label after 2 seconds
    setTimeout(() => {
      copyBtn.innerText = "📋 Copy Text";
    }, 2000);
  }).catch(err => {
    alert("Failed to copy text: " + err);
  });
}
