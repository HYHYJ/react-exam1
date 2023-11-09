// import "./App.css";
import MyHeaders from "./MyHeader";
// import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  let number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  };

  return (
    <Container>
      {" "}
      {/* Container안에를 children으로 넘겨준다. */}
      <div>
        <MyHeaders />
        <Counter {...counterProps} />
        {/* 스프레드 연산자(비구조 할당)로 프롭스 가져오기 (아래와 비교)*/}
        {/* <Counter a={1} b={2} c={3} d={4} e={5} initialValue={5} /> */}
        {/* 너무 props가 길다. */}
        {/* prop: 부모에서 자식으로 값을 넘길 때  */}
      </div>
    </Container>
  );
}

export default App;
