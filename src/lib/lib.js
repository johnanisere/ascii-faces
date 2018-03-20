import {getFacesEndpoint} from './ajax'

//time-time (should be in this "Sat Mar 03 2018 21:01:27 GMT+0100 (WAT)" format) to check against current time
export const timepassed=(time)=>{
    const _toi=new Date(time).getTime(),_ct=new Date().getTime()
    const _dif = _ct-_toi
    if(_dif!==0){
        const _s = _dif/1000
        const _m = _s/60
        const _h = _m/60
        const _d = _h/24

        if(_d>7){
            const _day = new Date(time).getDate(),
                  _month = new Date(time).getMonth()+1,
                  _year = new Date(time).getFullYear()

            return parseInt(_day,10)+"/ "+parseInt(_month,10)+"/ "+parseInt(_year,10)
        }
        if(_d>=1){
            if(parseInt(_d,10)>1){
                return parseInt(_d,10)+" days ago"
            }else{
            return "One day ago"
            }
        }
        if(_h>=1){
            if(parseInt(_h,10)>1){
                return parseInt(_h,10)+" hours ago"
            }else{
            return "an hour ago"
            } 
        }
        if(_m>=1){
            if(parseInt(_m,10)>1){
                return parseInt(_m,10)+" minutes ago"
            }else{
            return "a minute ago"
            }
        }
    }
    return "Just now"
}

//method for fetching ascii faces
export const getResult=(page)=>
    fetch(getFacesEndpoint(page))
    .then((res)=>res.json())


//checks index to make sure adverts are not repeated
let UsedIndex=[]
export const indexVerifier=()=>{
       const newIndex=Math.floor(Math.random()*1000);
        if(UsedIndex.includes(newIndex)){
            return indexVerifier()
        }else{
            UsedIndex.push(newIndex)
            return newIndex
        }
}

