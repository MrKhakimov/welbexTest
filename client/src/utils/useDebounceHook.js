import {useEffect} from "react";

export const useDebounceHook = (effect, deps) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), 1000)

        return () => clearTimeout(handler);
    }, [...(deps || []), 1000])
}