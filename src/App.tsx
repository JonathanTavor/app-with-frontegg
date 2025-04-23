import './App.css';
import {useEffect} from 'react';
import {useAuth, useLoginWithRedirect, ContextHolder, AdminPortal} from "@frontegg/react";

function App() {
    const {user, isLoading, isAuthenticated} = useAuth();
    const loginWithRedirect = useLoginWithRedirect();

    // Use as below to redirect to login automatically
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isAuthenticated, loginWithRedirect]);

    const logout = () => {
        const baseUrl = ContextHolder.for().getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
    };

    if (isLoading) return null

    return (
        <div className="App">
            {isAuthenticated ? (
                <div className="card">
                    <img
                        src={user?.profilePictureUrl || '/default-avatar.png'}
                        alt={user?.name}
                        className="profile-pic"
                    />
                    <div className="welcome-text">Welcome, {user?.name}</div>

                    <button
                        className="button button-primary"
                        onClick={() => AdminPortal.show()}
                    >
                        Settings
                    </button>

                    <button
                        className="button button-secondary"
                        onClick={() => alert(user?.accessToken)}
                    >
                        Show Access Token
                    </button>

                    <button
                        className="button button-secondary"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <button
                    className="button button-primary"
                    onClick={() => loginWithRedirect()}
                >
                    Login
                </button>
            )}
        </div>
    )
}

export default App;