// import logo from "./logo.svg";

import "./App.css";
import MainPageComponent from "./main/index";

function App() {
  return <MainPageComponent />;
}

// import ChildComponent from "./child";
// import TimerComponent from "./timer";

// function App() {
//   const text = "풀스택 개발자 찬차늬 화이팅!";
//   const sayHello = function () {
//     return <h3>찬차늬 쇼핑몰 너무 좋아</h3>;
//   };
//   const sayHello2 = function () {
//     alert("하이욤");
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div>
//           <h1>안녕하세요!</h1>
//           <h2>{text}</h2>
//           {sayHello()}
//           <div
//             onClick={function () {
//               alert("안녕");
//             }}
//           >
//             클릭해주세요
//           </div>
//           <div onClick={sayHello2}>클릭미 클릭미</div>
//           <TimerComponent />
//           <ChildComponent name="찬차늬" age={32} />
//           <ChildComponent name="벼르밤" age={33} />
//           <ChildComponent name="마르코" age={34} />
//         </div>
//       </header>
//     </div>
//   );
// }

export default App;
