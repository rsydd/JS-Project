function isAnswerCorrect(question, userAnswer) {
  if (!userAnswer) {
    return false;
  }

  return question.correctAnswer === userAnswer.answer;
}

function countCorrectAnswers(questions, userAnswers) {
  let counter = 0;

  for (const question of questions) {
    const userAnswer = userAnswers.find((answer) => { return answer.questionId === question.id });

    if (isAnswerCorrect(question, userAnswer)) {
      counter += 1;
    }
  }

  return counter;
}

function calculatePercentage(correctCount, totalQuestions) {
  if (totalQuestions === 0) {
    return 0;
  }

  return (correctCount / totalQuestions) * 100;
}

function getResultMessage(percentage) {
  if (percentage >= 75) {
    return "You passed";
  } else if (percentage >= 50) {
    return "Not bad";
  } else if (percentage >= 25) {
    return "Keep practicing";
  }
}

function createQuizResult(questions, userAnswers) {
  const correctCount = countCorrectAnswers(questions, userAnswers);
  const totalQuestions = questions.length;
  const percentage = calculatePercentage(correctCount, totalQuestions);

  return {
    correctCount,
    totalQuestions,
    percentage,
    message: getResultMessage(percentage)
  };
};

const questions = [
  { id: 1, correctAnswer: 'B' },
  { id: 2, correctAnswer: 'A' },
  { id: 3, correctAnswer: 'D' },
  { id: 4, correctAnswer: 'C' },
];


const userAnswers = [
  { questionId: 1, answer: 'B' },
  { questionId: 2, answer: 'C' },
  { questionId: 3, answer: 'D' },
  { questionId: 4, answer: 'C' },
];
console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));
const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));
