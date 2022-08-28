function SignUpPage(props) {
  return (
    <div>
      sign up page
      <form>
        <div>
          <lable>Name: </lable>
          <input type="text" />
        </div>
        <div>
          <lable>Password: </lable>
          <input type="password" />
        </div>
        <div>
          <lable>Confirm password: </lable>
          <input type="password" />
        </div>
        <div>
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUpPage;
