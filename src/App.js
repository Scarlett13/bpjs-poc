import './App.css';
import Layout from './components/templates/Layout/Layout';
import { Route, Routes } from 'react-router-dom'
import DiagnosaPage from './pages/Diagnosa';
import DokterPage from './pages/Dokter';
import KesadaranPage from './pages/Kesadaran';
import PesertaPage from './pages/Peserta';
import PoliPage from './pages/Poli';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<DiagnosaPage />} />
          <Route path="/dokter" element={<DokterPage />} />
          <Route path="/kesadaran" element={<KesadaranPage />} />
          <Route path="/peserta" element={<PesertaPage />} />
          <Route path="/poli" element={<PoliPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
