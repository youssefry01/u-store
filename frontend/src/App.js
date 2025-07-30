import Layout from './pages/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Missing from './components/General/Missing';
import { Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Prefetch from './features/auth/Prefetch'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'
import useTitle from './hooks/useTitle';
import Dashboard from './pages/Dashboard';
import PaymentRedirection from './components/Category/AfterPayment/PaymentRedirection';
import PaymentStatus from './components/Category/AfterPayment/PaymentStatus';

function App() {
  useTitle('Ustore')

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route element={<Prefetch />}>
      
      <Route index element={<Home />} />

      <Route path="login" element={<Login />} />

      <Route path="register" element={<Register />} />

      <Route path="account" element={<Account />} />

      <Route path='/:categoryName'>
          <Route index element={<Category />} />
      </Route>

      <Route path="payment-redirect" element={<PaymentRedirection />} />
      <Route path="payment-status" element={<PaymentStatus />} />

      <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route>
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/dash/:categoryName" element={<Dashboard />} />
            <Route path="/dash/users" element={<Dashboard />} />
          </Route>
        </Route>

        </Route>
      </Route>

      <Route path='*' element={<Missing msg={'404'} msg2={`We can't find that page.`}/>} />

      </Route>
    </Routes>
  );
}

export default App;
