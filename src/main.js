let iconMoveLeftAndGrow = () => {
  anime({
    targets: '#logo #icon',
    translateX: '-360px',
    duration: 2500,
    scale: {
      value: 1.5,
      duration: 1000,
      delay: 2500,
      easing: 'easeInOutExpo'
    },
  });
}

let changeBackgroundColor = () => {
  anime({
    targets: '#logo',
    backgroundColor: '#319BFF',
    duration: 2500
  });
}

let grow = () => {
  anime({
    targets: '#logo #icon',
    
    duration: 2500
  });
}

let keMoveDown = () => {
  anime({
    targets: '#logo #ke',
    translateY: '140px',
    duration: 1500,
    delay: 500,
    easing: 'easeInSine'
  });
}

let worksMoveLeft = () => {
  anime({
    targets: '#logo #works',
    translateX: '-330px',
    duration: 4000,
    delay: 800
  });
}

let dashShow = () => {
  anime({
    targets: '#logo #dash',
    opacity: 1,
    duration: 6000
  });
}

let doAnimation = () => {
  iconMoveLeftAndGrow();
  keMoveDown();
  //changeBackgroundColor();
  worksMoveLeft();
  dashShow();
  anime({
    targets: '#logo #icon',
    /*
    rotate: {
      value: 180,
      duration: 1500,
      easing: 'easeInOutQuad'
    },
    */
   /*
    scale: {
      value: 2,
      delay: 150,
      duration: 850,
      easing: 'easeInOutExpo',
    }
   */
  });
}

const onDomReady = () => {
  console.log('onDomReady');
  document.getElementById('doAnimation').addEventListener('click', () => {
    doAnimation();
  });
}
