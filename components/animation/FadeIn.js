import {animated, config, useSpring} from 'react-spring';
import React from 'react';

const FadeIn = ({children}) => {
  const fadeIn = useSpring({
    config: { ...config.molasses },
    from: { opacity: 0 },
    to: {
      opacity: 1
    }
  });
  return (
    <animated.div style={{ ...fadeIn, overflow: 'hidden' }}>
      {children}
    </animated.div>
  );
}

export default FadeIn