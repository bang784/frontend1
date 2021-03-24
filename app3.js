import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function ChildComponent() {
  return <h3>나는 자식입니다.</h3>;
}

export default ChildComponent;

import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <h3>나는 부모입니다.</h3>
      <div>
        <h1>내 자식을 소개합니다 </h1>
        <ChildComponent />
        <ChildComponent />
      </div>
    </div>
  );
}

export default ParentComponent;

import ChildComponent from "./ChildComponent";
//부모 컴포넌트 (ParentComponent.js)
function ParentComponent() {
  return (
    <div>
      <h3>나는 부모입니다.</h3>
      <div>
        <h1>내 자식을 소개합니다 </h1>
        //HTML 태그의 Attribute를 넣듯이 Prop을 정해주면 됩니다.
        <ChildComponent name="민수" age={27} />
        <ChildComponent name="그랩" age={28} />
      </div>
    </div>
  );
}

export default ParentComponent;

function Component() {
  const [time, setTime] = useState(0);
  setTime(time + 1);
  console.log("Rendering이 됩니다!");
  return <h3>{time}</h3>;
}

function ComponentOnlyOnce() {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    setTime(time + 1);
    console.log("컴포넌트가 화면에 처음 렌더링될 때 딱 한 번 실행됩니다.");
  }, []);
}

//아래와 같이 하면 안됩니다.
function DontDoThisComponent() {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    setTime(time + 1);
    console.log("time이 바뀔 때마다 계속 업데이트됩니다.");
  }, [time]);
}
