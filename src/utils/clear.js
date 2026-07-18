

function clearSupport(){
  const myNode = document.querySelector(".support")
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  
}
}

function clearMainToday(){
  const myNode = document.querySelector(".today")
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  
}
}

function clearMainWeek(){
const myNode = document.querySelector(".week")
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  
}
}

export {clearSupport, clearMainToday, clearMainWeek}