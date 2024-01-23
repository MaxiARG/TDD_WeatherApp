const metodoAsincronico = (valor : number) => {
    return new Promise((resolve, reject) => {
        if(valor>1)
            return resolve(1);
        return reject(2);
    })
}

export default metodoAsincronico;