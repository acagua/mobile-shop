import { Outlet } from 'react-router-dom';
import { Breadcrumb } from './components/Breadcrumb';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Breadcrumb />
      </header>
      <Outlet />
    </>
  );
}

export default App;
