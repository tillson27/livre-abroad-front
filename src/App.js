import BookSubmission from "./components/BookSubmission";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', width: '100%' }}>
      <div style={{ width: '100%', display: 'flex',  justifyContent:'center', alignItems:'center', marginBottom: '20%' }}>
      <BookSubmission />
      </div>
      </div>
    </div>
  );
}

// <Hero />
export default App;
