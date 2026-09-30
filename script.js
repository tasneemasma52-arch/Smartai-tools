// 1. AI Text Generator Function
async function generateText() {
  const userInput = document.getElementById("textInput").value;
  const outputDiv = document.getElementById("textOutput");

  if (!userInput.trim()) {
    outputDiv.innerText = "Please enter a prompt first!";
    return;
  }

  outputDiv.innerText = "🤖 Generating response...";

  try {
    const response = await puter.ai.chat(`Act as a creative assistant. ${userInput}`);
    outputDiv.innerText = response.toString();
  } catch (error) {
    outputDiv.innerText = "Error: " + error.message;
  }
}

// 2. AI Summarizer Function
async function summarizeText() {
  const userInput = document.getElementById("summaryInput").value;
  const outputDiv = document.getElementById("summaryOutput");

  if (!userInput.trim()) {
    outputDiv.innerText = "Please paste some text to summarize!";
    return;
  }

  outputDiv.innerText = "🤖 Summarizing text...";

  try {
    const prompt = `Summarize the following text into concise bullet points and a brief 2-sentence key takeaway:\n\n${userInput}`;
    const response = await puter.ai.chat(prompt);
    outputDiv.innerText = response.toString();
  } catch (error) {
    outputDiv.innerText = "Error: " + error.message;
  }
}

// 3. AI Hashtag Generator Function
async function generateHashtags() {
  const userInput = document.getElementById("hashtagInput").value;
  const outputDiv = document.getElementById("hashtagOutput");

  if (!userInput.trim()) {
    outputDiv.innerText = "Please enter a topic!";
    return;
  }

  outputDiv.innerText = "🤖 Generating hashtags & caption...";

  try {
    const prompt = `Create an engaging Instagram/TikTok caption for topic: "${userInput}". Then provide 15 relevant, high-traffic hashtags.`;
    const response = await puter.ai.chat(prompt);
    outputDiv.innerText = response.toString();
  } catch (error) {
    outputDiv.innerText = "Error: " + error.message;
  }
}

// Reusable Copy to Clipboard Function
function copyToClipboard(outputId, buttonId) {
  const outputText = document.getElementById(outputId).innerText;

  if (!outputText || outputText.includes("will appear here") || outputText.includes("Please")) {
    alert("Nothing to copy yet!");
    return;
  }

  navigator.clipboard.writeText(outputText).then(() => {
    const btn = document.getElementById(buttonId);
    const originalText = btn.innerText;
    btn.innerText = "✅ Copied!";
    
    setTimeout(() => {
      btn.innerText = originalText;
    }, 2000);
  }).catch(err => {
    alert("Failed to copy: " + err);
  });
}
