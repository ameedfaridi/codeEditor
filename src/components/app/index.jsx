import { Grid } from "@mui/material";
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Editor from "../editor";
import * as Styled from "../styles";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = React.useState("");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html> 
  `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [css, html, js]);

  return (
    <React.Fragment>
      <Styled.MainContainer>
        <Grid container spacing={1}>
          <Grid item xs={12} container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Editor
                displayName="html"
                onChange={setHtml}
                value={html}
                language={`xml`}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Editor
                displayName="css"
                onChange={setCss}
                value={css}
                language={`css`}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Editor
                displayName="js"
                onChange={setJs}
                value={js}
                language={`javascript`}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Styled.OutPutFrame
              title="output"
              srcDoc={srcDoc}
              sandbox="allow-scripts"
              frameBorder={0}
            />
          </Grid>
        </Grid>
      </Styled.MainContainer>
    </React.Fragment>
  );
}
