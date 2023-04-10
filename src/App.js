import Profile from "./profile/Profile";
import pic from "./profile/assests/img/myPicture.jpeg";
function App() {
  return (
    <>
      <Profile
        fullName={"Nour Elhouda Jawedi"}
        bio={"24yo with Master's degree in Software Engineering"}
        profession={"FullStack JS Developer"}
        handleName={alert("Nour Elhouda Jawedi")}
      >
        <img src={pic} style={{ width: 170, height: 220 }} alt="me" />
      </Profile>
    </>
  );
}

export default App;
