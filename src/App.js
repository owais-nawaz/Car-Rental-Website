import Form from "./components/form";
import Header from "./components/header";
import Main from "./components/main";
import CarGallery from "./components/carGallery";
import Card from "./components/card"
import Footer from "./components/footer"

function App() {
  return (
    <div className="app">
      <Header />
      <Main/>
      <Form/>
      <CarGallery/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
