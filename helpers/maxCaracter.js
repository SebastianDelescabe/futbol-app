export function maxCaracter(text,number){

    const textToStrnig = String(text);
    
    if(textToStrnig.length > number){
       const newText = `${textToStrnig.slice(0,number)}...`
       return newText
    }else{
        return textToStrnig
    }

}