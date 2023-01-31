import logo from "./assets/images/logo.png";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="App ">
      <img className="w-[100px]" src={logo} alt="logo Netflix" />
      <Section />
    </div>
  );
};

export default App;
