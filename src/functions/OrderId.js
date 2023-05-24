module.exports = (order, objectWithId) =>{
    const idOrdened = objectWithId.sort((a, b)=>{
        if(order === 'dsc'){
            return a.id < b.id ? 1 : -1;
        }else{

            return a.id > b.id ? 1 : -1;
        }

    })

    return idOrdened
}