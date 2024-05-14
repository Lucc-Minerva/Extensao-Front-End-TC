// isso é um componente
function InputComLabel({idString, textoLabel, children}){
    return <>
        <label htmlFor={idString}>{textoLabel} </label>
        { children }
        <input type="text" id={idString} name={idString} />
        <br />
    </>
}


export default InputComLabel

