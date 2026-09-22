import { Outlet } from 'react-router-dom';
import Sidebar from '@/widgets/Sidebar';
import './styles/globals.scss'

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
