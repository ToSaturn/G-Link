window.onload = function() {


  let mores = document.querySelectorAll('.more');

  for (let more of mores) {

    more.onclick = function() {

      if (more.innerText == 'Показать все') {

        more.previousElementSibling.style.height = 'auto';
        more.innerText = 'Скрыть';
      } else if (more.innerText == 'Скрыть') {
        more.previousElementSibling.style.height = '100px';
        more.innerText = 'Показать все';
      }
    }
  }






  let moreBlocks = document.querySelectorAll('.more-block');

  for (let moreBlock of moreBlocks) {

    moreBlock.onclick = function() {

      let parent = moreBlock.parentNode;
      let sibl = parent.nextElementSibling;
      let sibl2 = sibl.nextElementSibling;
      if (sibl.style.display != 'none') {
        sibl.style.display = 'none';
        sibl2.style.display = 'none';
        moreBlock.children[0].style.transform = 'rotate(180deg)';

      } else {
        sibl.style.display = 'block';
        sibl2.style.display = 'block';
        moreBlock.children[0].style.transform = 'rotate(0deg)';
      }
    }
  }


  let haract = document.querySelector('.haract');
  let about = document.querySelector('.about');
  let otzyvy = document.querySelector('.otzyvy');

  let haractText = document.querySelector('.product-info-param');
  let aboutText = document.querySelector('.product-info-text');
  let otzyvyText = document.querySelector('.product-info-otzyvy');

  haract.onclick = function() {
    haract.classList.add('active');
    about.classList.remove('active');
    otzyvy.classList.remove('active');

    haractText.style.display = 'block';
    aboutText.style.display = 'none';
    otzyvyText.style.display = 'none';
  }
  about.onclick = function() {
    haract.classList.remove('active');
    about.classList.add('active');
    otzyvy.classList.remove('active');

    haractText.style.display = 'none';
    aboutText.style.display = 'block';
    otzyvyText.style.display = 'none';
  }
  otzyvy.onclick = function() {
    haract.classList.remove('active');
    about.classList.remove('active');
    otzyvy.classList.add('active');

    haractText.style.display = 'none';
    aboutText.style.display = 'none';
    otzyvyText.style.display = 'block';
  }


}
