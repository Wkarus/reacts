import './perfil.css'


const Perfil =  ({endereço, nome }) => {
    return (
        <div>
            <img className="perfil-avatar" src={endereço}/>
            <h3 className="perfil-titulo">{nome}</h3>
        </div>
    )
}

export default Perfil;