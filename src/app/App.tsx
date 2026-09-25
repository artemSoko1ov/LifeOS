import { Outlet } from 'react-router-dom';
import Sidebar from '@/widgets/Sidebar';
import './styles/globals.scss';
import Header from '@/widgets/Header';
import { useState } from 'react';
import TaskCreateModal from '@/widgets/TaskCreateModal/ui/TaskCreateModal.tsx';

function App() {
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  return (
    <>
      <Sidebar />
      <main>
        <Header onAddTask={() => setIsCreateTaskOpen(true)} />
        <Outlet />
      </main>
      <TaskCreateModal
        isOpen={isCreateTaskOpen}
        onClose={() => setIsCreateTaskOpen(false)}
      />
    </>
  );
}

export default App;
