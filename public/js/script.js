console.log( 'Connected');
// Connection was successfull!


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

    square.classList.remove('square-transition');
  });
});

const hiddenElements = document.querySelector('.hide');
hiddenElements.forEach((el) => observer.observe(el));