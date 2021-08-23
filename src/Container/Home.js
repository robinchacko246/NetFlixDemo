import logo from '../logo.svg';
import NavBar from '.././Components/NavBar/NavBar';
import '.././App.css';
import Banner from '../Components/Banner/Banner';
import RowPost from '../Components/RowPost/RowPost';
import { firebase1 } from '../firebase/config';
import firebase from 'firebase';

function App() {


  return (
    <div className="App">

      <NavBar />
      <Banner />
      <RowPost title="netflix_originals" isSmall="true" />
      <RowPost title="action" />
      <button onClick={async () => {
const googleProvider = new firebase.auth.GoogleAuthProvider();

const auth = firebase1.auth();
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })

       
      }}>SignIn</button>
    </div>
  );
}

export default App;