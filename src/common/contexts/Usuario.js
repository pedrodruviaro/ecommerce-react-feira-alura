import { createContext, useState } from "react";

export const UsuarioContext = createContext();

//displayName => React DevTools usa essa string para exibir o contexto
UsuarioContext.displayName = "Usuário";

export default function UsuarioProvider({ children }) {
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);
    return (
        <UsuarioContext.Provider
            value={{
                nome,
                setNome,
                saldo,
                setSaldo,
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
}
