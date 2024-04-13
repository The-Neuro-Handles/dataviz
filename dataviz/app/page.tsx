import Image from "next/image";
import NavBar from "../components/NavBar";
import MainDashbord from "./MainDashbord/page";

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';


export default function Home() {
  return (
    <CssVarsProvider defaultMode="dark">
        <main className="flex w-full">
          <MainDashbord />
        </main>
    </CssVarsProvider>
  );
}
