const toggleLoading = (isLoading) =>{
    const loader  = document.getElementById('loader');
    if(!isLoading){
        // do loading
        loader.classList.add('hidden');
    }
    else{
        // stop loading 
        loader.classList.remove('hidden');

    }
}