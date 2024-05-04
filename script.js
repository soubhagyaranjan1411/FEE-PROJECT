function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

function toggleMode() {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');


  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
  document.getElementById("back").classList.toggle("bg-gray-900");
  document.getElementById("back").classList.toggle("bg-white");
  document.getElementById("back").classList.toggle("text-white");

document.querySelectorAll("#btn").forEach(btn => {
  btn.classList.toggle("bg-black");
  btn.classList.toggle("bg-white");
  btn.classList.toggle("text-white");
  btn.classList.toggle("text-black");
});


  
}

function toggleMode1() {
const sunIcon = document.getElementById('sun-icon1');
const moonIcon = document.getElementById('moon-icon1');


sunIcon.classList.toggle('hidden');
moonIcon.classList.toggle('hidden');
document.getElementById("back").classList.toggle("bg-gray-900");
document.getElementById("back").classList.toggle("bg-white");
document.getElementById("back").classList.toggle("text-white");

document.querySelectorAll("#btn").forEach(btn => {
btn.classList.toggle("bg-black");
btn.classList.toggle("bg-white");
btn.classList.toggle("text-white");
btn.classList.toggle("text-black");
});
}



function display(){
    document.getElementById("mobnav").classList.toggle('invisible')
    document.getElementById("mobnav").classList.toggle('visible')

    
}

const faqTriggers = document.querySelectorAll('.faq-question');

faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        const faqAnswer = this.nextElementSibling;
        const faqQuestion = this;

        faqAnswer.add.classList.toggle('hidden');
        faqQuestion.add.classList.toggle('rounded-b-lg');
    });
});

function toggleBox(box) {
    const boxContainer = box.parentElement;
    const answerContainer = boxContainer.querySelector('div:last-child');
    const arrow = boxContainer.querySelector('svg');
  
    boxContainer.dataset.open = boxContainer.dataset.open === 'true' ? 'false' : 'true';
  
    if (boxContainer.dataset.open === 'true') {
      answerContainer.classList.remove('max-h-0');
      arrow.classList.add('rotate-180');
    } else {
      answerContainer.classList.add('max-h-0');
      arrow.classList.remove('rotate-180');
    }
}





// Function to toggle box visibility and scroll to it
function toggleBox(element) {
    const content = element.nextElementSibling;
    const isOpen = element.parentElement.getAttribute('data-open') === 'true';
  
    if (isOpen) {
      content.style.maxHeight = '0';
      element.parentElement.setAttribute('data-open', 'false');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      element.parentElement.setAttribute('data-open', 'true');
      const rect = content.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top - (window.innerHeight / 2) + (rect.height / 2);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
  
// Search function
  function handleSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const questions = document.querySelectorAll('.flex.flex-col.gap-5.max-w-4xl .border-2.border-sky-500.rounded-lg');
    let found = false; // Initialize a flag to track if any matching FAQ was found
  
    questions.forEach(question => {
      const questionText = question.querySelector('.text-left').textContent.toLowerCase();
      const content = question.querySelector('.transition-all.duration-300.overflow-hidden');
      if (questionText.includes(searchTerm)) {
        found = true; // Set the flag to true if a matching FAQ is found
        content.style.maxHeight = content.scrollHeight + 'px';
        question.setAttribute('data-open', 'true');
        const rect = content.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - (window.innerHeight / 2) + (rect.height / 2);
        window.scrollTo({ top: offset, behavior: 'smooth' });
      } else {
        content.style.maxHeight = '0';
        question.setAttribute('data-open', 'false');
      }
    });
  
    if (!found) {
      alert('No matching FAQ found!'); // Display the alert message if no matching FAQ was found
    }
  }
  
  
  // Event listener for search button click
  document.getElementById('search-button').addEventListener('click', handleSearch);
  
  
  // Event listener for pressing Enter in search input
  document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
  
