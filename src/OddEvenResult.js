const OddEvenResult = ({ count }) => {
  //부모가 내려주는 props가 변경이되면 리랜더한다.
  console.log(count);
  //홀수짝수 구분
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenResult;
