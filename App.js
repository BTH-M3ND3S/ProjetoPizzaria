import UserProvider from "./src/Context/UserContext";
import Rotas from "./src/Routes/Rotas";

export default function App() {
    return (
        <UserProvider>
            <Rotas />
        </UserProvider>
    )
}