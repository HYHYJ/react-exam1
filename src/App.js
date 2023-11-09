// import "./App.css";
import MyHeaders from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";

function App() {
  let name = "다람";

  const style = {
    App: {
      backgroundColor: "black",
    },

    h2: {
      color: "red",
    },

    bold_text: {
      color: "green",
    },
  };

  const func = () => {
    return "dfd";
  };

  const num = 5;
  return (
    <div className="App" style={style.App}>
      <MyHeaders />
      <Counter />
    </div>
  );
}

export default App;
