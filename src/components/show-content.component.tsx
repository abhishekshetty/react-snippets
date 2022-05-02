import { useApi } from "../hooks/useApi";
import { createResource } from "../services/service";

interface IData {
    content: string;
}

const ShowContent = () => {
    const [state, request] = useApi<void>(createResource);
    const onClick = () => {
        request();
    }
    return (<>
        <h4>State: </h4> {JSON.stringify(state)}
        <br />
        <button onClick={() => onClick()}>Click Me To update</button>
    </>);
}

export { ShowContent }