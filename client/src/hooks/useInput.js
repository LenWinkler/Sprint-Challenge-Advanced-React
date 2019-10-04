import useLocalStorage  from "./useLocalStorage";

const useInput = () => {
    const [player, setPlayer] = useLocalStorage('player', '');

    const handleChanges = e => {
        setPlayer(e.target.value);
    };

    return[player, setPlayer, handleChanges];

};

export default useInput;