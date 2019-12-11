import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed"
import Registration from "./Registration";
import Settings from "./Settings";
import UserSearch from "./UserSearch";




export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  Register: { path: "/register", component: Registration},
  UserSearch: { path: "/usersearch", component: UserSearch},
  Settings: { path: "/settings/:username", component: Settings},
  NotFound: { path: "*", component: NotFound }
};
