import { BrowserRouter as Router } from "react-router-dom";
import { Wrapper, Footer, Push } from "./components/Elements";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Main />
          <Push />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
