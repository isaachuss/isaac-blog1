
function ButtonAlert({ mensagem, children }) {
    return (

        <div>
            <button onClick={() => alert(mensagem)}>{children}</button>

        </div>

    )
}
export default ButtonAlert

