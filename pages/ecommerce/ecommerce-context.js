
import { 
    useLogin, 
    useLogout, 
    useAddToCart, 
    useUser, 
    useCartCount,
    StoreContextProvider
} from "./store-context";

const LoginSection = () => {
    const login = useLogin();
    const logout = useLogout();

   return(
    <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>)
}

const UserSection = () => {
    const user = useUser();
    return <div>User: {user} </div>
};

const AddToCardSection = () => {
    const addToCart = useAddToCart();
    return (<div>
        <button onClick={addToCart}>Add to card</button>
    </div>)
}

const CountCartSection = () => {
    const count = useCartCount();
    return (
        <div>
            <button>Count cart {count}</button>
        </div>
    )
}

function ContextPage(){
    return (
        <div>
            <LoginSection />
            <UserSection />
            <AddToCardSection />
            <CountCartSection />
        </div>
    )
}

export default function ContextPageWrapper(){
    return (
        <StoreContextProvider>
            <ContextPage />
        </StoreContextProvider>
    )
}