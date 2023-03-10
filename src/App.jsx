import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Breadcrumbs />
        <Outlet />
      </main>
    </>
  );
}

export default App;
