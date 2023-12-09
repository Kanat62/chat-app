




export  const formatBytes = (bytes) => {
    if(!+bytes) return '0 Bytes'

    const k = 1024
    const sizes = ['bytes','kb','mb','gb','tb','pb','eb','zb','yb']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k,i)).toFixed(0))}${sizes[i]}`
}


export  const btnAnimation = (form) => {
    const btnAnimationEl = form.querySelector("[type='submit'] img")
    btnAnimationEl.style = `
        transition: 1s;
        top:-300px;
        right: -300px;  
        width: 35px;
        height: 35px;`
    setTimeout(()=> btnAnimationEl.style = `
        top: 13px; 
        right: 13px;
        width: 27px;
        height: 27px;`,500)
}

export const converter = (seconds) => {
    const d = new Date(seconds ? seconds  * 1000 : Date.now());
    const hours = d.getHours();
    const minutes = d.getMinutes(); 
    return `${hours.toString().length < 2 ? '0' + hours : hours}:${minutes.toString().length < 2 ? '0' + minutes : minutes}`
}
