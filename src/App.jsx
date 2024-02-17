import Body from "@/components/Body/Body";
import appStore from "@/store/redux/appStore";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
