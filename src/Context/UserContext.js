import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext({usuario: "Mendes"});

function UserProvider ({children}){

    const [usuario, setUsuario] = useState(null);
    const [logado, setLogado] = useState(false);
    const [ saldo, setSaldo ] = useState( 0 );
    const[ cartoes, setCartoes] = useState([])
    const[ticket, setTicket] = useState([])
    async function Login(email, senha){
        if(email == "mendessilveriomateus@gmail.com" && senha == "12345"){
            await AsyncStorage.setItem("usuario" , "Mateus Mendes")
            setLogado(true);
        }
    }

    async function infoUsuario(){
        const usuario = await AsyncStorage.getItem("usuario");
        setUsuario(usuario);
        setLogado(true);
    }  
    
    useEffect(()=> {
        
    },[])
    return(
        
        <UserContext.Provider value={{usuario: "Mendes", logado: logado, Login, infoUsuario, saldo: saldo, setSaldo,cartoes:cartoes,setCartoes, ticket: ticket }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;