const decodeEncodeInput = document.getElementById('decode-encode-input');
const decodeEncodeMethod = document.getElementById('decode-encode-method');
const decodeEncodeBtn = document.getElementById('decode-encode-btn');
const decodeEncodeOutput = document.getElementById('decode-encode-output');

decodeEncodeBtn.addEventListener('click', () => {
    // Show loading animation
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    decodeEncodeBtn.parentNode.insertBefore(loadingDiv, decodeEncodeBtn.nextSibling); 

    const input = decodeEncodeInput.value;
    let output;

    switch (decodeEncodeMethod.value) {
        case 'base64':
            output = btoa(input);
            break;
        case 'url':
            output = encodeURIComponent(input);
            break;
        default:
            output = input;
    }

    decodeEncodeOutput.value = output;

    // Remove loading animation
    loadingDiv.remove();
});

// Add JavaScript for other tools here