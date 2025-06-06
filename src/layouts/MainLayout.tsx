import type {ReactNode} from "react";

import Header from "../components/Header/Header.tsx";

const MainLayout = ({children}: { children: ReactNode }) => {
  return (
    <div>
      <Header/>
      <main className="main">{children}</main>
    </div>
  )
}

export default MainLayout;