import Quote from "../components/Quote";
import Auth from "../components/Auth";
const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex-1">
            <Auth type="signin"></Auth>
        </div>
        <div className="hidden lg:block">
          <Quote></Quote>
        </div>
      </div>
    </div>
  );
};

export default Signin;
