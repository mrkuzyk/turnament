const members = [
    {
        name: 'Андрій',
        city: 'Київ',
        club: 'Чемпіон',
        age: 14,
        weight: 64,
    },
    {
        name: 'Олег',
        city: 'Київ',
        club: 'Чемпіон',
        age: 14,
        weight: 75,
    },
    {
        name: 'Петро',
        city: 'Київ',
        club: 'Чемпіон',
        age: 14,
        weight: 67,
    },
    {
        name: 'Яромир',
        city: 'Київ',
        club: 'Чемпіон',
        age: 14,
        weight: 50,
    },
    {
        name: 'Вітя',
        city: 'Київ',
        club: 'Чемпіон',
        age: 18,
        weight: 72,
    },
    {
        name: 'Олег',
        city: 'Київ',
        club: 'Чемпіон',
        age: 16,
        weight: 74,
    },
    {
        name: 'Іван',
        city: 'Київ',
        club: 'Чемпіон',
        age: 16,
        weight: 56,
    },
    {
        name: 'Діма',
        city: 'Київ',
        club: 'Чемпіон',
        age: 16,
        weight: 69,
    },
    {
        name: 'Віталік',
        city: 'Київ',
        club: 'Чемпіон',
        age: 18,
        weight: 70,
    },
    {
        name: 'Вітя',
        city: 'Тернопіль',
        club: 'Терен',
        age: 18,
        weight: 71,
    },
    {
        name: 'Назар',
        city: 'Тернопіль',
        club: 'Терен',
        age: 18,
        weight: 76,
    },
    {
        name: 'Толік',
        city: 'Тернопіль',
        club: 'Терен',
        age: 17,
        weight: 69,
    },
    {
        name: 'Микита',
        city: 'Тернопіль',
        club: 'Терен',
        age: 18,
        weight: 74,
    },
    {
        name: 'Олексій',
        city: 'Тернопіль',
        club: 'Терен',
        age: 14,
        weight: 65,
    },
    {
        name: 'Юліан',
        city: 'Тернопіль',
        club: 'Терен',
        age: 14,
        weight: 60,
    },
    {
        name: 'Міша',
        city: 'Тернопіль',
        club: 'Терен',
        age: 15,
        weight: 63,
    },
    {
        name: 'Василь',
        city: 'Львів',
        club: 'Прайд',
        age: 15,
        weight: 67,
    },
    {
        name: 'Олег',
        city: 'Львів',
        club: 'Прайд',
        age: 13,
        weight: 66,
    },
    {
        name: 'Петро',
        city: 'Львів',
        club: 'Прайд',
        age: 14,
        weight: 63,
    },
    {
        name: 'Тарас',
        city: 'Львів',
        club: 'Прайд',
        age: 17,
        weight: 74,
    },
    {
        name: 'Остап',
        city: 'Львів',
        club: 'Прайд',
        age: 17,
        weight: 69,
    },
];

console.log(members);

const randomRival = (members, minAge, maxAge, minWeight, maxWeight) => {
    
    // фільтруємо по віковій категорії
    const fitAge = members.filter(member => member.age >= minAge && member.age <= maxAge);
    
    // фільтруємо по ваговій категорії
    const fitWeight = fitAge.filter(member => member.weight >= minWeight && member.weight <= maxWeight);
    
    const memberName = fitWeight.map(member => member.name);
    return memberName;
}


console.log(randomRival(members, 13, 15, 63, 67));
console.log(randomRival(members, 16, 18, 69, 74));