import { Navigate, Route, Routes } from 'react-router';
import Navbar from '@/components/Navbar';
import { navigation } from '@/constants';
import Home from '@/pages/Home';

const App = () => (
  <>
    <Navbar />
    <main>
      <Routes>
        <Route index element={<Home />} />
        {navigation.map(({ Page, path }, i) => (
          <Route key={i} path={path} element={<Page />} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  </>
);

export default App;
