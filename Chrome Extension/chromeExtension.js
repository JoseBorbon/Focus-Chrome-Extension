let contentToRemove = document.getElementById('contents').parentNode;
let contentToAddParent = contentToRemove.parentNode;

if(contentToRemove) {
  //remove previous element to add images after
  contentToRemove.remove();

  //create element
  let myImg = document.createElement('img');
  //provide it src tag
  myImg.src = 'https://pbs.twimg.com/media/EtmsDDsWYAAqv5I.jpg';
  //add class to element
  myImg.classList.add('memeImgs');
  //prepend Img
  contentToAddParent.prepend(myImg);

  // create div element and assign text and attributes to it
  let divEl = document.createElement('div');
  divEl.textContent = "Don't let your dreams be memes";
  divEl.setAttribute('id', 'beautText');
  // prepend divEl
  contentToAddParent.prepend(divEl);
 
  let myRequest = new Request('https://unsplash.it/list', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    Authorization: 'Client-ID 5LguptEJ2Ca5N-38puEm9SLJNv2zkcCT_j6YMcpdvHU'
  });

  fetch(myRequest)
    .then(response => response.json())
    .then((data) => {
      //setInterval to swap every 2 seconds
      setInterval(() => {
        //randomly get an element from data
        //grab it by using data at evaluated result of running function
        //change the source for image
        myImg.src = 'https://unsplash.it/1200/800?image=' + data[
          (function (min, max) {
          //return truncated evaluated result out
          return ~~(Math.random() * (max - min) + min);
        }(data.length - data.length, data.length - 1))].id;
      }, 2000);
    });
}

const element = document.getElementById('some-element-you-want-to-animate');
let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  // `Math.min()` is used here to make sure that the element stops at exactly 200px.
  element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

//swap setInterval with requestAnimationFrame

//create a callback function
  //we grab an image source using the IIFE we created on line 40-45
  //