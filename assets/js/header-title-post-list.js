(function() {
  console.log('Loaded: header-title-post-list.js');
  let titleText = document.querySelector('.header-title-text');
  let titleImage = document.querySelector('.header-title-wrap');
  let entryHeader = document.querySelector('.entry-header');
  var titleIsFixed = false, titleLocked = 0;

  titleText.style.setProperty('width', '100%');
  titleText.style.setProperty('margin', 'auto');
  window.addEventListener('scroll', event => {
    if( titleLocked == 0 && titleText.getBoundingClientRect().top < 20 ) {
      titleLocked = window.pageYOffset;
      titleText.classList.add('textfixed');

      // lock background-image
      var titleTextHdiff = Math.abs(titleText.getBoundingClientRect().top -
                                    titleText.getBoundingClientRect().bottom);
      var imageH = document.querySelector('.header-title').clientHeight;
      var stopPosition = -1 * Math.abs(imageH - titleTextHdiff - 40);
      var diplayHeight = titleTextHdiff + 20;
      entryHeader.style.setProperty('top',entryHeader.getBoundingClientRect().top + 'px');
      document.querySelector('.entry-header').classList.add('title-background-fix');
      entryHeader.classList.add('header-shadow');

      if(document.querySelector('.dl-menuwrapper') != null) {
        document.querySelector('.dl-menuwrapper').style.setProperty('margin', '10px 5px 0');
      }
    }
    if( window.pageYOffset < titleLocked ) {
      titleLocked = 0;
      titleText.classList.remove('titlefixed');

      document.querySelector('.entry-header').style.removeProperty('top');
      document.querySelector('.entry-header').classList.remove('title-background-fix');
      entryHeader.classList.remove('header-shadow');

      if(document.querySelector('.dl-menuwrapper') != null) {
        document.querySelector('.dl-menuwrapper').style.removeProperty('margin');
      }
    }
  });
}());
