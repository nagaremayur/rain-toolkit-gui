import App from "./App.svelte";
// beforeEach(() => {
//   cy.mount(App)
//   cy.viewport(1280, 720)
// })

// it("should redirect to welcome screen when creds are correct", () => {
//   cy.contains("Connect your wallet to get started.");
//   cy.contains("button", "Wallet Connect").click()
// })

describe('Test User Login', () => {


  it('Connects with Metamask', () => {
    cy.setupMetamask("pink inner sun present summer miracle quit hand explain baby property salmon", "rinkeby", "Demo@1234$");
    // cy.mount(App)
    cy.visit('http://localhost:5173')
    // find "Connect Wallet" button and click it
    // cy.contains('Connect Wallet').click();
    // // assuming there is only metamask popping up 
    // // always important to switch between metamask and cypress window
    // cy.switchToMetamaskWindow();
    // // connect to dapp
    // cy.acceptMetamaskAccess(true).should("be.true");
    // cy.confirmMetamaskSignatureRequest();
    // // switch back to cypress window (your dApp)
    // cy.switchToCypressWindow();
    // // check UI change
    // cy.contains('...').should('be.visible');
  })
})

// describe("Login Account", () => {
//   before(() => {
//     cy.mount(App)
//     cy.viewport(1280, 720)
//     cy.disconnectMetamaskWalletFromAllDapps();
//   });

//   it("Should show connect wallet if not logged in", () => {
//     cy.visit(`/`);
//     cy.contains("Connect your wallet to get started.");
//     // cy.findByRole("button", { name: /connect wallet/i }).should("be.visible");
//   });

//   it("Should trigger login modal and ask for metamask login", () => {
//     cy.visit("/");
//     cy.findByRole("button", { name: /connect wallet/i }).click();
//     cy.acceptMetamaskAccess(true).should("be.true");
//     cy.switchMetamaskAccount(1);
//     cy.switchToCypressWindow().should("be.true");
//     cy.findByText(/please sign in using metamask account:/i).should("be.visible");
//     cy.confirmMetamaskSignatureRequest();

//     cy.findByText(/0xf39f\.\.\.2266/i).should("be.visible");
//   });
// });

// describe("LoginForm", () => {
//   it("should redirect to welcome screen when creds are correct", () => {
//     cy.mount(App);
//     cy.contains("Connect your wallet to get started.");
//     // cy.contains("Password").find("input").type("testpassword");
//     // cy.intercept("POST", "/auth", {
//     //   statusCode: 200,
//     //   body: {
//     //     message: "Authenticated",
//     //   },
//     // });
//     // cy.get("button").contains("Login").as("loginButton").click();
//     // cy.contains("Welcome testuser!");
//   });

//   // it("should show error message when creds are incorrect", () => {
//   //   cy.mount(App);
//   //   cy.contains("Username").find("input").type("baduser");
//   //   cy.contains("Password").find("input").type("badpassword");
//   //   cy.intercept("POST", "/auth", {
//   //     statusCode: 401,
//   //     body: {
//   //       message: "Bad username or password",
//   //     },
//   //   });
//   //   cy.get("button").contains("Login").as("loginButton").click();
//   //   cy.contains("Bad username or password");
//   // });
// });
