import React,{ useState, createContext } from "react";
import "./App.css";
import Modal from "./components/UI/Modal";
import PasswordList from "./components/PasswordList";

const detailContext = createContext();

function App(props) {

  const [ModalShown,setModalShown]=useState(false);

  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const [allDetails, setAllDetails] = useState([]);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  }

  const [ add, setAdd ] = useState(false);

  const handlePasswordChange = (e) => {
    const { value } = e.target
    setPassword(value);
  }
  
  const ShowModalHandler=()=>{
    setModalShown(true);
    setAdd(true);
  }

  const CloseModalHandler=()=>{
    setModalShown(false);
    setTitle("");
    setPassword("");
  }  

  const handleSubmit = () =>{

    const detail = {
      title: title,
      password: password
    }

    setAllDetails(allDetails => [...allDetails,detail]);
    console.log(allDetails);
    CloseModalHandler();
    setTitle("");
    setPassword("");
  }

  return(
  <detailContext.Provider value = {allDetails}>
    <div className="wrapper">
      <h1>Password keeper</h1>
      <p>Total Passwords: {allDetails.length}</p>
      <button type="button" onClick={ShowModalHandler}>Add New Password</button>
      <div>
        { ModalShown && (<Modal onClose={CloseModalHandler}>
          <div>
            <label htmlFor="title">Title: </label>
            <input onChange={handleTitleChange} type="text" id="title" value={title}/>
          </div>
          <div style ={{marginTop:"5px"}}>
            <label htmlFor="pw">Password: </label>
            <input onChange={handlePasswordChange} type="text" id="pw" value={password}/>
          </div>
          <div style ={{marginTop:"5px"}}>
            <button type="button" style ={{marginRight:"10px"}} onClick={handleSubmit}> { add ? "Add" : "Update" } </button>
            <button type="button" onClick={CloseModalHandler}>Close</button>
          </div>
        </Modal>)}
      </div>
    </div>
    <div>
        <PasswordList 
          details={allDetails} 
          setAllDetails={setAllDetails} 
          setAdd = {setAdd}
          setModalShown={setModalShown}
        />
    </div>
    </detailContext.Provider>
    )
}

export default App;
