import { useState } from "react";

interface IState<Data, Error> {
    pending: boolean,
    fulfilled: boolean,
    rejected: boolean
    payload: IPayload<Data, Error>
}

interface IPayload<D, E> {
    data: D | null,
    error: E | null
}

const useApi = <T, I = void, E = unknown>(fetchFn: (input: I) => Promise<T>) => {

    const [state, setState] = useState<IState<T, E>>({
        pending: false,
        rejected: false,
        fulfilled: false,
        payload: {
            data: null,
            error: null
        }
    });
    const request = (input: I): void => {
        setState({
            ...state,
            pending: true,
            fulfilled: false,
            rejected: false,
            payload: {
                ...state.payload,
                data: null,
                error: null
            }
        });
        fetchFn(input)
            .then((response: T) => {
                setState({
                    ...state,
                    pending: false,
                    fulfilled: true,
                    rejected: false,
                    payload: {
                        ...state.payload,
                        data: response,
                        error: null
                    }
                });
            }).catch(e => {
                setState({
                    ...state,
                    pending: false,
                    fulfilled: false,
                    rejected: true,
                    payload: {
                        ...state.payload,
                        data: null,
                        error: e
                    }
                });
            });
    }
    return [state, request] as const;
}

export { useApi }
// return api call state instead.
// payload: data, state -> fulfilled, pending, rejected.