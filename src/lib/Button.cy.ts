import walletConnect from "$components/wallet-connect/WalletConnect.svelte"

it("should mount", () => {
  cy.mount(walletConnect);
  cy.contains("button", "wallet Connect");
});
