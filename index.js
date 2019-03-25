function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');

}

funcion increaseRankBy(n) {
  let rank = document.querySelectorAll('.ranked-list');
    for (let i = 0; i < rank.length; i++) {
      rank[i].innerHTML = (i + 1).toString();
    }
}

function deepestChild() {
  let deepest = document.querySelector('#grand-node').querySelectorAll('div')
  return deepest [deepest.length - 1];

}
