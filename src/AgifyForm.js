export const AgifyForm = (props) => {
    return(
        <div>
            <input type='text' onChange={props.handelUserName}/>
            <button onClick={props.HandelAgifyReq}>Find My Age</button>
        </div>
    )
}