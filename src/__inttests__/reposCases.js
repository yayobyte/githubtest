import { waitForElement, fireEvent } from "@testing-library/react";
import renderApp from "./boostrapper";

const reposCases = () => describe("IntTests: User Cases", () => {
    it("Search for a user on GitHub", async () => {
        const { getByTestId } = renderApp();
        const selectDropdown = await waitForElement(() => getByTestId('select-dropdown'));
        fireEvent.change(selectDropdown, { target: { value: "repositories" }});
        const githubRepoId = await waitForElement(() => getByTestId("repo-id"));

        expect(githubRepoId.innerHTML).toEqual("50138189");
        expect(selectDropdown).toBeDefined();
    });
});

export default reposCases;
