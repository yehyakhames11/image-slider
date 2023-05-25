const panels = document.querySelectorAll('.panel');
// Function to add class active to all div when click
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})
// Function to remove active class
 function removeActiveClasses() { 
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}