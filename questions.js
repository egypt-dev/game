export class Question{
    constructor(question, choices, correctChoiceIndex, score){
        this.question = question;
        this.choices = choices;
        this.correctChoiceIndex = correctChoiceIndex;
        this.score = score;
    }

    isAnswerCorrect(answer){
        let answerIndex = -1;
        for(let i = 0 ; i < this.choices.length ; i++){
            if(this.choices[i] === answer.trim() && i == this.correctChoiceIndex){
                answerIndex = i;
            }
        }
        return answerIndex != -1 ? true: false 
    }

    getChoices(){
        return this.choices;
    }

    getQuestion(){
        return this.question;
    }

    getScore(){
        return this.score;
    }
}