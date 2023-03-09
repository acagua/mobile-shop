import { Outlet } from 'react-router-dom';
import { Breadcrumb } from './components/Breadcrumb';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Breadcrumb />
        <Outlet />
      </main>
    </>
  );
}

export default App;
