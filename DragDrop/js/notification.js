function getNotification(){
    if(!("Notification" in window)){
        console.log('Navegador não suporta notificações')
    }else if(Notification.permission === "granted"){
        const notify = new Notification('Olá, bem vindo de volta!');
        console.log('1')
    }else if(Notification.permission !== "denied"){
        Notification.requestPermission(function(permission){
            if(permission === "granted"){
                const notify = new Notification('Olá');
            }
        })
    }
}