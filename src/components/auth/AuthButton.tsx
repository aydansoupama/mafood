"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

export default function AuthButton() {
    const { data: session } = useSession();

    const buttonStyle = "font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-black bg-yellow-400 hover:bg-black hover:text-yellow-400 px-2 sm:px-3 md:px-4 py-1 sm:py-2 transition-colors transform -skew-x-12 border-2 border-black hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]";

    if (session && session.user) {
        return (
            <Button 
                className={buttonStyle}
                onClick={() => signOut()}
            >
                Déconnexion
            </Button>
        );
    }

    return (
        <Button 
            className={buttonStyle}
            onClick={() => signIn()}
        >
            Connexion
        </Button>
    );
}