function slideUp() {
    var additionalContent = document.querySelectorAll('.additional-content');
    additionalContent.forEach(function(content) {
      content.classList.add('hidden');
    });
  }
  
  function slideDown() {
    var additionalContent = document.querySelectorAll('.additional-content');
    additionalContent.forEach(function(content) {
      content.classList.remove('hidden');
    });
  }
  