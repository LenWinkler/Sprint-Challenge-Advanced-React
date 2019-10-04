import { useLocalStorage } from "./useLocalStorage";

const useInput = (key, initialValue) => {
    const [player, setPlayer] = useLocalStorage(key, initialValue);

    const handleChanges = e => {
        setPlayer(e.target.value);
    };

    return[player, setPlayer, handleChanges];

};

export default useInput;