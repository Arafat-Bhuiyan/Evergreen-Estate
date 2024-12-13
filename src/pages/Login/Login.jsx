import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Show success toast notification
        toast.success("Logged in successfully!");

        // Redirect to home page after successful login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Show success toast notification
        toast.success("Logged in successfully!");

        // Redirect to home page after successful login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // Show success toast notification
        toast.success("Logged in successfully!");

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);

        // Show error toast notification
        toast.error("Invalid email or password. Please try again or Register.");
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login</h1>
          <p className="py-6">
            Welcome back to your personalized real estate dashboard. Log in to
            access exclusive property listings and tailored recommendations.
            Let’s find your dream home together!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn">
                Sign in with Google
              </button>
            </div>
            <div className="form-control">
              <button onClick={handleGithubSignIn} className="btn">
                Sign in with GitHub
              </button>
            </div>
            <p className="text-center">Or</p>
            <div className="form-control">
              <div>
                <span>Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <div>
                <span>Password</span>
              </div>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div>
                <a href="#" className="link link-hover">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer /> {/* Enables toast notifications */}
    </div>
  );
};

export default Login;
