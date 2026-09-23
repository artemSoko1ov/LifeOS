import { createBrowserRouter } from 'react-router-dom';
import TodayPage from '@/pages/Today';
import App from './App.tsx';
import NotFoundPage from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <TodayPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
