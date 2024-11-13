function newWindow(){
    let url = "https://www.fb.com";
    let windowOp = window.open(url,"",'width = 500&height=500');
    setTimeout(()=>{
        windowOp.close();
    },5000);
}