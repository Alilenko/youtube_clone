import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelDetails, Feed, SearchFeed, VideoDetails } from "./pages";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Box>
            <Navbar />
            <Routes>
              <Route exact path="/:category" element={<Feed />} />
              <Route exact path="/" element={<Feed />} />
              <Route exact path="/video/:videoId" element={<VideoDetails />} />
              <Route exact path="/channel/:id" element={<ChannelDetails />} />
              <Route exact path="/search/:search" element={<SearchFeed />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
