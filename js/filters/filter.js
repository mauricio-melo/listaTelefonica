app.filter("capitalizar", function(){
    return (campo) => {
        const reg = campo.split('')[0];
        return campo.replace(reg, reg.toUpperCase());
    }
})