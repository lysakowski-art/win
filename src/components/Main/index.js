import { Switch, Route  } from "react-router-dom";
import Users from "../Users";
import UserDetails from "../UserDetails";
import PostDetails from "../PostDetails"
import NotFound404 from "../NotFound404";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Users />} />
      <Route exact path="/user/:id" component={() => <UserDetails />} />
      <Route exact path="/user/:userID/:postID" component={() => <PostDetails />} />
      <Route component={() => <NotFound404 />} />
    </Switch>
  );
};

export default Main;
