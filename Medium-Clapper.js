clapButton = document.querySelector('.button--large.button--circle');
evt = new MouseEvent('mousedown',{
    bubbles: true,
    cancelable: true,
    view: window
  });
  clapButton.dispatchEvent(evt);
