import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Transition, animated, config as springConfig } from 'react-spring';
import { matchPath } from 'react-router';
// import {Motion, spring} from '../../src/react-motion';
import Page11 from './Page11';
import Page12 from './Page12';
import NotFound from '../NotFound';
import slide, { config } from '../hoc/slide';

const Animated = animated.div;

// export default class Section1 extends React.PureComponent {
//   state = { index: 0 };
//   next = e =>
//     this.setState(state => ({
//       index: state.index === 2 ? 0 : state.index + 1,
//     }));
//   render() {
//     console.log('Section1 render', this.props);
//     const { index } = this.state;

//     const match1 = matchPath(window.location.pathname, {
//       path: '/section1/page11',
//     });
//     const match2 = matchPath(window.location.pathname, {
//       path: '/section1/page12',
//     });

//     return (
//       <div className="main">
//         <Transition
//           native
//           from={{
//             position: 'absolute',
//             left: '45%',
//             zIndex: 3,
//             opacity: 0,
//             transform: 'translate3d(10%,0,0)',
//           }}
//           enter={{ opacity: 1, zIndex: 2, transform: 'translate3d(0%,0,0)' }}
//           leave={{ opacity: 0, zIndex: 1, transform: 'translate3d(-10%,0,0)' }}
//           config={{ tension: 100, friction: 100 }}
//         >
//           {match1
//             ? style => (
//               <Animated style={style}>
//                 <Page11 />
//               </Animated>
//             )
//             : match2
//               ? (style) => {
//                 console.log();
//                 return (
//                   <Animated style={style}>
//                     <Page12 />
//                   </Animated>
//                 );
//               }
//               : style => (
//                 <Animated style={style}>
//                   <NotFound />
//                 </Animated>
//               )}
//         </Transition>
//       </div>
//     );
//   }
// }

// export default class Section1 extends React.PureComponent {
//   toggle = 0;
//   get = function () {
//     if (this.toggle) {
//       this.toggle = 0;
//     } else {
//       this.toggle = 1;
//     }
//     return this.toggle;
//   };

//   render() {
//     console.log('Section1 render', this.props);

//     return (
//       <div className="main">
//         <Transition
//           native
//           keys={this.get()}
//           from={{
//             position: 'absolute',
//             left: '45%',
//             zIndex: 3,
//             opacity: 0,
//             transform: 'translate3d(10%,0,0)',
//           }}
//           enter={{
//             opacity: 1,
//             zIndex: 2,
//             transform: 'translate3d(0%,0,0)',
//           }}
//           leave={{
//             opacity: 0,
//             zIndex: 1,
//             transform: 'translate3d(-10%,0,0)',
//           }}
//           config={{ tension: 100, friction: 100 }}
//         >
//           {style => (
//             <Switch>
//               <Route
//                 path="/section1/page11"
//                 render={() => (
//                   <Animated style={style}>
//                     <Page11 />
//                   </Animated>
//                 )}
//               />
//               <Route
//                 path="/section1/page12"
//                 render={() => (
//                   <Animated style={style}>
//                     <Page12 />
//                   </Animated>
//                 )}
//               />
//               <Route
//                 render={() => (
//                   <Animated style={style}>
//                     <NotFound />
//                   </Animated>
//                 )}
//               />
//             </Switch>
//           )}
//         </Transition>
//       </div>
//     );
//   }
// }

export default class Section1 extends React.PureComponent {
  toggle = 0;
  get = function () {
    if (this.toggle) {
      this.toggle = 0;
    } else {
      this.toggle = 1;
    }
    return this.toggle;
  };

  render() {
    console.log('Section1 render', this.props);

    return (
      <div className="main">
        <Route
          render={({ location }) => {
            console.log('location.pathname', location.pathname);
            return (
              <Transition
                native
                keys={location.pathname}
                from={{
                  position: 'absolute',
                  left: '45%',
                  zIndex: 3,
                  opacity: 0,
                  transform: 'translate3d(10%,0,0)',
                }}
                enter={{
                  opacity: 1,
                  zIndex: 2,
                  transform: 'translate3d(0%,0,0)',
                }}
                leave={{
                  opacity: 0,
                  zIndex: 1,
                  transform: 'translate3d(-10%,0,0)',
                }}
                config={{ tension: 100, friction: 100 }}
              >
                {style => (
                  <Switch location={location}>
                    <Route
                      path="/section1/page11"
                      render={() => (
                        <Animated style={style}>
                          <Page11 />
                        </Animated>
                      )}
                    />
                    <Route
                      path="/section1/page12"
                      render={() => (
                        <Animated style={style}>
                          <Page12 />
                        </Animated>
                      )}
                    />
                    <Route
                      render={() => (
                        <Animated style={style}>
                          <NotFound />
                        </Animated>
                      )}
                    />
                  </Switch>
                )}
              </Transition>
            );
          }}
        />
      </div>
    );
  }
}
