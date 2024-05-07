export function remaningTime(time_togo){
    date_now = new Date();
    time_togo= new Date('2024-06-14');

    time_left = Math.round((time_togo.getTime()-date_now.getTime())/(1000*60*60*24));

    return time_left;
}