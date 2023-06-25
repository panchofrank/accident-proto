export default function ButtonBar() {
    return (<div className='row'>
    <button className='btn btn-primary col-sm-1'>Annuler</button>
    <button className='btn btn-primary col-sm-1' disabled>Sauvegarder</button>
    <button className='btn btn-primary col-sm-1' disabled>Envoyer</button>
    
  </div>);
}

