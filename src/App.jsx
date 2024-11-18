import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product/ProductPage';
import { UserProvider } from './context/UserContext';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import Login from './components/Log In/login';
import SignUp from './components/Sign Up/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-red-600">NOT FOUND PAGE.</h1>} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// Menghindari Prop drilling dengan HOC Higher Order Component
// const parentComponent = () => {
//   const data = 'celerates'
//   return <>
//       <MyCard>
//           <MyPhoto data={data} />
//       </MyCard>
//   </>
// }
