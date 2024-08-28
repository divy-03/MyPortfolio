import ProgressLoader from "./components/ProgressLoader";
import Home from "./Home";
import useProgressTracker from "./progress";

const App = () => {
  const progress = useProgressTracker();
  return (
    <div>
      <div className="wrapper">
        <ProgressLoader progress={progress} />

        <div className="page">
          <Home progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default App;
