// @ts-check
import { Question } from "./Question.js";

export class Quiz {

    questionsIndex = 0;
    score = 0;

    constructor(questions) {
        this.questions = questions;
    }

    getQuestionIndex() {
        return this.questions[this.questionsIndex];
    }

    isEnded() {
        return this.questions.length === this.questionsIndex;
    }

    guess(answer) {
        console.log(answer);
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }

        this.questionsIndex++;
    }
}