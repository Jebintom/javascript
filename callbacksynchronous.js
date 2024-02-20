function longtask(milltimesecond)
{
    dt =new Date()
    while((new Date-dt)<=milltimesecond)
    {

    }
}
console.log('started')     //first task is started and after it end the next task begins
longtask(2000)
console.log('end')

console.log('started')
longtask(2000)
console.log('end')

console.log('started')
longtask(2000)
console.log('end')
