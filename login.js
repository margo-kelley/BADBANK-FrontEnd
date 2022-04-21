function Login(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 5000);
      return false;
    }
    return true;
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <Card
        bgcolor="grey"
        txtcolor="black"
        status={status}
        body={
          show ? (
            <>
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h2 className="success-head">Login Successful.</h2>
              <button type="submit" className="btn btn-light">
                <a className="nav-link-bal" href="#/balance/">
                  Go to Balance
                </a>
              </button>
            </>
          )
        }
      />
    </div>
  );
}
