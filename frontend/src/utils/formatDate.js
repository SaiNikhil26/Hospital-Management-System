export const formatDate = (date,config) =>{
    const defaultoptions = {day:'numeric',month:'short',year:'numeric'}
    const options = config ? config:defaultoptions

    return new Date(date).toLocaleDateString('en-GB',options);
}