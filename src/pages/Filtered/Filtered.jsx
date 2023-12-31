import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import PokeCardList from '../../components/PokeCardList/PokeCardList';
import usePokemonsByType from '../../hooks/usePokemonByType';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Header from "../../components/Header/Header";
import { Player } from "../../components/Player/Player";
import Pagination from "../../components/Pagination/Pagination";

const Filtered = () => {
  const { type } = useParams();

  const { loading, pokemons } = usePokemonsByType(type);

  return (
    <>
      <Header />
        <Player />
        <Pagination />

        {loading ? (
          <Loading />
        ) : (
          (pokemons && <PokeCardList pokemons={pokemons} />) || <ErrorMsg />
        )}
    </>
  );
};

export default Filtered;
