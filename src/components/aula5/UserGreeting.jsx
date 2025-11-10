
const UserGreeting = ({ 
    isLoggedIn,
    nomeDaCadeira
 }) => {
    return (
        <div>
            {isLoggedIn ? 
            <h1>Welcome back!</h1> : 
            <h1>Please log in.</h1>}
            <h1>
                {nomeDaCadeira}

            </h1>

        </div>
    );
}
        