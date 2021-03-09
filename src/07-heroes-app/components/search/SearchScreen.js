import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom'
import { HeroCard } from '../heores/HeroCard'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    // const heroesfiltrados = heroes;
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [formvalues, handleInputChange] = useForm({
        search: q
    })

    const { search } = formvalues;
    const heroesfiltrados =  useMemo(() => getHeroesByName(q), [ q])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`)
    }

    return (
        <div>
            <h4>Search screen</h4>
            <hr></hr>

            <div className="row">
                <div className="col-5">
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input className="form-control"
                            onChange={handleInputChange}
                            name="search"
                            autoComplete="off"
                            type="text"
                            value={search}
                            placeholder="find heros"></input>
                        <button type="submit" className="btn btn-primary mt-2">Search </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        (q === '') && <div className="alert alert-info">Search a Hero</div>
                    }
                    {
                        (q !== '' && heroesfiltrados.length ===0) && <div className="alert alert-info">there is not a hero with name: {q}</div>
                    }
                    {
                        heroesfiltrados.map(item => <HeroCard key={item.id} {...item}></HeroCard>)
                    }
                </div>
            </div>
            <div className="col-md-6">

            </div>
        </div>
    )
}
