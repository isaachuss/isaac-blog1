
function ButtonAlert( {alerta, mensagem}  ) {
    return (

        <div>
            <button onClick={() => alert(mensagem)}>{alerta}</button>

        </div>

    )
}
export default ButtonAlert

