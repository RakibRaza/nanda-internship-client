import Movies from "./components/Movies/Movies";
import SubmitForm from "./components/SubmitForm/SubmitForm";


function App() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className="col-md-6">
          <SubmitForm />
        </div>
      </div>
      <Movies />
    </div>
  );
}

export default App;
