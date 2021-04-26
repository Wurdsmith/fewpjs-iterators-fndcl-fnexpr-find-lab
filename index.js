const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
] 

function superbowlWin(array){
    let record = array.find(s => {return s.result === "W"})
    return !!record ? record.year : undefined
}