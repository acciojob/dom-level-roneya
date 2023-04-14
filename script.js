//your JS code here. If required.
const tags = document.querySelectorAll('li');
let i = -1;

tags.forEach((tag, index) => {
  if (tag.getAttribute('id') === 'level') {
    i = index;
	alert(`The level of the element is: ${i+1}`)
  }
	
});


