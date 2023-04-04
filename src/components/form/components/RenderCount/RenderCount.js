import React from "react";
import "./RenderCount.css";
export default class RenderCount extends React.Component<void> {
  renders = 0;

  render() {
    return <div className="render-count">{++this.renders}</div>;
  }
}

// import React from 'react'

// export default class RenderCount extends React.Component  {
//   let renders = 0
// const styles = {
//   position: 'absolute',
//   top: '0',
//   right: '0',
//   fontStyle: 'normal',
//   textAlign: 'center',
//   height: '30px',
//   width: '30px',
//   lineHeight: '30px',
//   borderRadius: '15px',
//   border: '1px solid #ddd',
//   background: '#eee'
// }
//   return() {
//     return <div style={styles}>{++this.renders}</div>
//   }
// }
