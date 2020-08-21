import { waitForElement, fireEvent } from "@testing-library/react";
import renderApp from "./boostrapper";

const userCases = () => describe("IntTests: User Cases", () => {
    it("Search for a user on GitHub", async () => {
        const { getByTestId } = renderApp();
        const searchInput = await waitForElement(() => getByTestId('search-input'));
        fireEvent.change(searchInput, { target: { value: "yayobyte" }});
        const githubCardId = await waitForElement(() => getByTestId("user-id"));

        expect(githubCardId.innerHTML).toEqual("10549668");
        expect(searchInput).toBeDefined();
    });
});

export default userCases;
