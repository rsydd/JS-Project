function getLetterGrade(score) {
  if (score >= 85) {
    return 'A';
  } else if (score >= 75) {
    return 'B';
  } else if (score >= 65) {
    return 'C';
  } else if (score >= 55) {
    return 'D';
  } else if (score >= 45) {
    return 'F'
  }
}

function hasPassed(score) {
  return score >= 60;
}

function getFeedback(grade) {
  switch (grade) {
    case 'A':
      return "Excellent work";
      break;
    case 'B':
      return "Keep practicing";
      break;
    case 'C':
      return "You passed";
      break;
    case 'D':
      return "It's not good";
      break;
    case 'E':
      return "It's bad";
      break;
    case 'F':
      return "It's pretty bad now";
      break;
    default:
      return "Option is out of A-E";
      break;
  }
}

function createGradeReport(name, score) {
  const grade = getLetterGrade(score);
  const passed = hasPassed(score);
  const feedback = getFeedback(grade);

  return {
    name,
    score,
    grade,
    passed,
    feedback
  }
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
