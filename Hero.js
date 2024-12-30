const terminalContent = document.getElementById('terminalContent');
const commands = [
    { code: 'console.log("Welcome to Noctyrium!");' },
    { code: 'const goals = ["Innovation", "Growth", "Excellence"];' },
    { code: 'goals.forEach(goal => console.log(`- ${goal}`));' },
    { output: 'Welcome to Noctyrium!' },
    { output: '- Innovation' },
    { output: '- Growth' },
    { output: '- Excellence' }
];

let index = 0;

function typeCommand() {
    if (index < commands.length) {
        const { code, output } = commands[index];

        if (code) {
            const codeLine = document.createElement('pre');
            codeLine.classList.add('code');
            let charIndex = 0;
            const typedText = document.createElement('span'); // Create a span for each character typed

            terminalContent.appendChild(codeLine); // Append the line to terminal content

            const typeInterval = setInterval(() => {
                typedText.textContent += code[charIndex];
                codeLine.appendChild(typedText); // Append the typed text as we go
                charIndex++;

                // If all characters are typed, stop the interval and add a blinking cursor effect
                if (charIndex === code.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        typedText.style.animation = 'none'; // Stop typing animation after completion
                    }, 500); // Pause briefly before proceeding to the next line
                    index++;
                    setTimeout(typeCommand, 500);
                }
            }, 50); // Adjust typing speed here
        } else if (output) {
            const outputLine = document.createElement('pre');
            outputLine.classList.add('output');
            outputLine.textContent = output;
            terminalContent.appendChild(outputLine);
            terminalContent.scrollTop = terminalContent.scrollHeight;
            index++;
            setTimeout(typeCommand, 500);
        }
    }
}

typeCommand();
