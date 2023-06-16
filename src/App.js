import "./styles.css";
import Avatar from "./components/Avatar";
import Bio from "./components/Bio";
import SkillList from "./components/SkillList";
import data from "./data/data";

function App() {
  return (
    <div className="card">
      <div className="data">
        <Avatar src={data.featuredImage} alt={data.name} />
        <Bio name={data.name} bio={data.bio} />
        <SkillList skills={data.skills} />
      </div>
    </div>
  );
}

export default App;
