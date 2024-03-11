import Navbar from './components/Navbar';
import Card from './components/Cards';
import PieChart from './components/Piecharts';
import Content from './components/Content';
import Table from './components/Table';
import Footer from './components/Footer';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <><Navbar />
    <Content />
    <Card />
    <PieChart />
    <Table />
    <Form />
    <Footer/>
    </>
  );
}

export default App;
