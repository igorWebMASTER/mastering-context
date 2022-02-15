import { useLogin, useLogout, useAddToCart, useUser, useCartCount } from "./store-zustand";

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

export default function ZustandPage(){
    return (
        <>
            <LoginSection />
            <UserSection />
            <AddToCardSection />
            <CountCartSection />
        </>
    )
}