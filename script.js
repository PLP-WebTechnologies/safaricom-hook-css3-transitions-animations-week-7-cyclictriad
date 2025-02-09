// Part 2: JavaScript Functions

// Function with Parameters and Return Values
function calculateArea() {
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(width) || isNaN(height)) {
        document.getElementById("area-result").textContent = "Please enter valid numbers.";
        return;
    }

    const area = width * height;
    document.getElementById("area-result").textContent = `Area: ${area}`;
}

// Function Demonstrating Scope
function showScopeDemo() {
    let localVar = "I'm a local variable.";
    globalVar = "I'm a global variable.";

    document.getElementById("scope-result").textContent = `${localVar} ${globalVar}`;
}

// Function to Toggle CSS Class for Animation
function toggleAnimation() {
    const box = document.getElementById("animated-box");
    box.classList.toggle("animated");
}

// Part 3: Combining CSS Animations with JavaScript
function triggerAnimation() {
    const dynamicBox = document.getElementById("dynamic-animation");
    dynamicBox.classList.remove("animated");

    // Trigger reflow to reset the animation
    void dynamicBox.offsetWidth;

    dynamicBox.classList.add("animated");
}