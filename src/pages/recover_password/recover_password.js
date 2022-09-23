import "./recover_password.css";

function RecoverPassword(props) {
  return (
    <div className="recover">
      Recover your password:
      <form>
        <div>
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
}

export default RecoverPassword;
