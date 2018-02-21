const FootballTeam = {
    name: 'Juventus', nationality: 'Italy'
};
function PrintOut(FootballTeam){
for (var propertyKey in FootballTeam) {
    console.log(propertyKey + " : " + FootballTeam[propertyKey]);
    };
};

PrintOut(FootballTeam);
