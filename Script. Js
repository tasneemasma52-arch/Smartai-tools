// ======================================
// SMART AI TOOLS - VERSION 2
// ======================================


// TOOL 1
// AI TEXT GENERATOR

function generateText() {

  const input = document.getElementById("textInput").value.trim();
  const output = document.getElementById("textOutput");

  if (!input) {
    output.innerText = "Please enter a topic first.";
    return;
  }

  output.innerText =
`Here is a ready-to-use text about "${input}":

Discover something new today! ✨

Learn, create and grow with ${input}.

Start exploring new possibilities and turn your ideas into something amazing. 🚀`;
}



// TOOL 2
// SUMMARIZER

function summarizeText() {

  const input =
    document.getElementById("summaryInput").value.trim();

  const output =
    document.getElementById("summaryOutput");

  if (!input) {
    output.innerText = "Please paste some text first.";
    return;
  }

  const sentences =
    input.match(/[^.!?]+[.!?]+/g);

  if (!sentences || sentences.length <= 2) {

    output.innerText =
      "Summary: " + input;

    return;
  }

  const summary =
    sentences.slice(0, 2).join(" ");

  output.innerText =
    "Summary:\n" + summary;
}



// TOOL 3
// PROMPT GENERATOR

function generatePrompt() {

  const input =
    document.getElementById("promptInput").value.trim();

  const output =
    document.getElementById("promptOutput");

  if (!input) {
    output.innerText =
      "Please enter a topic first.";
    return;
  }

  output.innerText =
`Create a detailed and professional response about "${input}".

Act as an expert in this topic.

Your response should:
1. Be clear and easy to understand.
2. Provide practical examples.
3. Use simple language.
4. Organize the information with headings and bullet points.
5. Give actionable recommendations.

Target audience: Beginners
Tone: Professional and helpful`;
}



// TOOL 4
// TEXT REWRITER

function rewriteText() {

  const input =
    document.getElementById("rewriteInput").value.trim();

  const output =
    document.getElementById("rewriteOutput");

  if (!input) {
    output.innerText =
      "Please enter text first.";
    return;
  }

  let rewritten = input;

  rewritten = rewritten.replace(
    /\bvery good\b/gi,
    "excellent"
  );

  rewritten = rewritten.replace(
    /\bvery important\b/gi,
    "essential"
  );

  rewritten = rewritten.replace(
    /\bI want\b/gi,
    "I would like"
  );

  output.innerText =
`Professional Version:

${rewritten}`;
}



// TOOL 5
// IDEA GENERATOR

function generateIdeas() {

  const input =
    document.getElementById("ideaInput").value.trim();

  const output =
    document.getElementById("ideaOutput");

  if (!input) {
    output.innerText =
      "Please enter a topic first.";
    return;
  }

  output.innerText =
`10 Ideas for "${input}":

1. Beginner's Guide to ${input}

2. 5 Mistakes People Make With ${input}

3. Top 10 ${input} Ideas

4. ${input} Tips for Beginners

5. How to Start With ${input}

6. ${input} Tools You Should Know

7. ${input} — Complete Guide

8. The Future of ${input}

9. ${input} Hacks That Save Time

10. 7 Things You Should Know About ${input}`;
}
