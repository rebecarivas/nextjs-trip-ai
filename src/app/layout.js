import StyledComponentsRegistry from "../../lib/registry.js";
import GlobalStyle from "../../styles/global.js";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-br">
        <body>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
