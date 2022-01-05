import react from 'react'
import logo from '../components/Github_logo.acf6d4da.svg'
import image from '../components/Github_write.1d28a75f.svg'
import icon from '../components/search_icon.4fa6c507.svg'


function principal() {
    return (
        <>
<div id="container">
    <img src={logo} alt="imagen" />
</div>

<div id="container-flex"> 
    <img src={image} alt="imagen" />
</div>

<div id="container-flex"> 
    <strong>SEARCH</strong>
</div>

<form>
    <label className="text-input">
        <input id="input-search" placeholder="Enter user name"/>
    </label>
</form>

<div className='btn mt-5' id="botom-search">
    <strong>Search</strong>
    <img id='icon' src={icon} />
</div>
        </>
    )
}

export default principal;