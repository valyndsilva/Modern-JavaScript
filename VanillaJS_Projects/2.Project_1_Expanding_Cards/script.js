const panels = document.querySelectorAll('.panel'); //returns a nodelist
// console.log(panels);
// console.log(panels[0]);
panels.forEach(panel => {
panel.addEventListener('click', () => {
    // console.log(123);
    removeActiveClasses(); //check and remove any active class on all panels
    panel.classList.add('active'); // add active class
})
})
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
