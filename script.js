body {
    background-color: #0a0a0a;
    color: #00ff00;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    max-width: 800px;
    width: 100%;
    padding: 20px;
}

.neon-text {
    font-size: 3rem;
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00;
}

.neon-input {
    margin: 20px 0;
    padding: 10px;
    border: 2px solid #00ff00;
    background-color: transparent;
    color: #00ff00;
    font-size: 1rem;
    box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
}

.canvas-container {
    max-width: 100%;
    max-height: 500px;
    overflow: hidden;
    margin: 20px 0;
}

.neon-canvas {
    border: 2px solid #00ff00;
    box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
    max-width: 100%;
    height: auto;
}

.neon-button {
    padding: 10px 20px;
    border: 2px solid #00ff00;
    background-color: transparent;
    color: #00ff00;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
    transition: background-color 0.3s, color 0.3s;
}

.neon-button:hover {
    background-color: #00ff00;
    color: #0a0a0a;
}
