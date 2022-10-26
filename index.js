// code your solution here
function superbowlWin(array)
{
    if(array.find((val) => val.result === 'W'))
    {
        return array.find((val) => val.result === 'W').year
    }
}
