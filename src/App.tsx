import './App.css'
import {useEffect, useState} from "react";
import List from "./components/List.tsx";
import Form from "./components/Form.tsx";

interface AppState {
  followers: Array<Follower>
}

const INITIAL_FOLLOWERS: Array<Follower> = [
  {name: 'John', age: 25, avatar: 'https://i.pravatar.cc/150?img=3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci.'},
  {name: 'Jane', age: 24, avatar: 'https://i.pravatar.cc/150?img=4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci.'},
  {name: 'Jack', age: 26, avatar: 'https://i.pravatar.cc/150?img=5'},
];

function App() {

  const [followers, setFollowers] = useState<AppState["followers"]>([])

  useEffect(() => {
    setFollowers(INITIAL_FOLLOWERS)
  }, []);

  const handleNewFollower = (newFollower: Follower): void => {
    setFollowers(followers => ([...followers, newFollower]));
  }

  return (
    <>
      <div className="App">
        <h1>Followers</h1>
        <Form onNewFollower={handleNewFollower}/>
        <List followers={followers}/>
      </div>
    </>
  )
}

export default App
