// In settings.json add "liveServer.settings.port": 5501
const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value // Convert to Number type using +
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width') // get styles/values from css 300px
    // console.log(range_width);
    const label_width = getComputedStyle(label).getPropertyValue('width') // 60px
   // console.log(range_width, label_width); //300px 60px
    const num_range_width = +range_width.substring(0, range_width.length - 2) // remove px from the range_width value
    const num_label_width = +label_width.substring(0, label_width.length - 2) // remove px from the label_width value
// console.log(num_width, num_label_width); // 300 60
    const max = +e.target.max
    const min = +e.target.min
    // console.log(min, max); //0 100
    
    // makes the label stay aligned to the middle of the thumb
    const left = value * (num_range_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10) // 50 * (300/100) - 60 / 2 + scale(50, 0, 100, 10, -10) 

    label.style.left = `${left}px`


    label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
