import useSignup from "./hooks/useSIgnup";
import './signup.css'
const Signup = () => {
  const { handleSubmit, handleInput, isLoading } = useSignup();
  return (
    <div style={{ padding: "4rem 2rem" }}>
      <div className="signup-container">
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formDiv}>
            <label htmlFor="email">Email</label>
            <input
              style={styles.formInput}
              onChange={handleInput}
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div style={styles.formDiv}>
            <label htmlFor="name">Name</label>
            <input
              style={styles.formInput}
              onChange={handleInput}
              type="text"
              name="name"
              id="name"
              placeholder="John doe"
              required
            />
          </div>
          <div style={styles.formDiv}>
            <label htmlFor="password">Password</label>
            <input
              style={styles.formInput}
              onChange={handleInput}
              type="password"
              name="password"
              id="password"
              placeholder="******"
              required
            />
          </div>

          <button disabled={isLoading} className="form-btn" style={styles.formButton}>
            {isLoading ? <span>Signing up...</span> : <span>Sign up</span>}
          </button>
          
        </form>
      </div>
    </div>
  );
};

const styles = {
  form: {
    width: "90vw",
    maxWidth: "400px",
    margin: "auto",
    border: "1px solid",
    borderRadius: "8px",
    padding: "1rem",
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    margin: ".5rem 0",
  },
  formInput: {
    padding: ".5rem 1rem",
    borderRadius: "5px",
    border: "1px solid",
  },
  formButton: {

    color: "white",
    padding: ".5rem 1rem",
    borderRadius: "5px",
    border: "none",
   
  },
};

export default Signup;
