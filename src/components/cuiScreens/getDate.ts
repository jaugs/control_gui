
const formatDate = (userDate:any) => {
    userDate = new Date(userDate);
    let y = userDate.getFullYear().toString();
    let m = userDate.getMonth() + 1;
    m= (('0' + m.toString()).slice(-2))
    let d =(('0' + userDate.getDate().toString()).slice(-2));
    let result = `${y}-${m}-${d}`
    return result
  }

export {formatDate}