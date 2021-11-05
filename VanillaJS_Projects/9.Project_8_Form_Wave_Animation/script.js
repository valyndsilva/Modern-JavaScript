// Wrap each letter through JS in a span and have a transition to move it up using translateY and translate delay for each letter that increments.
const labels = document.querySelectorAll('.form-control label');
labels.forEach(label => {
    label.innerHTML = label.innerText //email
    .split('') //split email [e,m,a,i,l]
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`) //turn into an array of letters with a span around it and transition delay
    .join('') //turns the array to a string
})