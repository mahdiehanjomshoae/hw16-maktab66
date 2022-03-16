import React , { useEffect , useState , useRef , useCallback , memo} from "react";
import Button from "./Hooks/Button.js";
import Title from "./Hooks/Title.js";

function App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  const [value1,stateValue1] = useState('');
  const [value2,stateValue2] = useState('');
  const ref1 = useRef('')
  const ref2 = useRef('')
  const changeValue1 = useCallback(
      () => {
        stateValue1(ref1.current.value);
      },
  [value1]);
  
  const changeValue2 = useCallback(
    () => {
      stateValue2(ref2.current.value);
    },
  [value2]);

  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{value1}</Title>
        <br />
        change first value:
        <input ref={ref1}/>
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input ref={ref2}/>
        <Button onClick={changeValue2}> change </Button>
      </div>
    </div>
  );
}
export default memo(App);
