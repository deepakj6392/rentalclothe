import { Outlet, Route, Routes } from "react-router-dom";
import Header from "@components/common/header/Header";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "./route_default";
import Footer from "@components/common/footer/Footer";

const Routings = () => {
  const HeaderLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        {
            PUBLIC_ROUTES.map((route, idx:number)=>
                <Route path={route.path} element={ route.element} key={idx} />
            )
        }
      </Route>
      <Route path="/" element={<HeaderLayout />}>
        {
            PROTECTED_ROUTES.map((route, idx:number)=>
                <Route path={route.path} element={ route.element} key={idx}/>
            )
        }
      </Route>
    </Routes>
  );
};

export default Routings;
