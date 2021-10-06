const arrayWorks = [
  {
    id: '1',
    title: 'Urbangreen',
    thumbnails: '',
    description: ''
  }
]

/*========GLOBAL VARIABLES========*/

/*========FUNCTIONS========*/
copyrigthYear();

/* COPYRIGHT */
function copyrigthYear() {
  document.querySelector("#copyright").appendChild(document.createTextNode(new Date().getFullYear()));
}
