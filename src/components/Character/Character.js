import './character.scss'

const Character = ({ name, onClick }) => {
    return (
        <div className="character-card" onClick={ onClick }>
            <div className="character-card__image-wrapper">
                <img alt={ "Image of " + name } className="character-card__image" width="300" height="400" src="https://via.placeholder.com/300x400"></img>
            </div>
            <p className="character-card__character-name">{ name }</p>
        </div>
    );
};

export default Character;