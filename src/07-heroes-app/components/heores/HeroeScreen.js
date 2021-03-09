import React from 'react'
import { useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { Redirect } from 'react-router-dom'
export const HeroeScreen = ({history}) => {
    const { heroeId } = useParams();
    const hero = getHeroById(heroeId);
    if (!hero) {
        return <Redirect to="/"></Redirect>
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = !!hero && hero[0] ;
    
    return (
        <div className="row animate__animated animate__backInUp">

            <div className="col-md-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumnail" />
            </div>
            <div className="col-md-8">
                <h1>Hero screen</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Aleter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>first appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Caracters</h5>
                <p>{characters}</p>
                <button onClick={()=> history.length <= 2 ? history.push('/') : history.goBack() } className="btn btn-primary">Return </button>
            </div>
        </div>
    )
}
