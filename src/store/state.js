let defaultCity = '上海'
try {
    if(localStorage.city) {
        defaultCity = localStorage.city
    }
}catch(e){}

export default { 
    city: localStorage.city || '上海',
    bannerHeight: 1,
}