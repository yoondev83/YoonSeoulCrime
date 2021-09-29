const legendItems = [
    {
        title:  "5,500 +",
        color: "#741f1f",
        isFor: (totalIncidents) => totalIncidents >= 5500,
        textColor: "white"
    },
    {
        title:  "4,500 - 5,499",
        color: "#9c2929",
        isFor: (totalIncidents) => totalIncidents >= 4500 && totalIncidents < 5500,
        textColor: "white"
    },
    {
        title:  "3,500 - 4,499",
        color: "#c57f7f",
        isFor: (totalIncidents) => totalIncidents >= 3500 && totalIncidents < 4500,
    },
    {
        title:  "2,500 - 3,499",
        color: "#d8aaaa",
        isFor: (totalIncidents) => totalIncidents >= 2500 && totalIncidents < 3500,
    },
    {
        title:  "0 - 2,499",
        color: "#ebd4d4",
        isFor: (totalIncidents) => totalIncidents > 0 && totalIncidents < 2500,
    },
];

export default legendItems;


/*
    #741f1f
    #9c2929
    #c57f7f
    #d8aaaa
    #ebd4d4
    $ffffff

*/