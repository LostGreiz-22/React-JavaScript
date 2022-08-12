import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fibonacci from './pages/Fibonacci';
import Strings from './pages/Strings';
import PrimeNumbers from './pages/PrimeNumbers';
import MultiplicationTable from './pages/MultiplicationTable';
import SumOfNatural from "./pages/SumOfNatural.1";
import Sumofallthedigits from "./pages/Sumofallthedigits";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fibonacci' element={<Fibonacci />} />
        <Route path='/strings' element={<Strings />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/multiplicationTable' element={<MultiplicationTable />} />
        <Route path='/sumofnatural' element={<SumOfNatural />} />
        <Route path='/sumofalldigits' element={<Sumofallthedigits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;