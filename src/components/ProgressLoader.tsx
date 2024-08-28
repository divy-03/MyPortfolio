type props = {
  progress: number;
};

const ProgressLoader: React.FC<props> = ({ progress }) => {
  return (
    <div className="preLoader">
      <h3>Loading {progress}%</h3>
    </div>
  );
};

export default ProgressLoader;
