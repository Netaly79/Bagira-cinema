

export const sortArray = (arr, el) => {
    return arr.sort((a,b) => {
        if (a[el]>b[el])
            return 1;
        if (a[el]<b[el])
            return -1;
        return 0; 
    });

}

export const createRowsArray = (arr) => {
    return arr.reduce ((acc,elem)=> {
        if(acc.length===0)
            return [[elem]];

        const hasSomeRow=acc.some(rowArr=>rowArr.some(obj=>obj.row===elem.row));
        if (hasSomeRow){
            const update=acc.map (rowArr=>{
            const hasSomeRow=rowArr.some(obj=>obj.row===elem.row);
            if(hasSomeRow){
                return [...rowArr,elem];
            }
            return rowArr;
        });
    return update;
}
else{
    return[...acc,[elem]];
}
}
,[])};

export const getRandomInt=(min,max) => 
    Math.floor (Math.random()*(max-min))-min;


export const getDate=(date)=>{
    let   months=["января","февраля","марта","апреля", "мая", "июня",
     "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return new Date(date).getDate()+" "+months[new Date(date).getMonth()];
}
export const getTime = (date) => {
    const hour=new Date (date).getHours()<10
        ? "0"+new Date (date).getHours()
        : new Date (date).getHours();
    const minute=new Date (date).getMinutes()<10
        ? "0"+new Date (date).getMinutes()
        : new Date (date).getMinutes();
        return hour+" : "+minute;
}