import './App.css';
// Import data from external json file
import data from './CollegeBasketballTeams.json';

// Save data from external json file (data) to new variable teamData
const teamData = data['teams'];

// Component to display the welcome message
function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

// Function to take the info for a team and print it out in a nice "card".
// Parameters include school, name (mascot), city, and state
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

// Function to take the teamData and send each entry to a TeamCard using the .map() function
function TeamList() {
  return teamData.map((team) => <TeamCard {...team} />);
}

// Display the Welcome component and the TeamList
function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
