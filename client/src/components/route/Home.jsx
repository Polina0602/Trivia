import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
     <h2> <Link to="Loging">Click to view our Loging page</Link></h2>
    <h3>  <Link to="Regestion">Click to view our Regestion page</Link></h3>
    <h3>  <Link to="Qustions">Click to view our Qustions page</Link></h3>

    
    </div>
    
  );
}

export default Home;