import { Outlet } from 'react-router-dom';
import Sidebar from '@/widgets/Sidebar';
import './styles/globals.scss';
import Header from '@/widgets/Header';

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default App;
