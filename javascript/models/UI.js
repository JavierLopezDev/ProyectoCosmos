export class UI {
    constructor() {}

    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));
            choicesContainer.append(button);
        }
    }

    showScores(score) {
        let puntacionSobre10 = (score*10) / 14;

        const quizEndHTML = `
            <h1>Resultado</h1>
            <h2>Tu puntuación: ${puntacionSobre10}</h2>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    }

    showProgress(currentIndex, total) {
        const element = document.getElementById('progress');
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
    }
}