"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        await gitHubSignIn();
    };

    const handleLogout = async () => {
        await firebaseSignOut();
    };

    return (
        <main>
            {!user ? (
                <div>
                    <button onClick={handleLogin}>
                        Login with GitHub
                    </button>
                </div>
            ) : (
                <div>
                    <p>
                        Sign in as {user.displayName} ({user.email})
                    </p>
                    <button onClick={handleLogout}>
                        Sign out
                    </button>
                    <br />
                    <a href="/week-9/shopping-list">Go to Shopping List</a>
                </div>
            )}
        </main>
    );
}