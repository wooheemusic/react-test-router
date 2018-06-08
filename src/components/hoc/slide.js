import React from 'react';
import { Transition, animated, config as springConfig } from 'react-spring';

const slide = (Kernal, config) => props => (
  <Transition
    native
    from={{ zIndex: 3, opacity: 0, transform: 'translate3d(10%,0,0)' }}
    enter={{ zIndex: 2, opacity: 1, transform: 'translate3d(0%,0,0)' }}
    leave={{ zIndex: 1, opacity: 0, transform: 'translate3d(-10%,0,0)' }}
    config={config}
  >
    {style => (
      <animated.div
        // onClick={(e) => {
        //   console.log(e.target.innerHTML);
        // }}
        style={{ ...style }}
      >
        <Kernal {...props} />
      </animated.div>
    )}
  </Transition>
);

export { slide as default, springConfig as config };
