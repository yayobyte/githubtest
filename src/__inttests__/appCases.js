import { waitForElement } from "@testing-library/react";
import renderApp from "./boostrapper";

const appCases = () => describe("IntTests: App Cases", () => {
    it("Loads the app without crashing", async () => {
        const { getByTestId } = renderApp();
        const searchInput = await waitForElement(() => getByTestId('search-input'))
        expect(searchInput).toBeDefined();
    });
});

export default appCases;
