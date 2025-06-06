import {BrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes/>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
