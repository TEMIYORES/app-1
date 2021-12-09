import "./App.css";
// import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from "./components/ClickCounterTwo";
import Counter from "./components/Counter";
import HoverCounterTwo from "./components/HoverCounterTwo";
// import User from './components/User';
// import HoverCounter from './components/HoverCounter';
// import ErrorBondary from './components/ErrorBondary';
// import Hero from './components/Hero';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import PureComp from './components/PureComp';
// import Table from './components/Table';
// import FragmentDemo from './components/FragmentDemo';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <PortalDemo/>
     <FRParentInput/> */}
      {/* <ErrorBondary>
        <Hero heroName="Batman" />
         </ErrorBondary>
         <ErrorBondary>
        <Hero heroName="Superman" />
        </ErrorBondary>
        <ErrorBondary>
        <Hero heroName="Joker" />
     </ErrorBondary> */}
      {/* <ClickCounter name="temiyores" />
      <HoverCounter name="temiyores"/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User name={(isLoggedIn)=> isLoggedIn ? 'Temiyores' : 'Guest'}/> */}
      <Counter>
        {(count, incrementCount) => {
          <ClickCounterTwo count={count} incrementCount={incrementCount} />;
        }}
      </Counter>
      <Counter>
        {(count, incrementCount) => {
          <HoverCounterTwo count={count} incrementCount={incrementCount} />;
        }}
      </Counter>
    </div>
  );
}

export default App;
