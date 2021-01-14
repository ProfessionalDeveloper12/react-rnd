import { Rnd } from 'rnd';

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
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
        style={style}
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
        Rnd
      </Rnd>
    </div>
  );
}

export default App;
