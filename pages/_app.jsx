/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav.jsx";
import Footer from "./footer.jsx";
import React, { useState } from "react";

function App({ Component, pageProps }) {
  const [state, setState] = useState(null);
  const [zip, setZip] = useState("");
  const [type, setType] = useState(null);
  const [feature, setFeature] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [validSubmit, setValidSubmit] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component
        {...pageProps}
        state={state}
        setState={setState}
        zip={zip}
        setZip={setZip}
        type={type}
        setType={setType}
        feature={feature}
        setFeature={setFeature}
        keyword={keyword}
        setKeyword={setKeyword}
        validSubmit={validSubmit}
        setValidSubmit={setValidSubmit}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        query={query}
        setQuery={setQuery}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
