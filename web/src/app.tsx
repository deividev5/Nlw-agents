import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-rooms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Room } from "./pages/room";

const queryClient = new QueryClient()

export function App() {
 return(
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
 <Route element={<CreateRoom/>} index/>
 <Route  path="/room/:roomId" element={<Room />} />
   </Routes>
    </BrowserRouter>
    </QueryClientProvider>
   
 ) 
}


