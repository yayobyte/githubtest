import { useSelector } from 'react-redux'
import Store, { RepoData } from "../../types/reducer";

export const useRepoData = () => {
    const  repoData  = useSelector<{github: Store}, Array<RepoData>>(({ github }) => (
        github.repoData
    ));
    return { repoData };
};
