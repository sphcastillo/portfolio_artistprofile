import  { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Login() {
    const [providers, setProviders] = useState<any>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const providerData = await getProviders();
            setProviders(providerData);
        };
        fetchProviders();
    
    }, [])

    if(!providers){
        return <div>Loading...</div>
    }
    return (
        <>
            <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
                {Object.values(providers).map((provider: any) => (
                    <div key={provider.name}>
                        <button 
                            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                            className=""
                        >
                            Login with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Login;