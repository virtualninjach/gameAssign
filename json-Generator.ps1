function get-RandomDate()
{

    #$dateMin = get-date -year 1980 -month 1 -day 1
    $dateMin = get-date -Year 2017 -Month 1 -Day 31
    $dateMin
    $dateMax = get-date -year 2018 -month 12 -day 31 
    $dateMax

    $randomDate =  new-object datetime (Get-Random -min $dateMin.ticks -max $dateMax.ticks)
    return $randomDate
}
#Get-Date -Format 'm/dd/yyyy' | Get-Random

$rd = get-RandomDate
$rd
