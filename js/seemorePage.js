const arrayWorks = [
  {
    id: '1',
    title: 'Urbangreen',
    thumbnails: '',
    description: ''
  },
  {
    id: '2',
    title: 'Big.byte',
    thumbnails: '',
    description: ''
  },
  {
    id: '3',
    title: 'Mario Jump',
    thumbnails: '',
    description: ''
  },
  {
    id: '4',
    title: 'Irest',
    thumbnails: '',
    description: ''
  },
  {
    id: '5',
    title: 'Beer POG',
    thumbnails: '',
    description: ''
  },
]

/*========GLOBAL VARIABLES========*/

/*========FUNCTIONS========*/
copyrigthYear();

/* COPYRIGHT */
function copyrigthYear() {
  document.querySelector("#copyright").appendChild(document.createTextNode(new Date().getFullYear()));
}
