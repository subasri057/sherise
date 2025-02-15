// Quiz Submission Logic
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Correct Answers
    const answers = {
        q1: 'a', // SEO stands for Search Engine Optimization
        q2: 'b' // LinkedIn is best for professional networking
    };

    // User Answers
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value
    };

    // Calculate Score
    let score = 0;
    if (userAnswers.q1 === answers.q1) score++;
    if (userAnswers.q2 === answers.q2) score++;

    // Display Result
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.textContent = `You scored ${score} out of 2!`;
    resultDiv.style.color = score === 2 ? 'green' : 'red';
});