export function toBase64(file:File){
    const promiseResult=new Promise((resolve,reject)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>resolve(reader.result);
        reader.onerror=(error)=>reject(error);
    })
    return promiseResult;
}