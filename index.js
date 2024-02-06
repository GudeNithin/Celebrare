function applyStyles() {
    const textInput = document.getElementById('textInput');
    const fontFamily = document.getElementById('fontFamily').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontColor = document.getElementById('fontColor').value;

    textInput.style.cssText = `
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${fontColor};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    `;
}
