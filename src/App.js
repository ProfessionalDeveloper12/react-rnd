import { useState } from 'react';
import { Rnd } from 'react-rnd';
import Img1 from './assets/1.jpg';

const style = {
  rnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  },
  img: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};

function App() {
  const [state, setState] = useState({
    width: 200,
    height: 200,
    x: 10,
    y: 10
  });

  return (
    <div className="App">
      <Rnd
        style={style.rnd}
        size={{ width: state.width, height: state.height }}
        position={{ x: state.x, y: state.y }}
        onDragStop={(e, d) => {
          setState({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
      >
        <div className="image-container" style={style.imageContainer}>
          <img src={Img1} style={style.img} className={'dragable-image'} />
          <div className="overlay" style={style.overlay}></div>
        </div>
      </Rnd>
    </div>
  );
}

export default App;
