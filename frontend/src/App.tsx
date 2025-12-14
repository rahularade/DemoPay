import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Landing } from "./pages/Landing";
import { AuthProvider } from "./contexts/AuthContext";
import { PublicRoute } from "./routes/PublicRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PublicRoute>
                                    <Landing />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <PublicRoute>
                                    <Signup />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/signin"
                            element={
                                <PublicRoute>
                                    <Signin />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/send"
                            element={
                                <ProtectedRoute>
                                    <SendMoney />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/*" element={
                                <PublicRoute>
                                    <Landing />
                                </PublicRoute>
                            } />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
