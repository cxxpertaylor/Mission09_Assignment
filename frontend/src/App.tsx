import './App.css';
import data from './CollegeBasketballTeams.json';

const teamData = data['teams'];

function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <p>School: {school}</p>
      <p>Mascot: {name}</p>
      <p>
        Location: {city}, {state}
      </p>
      <br />
    </>
  );
}

function TeamList() {
  return teamData.map((team) => <TeamCard {...team} />);
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
