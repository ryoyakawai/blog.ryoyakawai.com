(function() {
    console.log('Loaded: header-title-page.js');
    let titleText = document.querySelector('.header-title-text');
    let titleImage = document.querySelector('.header-title-wrap');
    let entryHeader = document.querySelector('div.entry-header'); // post.html
    let entryTitle = document.querySelector('div.entry-title'); // post.html
    var titleIsFixed = false, titleLocked = 0;
    titleText.style.setProperty('width', '100%');
    titleText.style.setProperty('margin', 'auto');
    window.addEventListener('scroll', event => {
        if( titleLocked == 0 && titleText.getBoundingClientRect().top < 20 ) {
            titleLocked = window.pageYOffset;
            titleText.classList.add('titlefixed');

            if( typeof entryTitle !== 'undefined') {
                entryTitle.classList.add('titleShrink', 'header-shadow');
            }
            
            // lock background-image
            var titleTextHdiff = Math.abs(titleText.getBoundingClientRect().top - 
                                          titleText.getBoundingClientRect().bottom);
            var imageH = document.querySelector('.header-title').clientHeight;
            var stopPosition = -1 * Math.abs(imageH - titleTextHdiff - 40);
            document.querySelector('.entry-header').style.setProperty('top', stopPosition + 'px');
            if(typeof document.querySelector('.entry-reading-time')!== 'undefined') {
                //document.querySelector('.entry-reading-time').style.setProperty('opacity', '0');
            }
            entryHeader.classList.add('header-shadow');

            document.querySelector('.dl-menuwrapper').style.setProperty('margin', '20px 5px 0');
        }
        if( window.pageYOffset < titleLocked ) {
            titleLocked = 0;
            titleText.classList.remove('titlefixed');
/*
            if(Math.abs(titleImage.getBoundingClientRect().bottom -
                        titleText.getBoundingClientRect().bottom) < 20 ) {
                
            }
*/
            if( typeof document.querySelector('.entry-reading-time') !== 'undefined') {
                //document.querySelector('.entry-reading-time').style.setProperty('opacity', '1');
            }

            if( typeof entryTitle !== 'undefined') {
                entryTitle.classList.remove('titleShrink', 'header-shadow');
            }
            entryHeader.classList.add('header-shadow');
            document.querySelector('.dl-menuwrapper').style.removeProperty('margin');
        }
    });
}());
