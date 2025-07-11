const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;

nextBtn.addEventListener('click', () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  updateProgress();
});

prevBtn.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const progressPercent = ((currentStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = progressPercent + '%';

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === circles.length;
}
