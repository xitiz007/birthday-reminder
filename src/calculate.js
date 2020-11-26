export const calculateAge = (birthDate) => 
{
    const [current_month, current_day, current_year] = new Date().toLocaleDateString().split('/');
    const [birth_month, birth_day, birth_year] = birthDate.split('/');
    let age = current_year - birth_year;
    if(age > 0 && birth_month > current_month || birth_month === current_month && birth_day > current_day)
    {
        age -= 1;
    }
    return age;
}

export const formatDate = (birthDate) =>
{
    let [birth_month, birth_day, birth_year] = birthDate.split('/');
    birth_month = parseInt(birth_month);
    birth_day = parseInt(birth_day);
    birth_year = parseInt(birth_year);
    const date = new Date(birth_year, birth_month - 1, birth_day);
    const month_name = date.toLocaleString('default', {month: 'long'});
    return `${birth_day} ${month_name}, ${birth_year}`;
}

export const isBirthDayToday = (birthDate) =>
{
    const [current_month, current_day, current_year] = new Date().toLocaleDateString().split('/');
    const [birth_month, birth_day, birth_year] = birthDate.split('/');
    return current_year !== birth_year && current_day === birth_day && current_month === birth_month;
}