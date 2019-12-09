import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed"
import Registration from "./Registration";
import Settings from "./Settings";



export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  Register: { path: "/register", component: Registration},
  Settings: { path: "/settings/:username", component: Settings},
  NotFound: { path: "*", component: NotFound }
};
