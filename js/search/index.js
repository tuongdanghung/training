const defaultArray = [
    {
        "IdCurrent": "hung",
        "IdNew": 589
    },
    {
        "IdCurrent": "hoa",
        "IdNew": 6754
    },
    {
        "IdCurrent": "van",
        "IdNew": 6754
    },
    {
        "IdCurrent": "lpx",
        "IdNew": 586
    }
];

const searchArray = (value) => {
    return defaultArray.filter(item => {
        const lowercaseIdCurrent = item.IdCurrent.toLowerCase();
        const lowercaseValue = value.toLowerCase();
        return lowercaseIdCurrent.includes(lowercaseValue);
    });
};

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

searchInput.addEventListener('input', (event) => {
    const value = event.target.value;
    resultsList.innerHTML = '';
    if (value.length > 0) {
        const filteredData = searchArray(value);
        if (filteredData.length > 0) {
            filteredData.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.IdCurrent;
                resultsList.appendChild(listItem);
            });
            resultsList.style.display = 'block';
        }
    } else {
        resultsList.style.display = 'none';
    }

});