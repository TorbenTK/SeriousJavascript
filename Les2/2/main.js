
var athlete = {};

// Add firstName
/*
Object.defineProperty(athlete, "firstName", {
    value: "Cow",
    enumerable: true, // I dunno lol \__(o.o__/
    configurable: true, // kan van binnenuit worden bewerkt?
    writable: true // kan van buitenaf worden bewerkt?
});

// Add multiple properties (w/o get/set)
Object.defineProperties(athlete, {
    "dayofBirth": {
        value: "17-02-1978"
    },
    "stamina": {}
});*/

// Add multiple properies (get/set)
Object.defineProperties(athlete, {
    "name": {
        value: "Partybot"
    },
    "dayofBirth": {
        set: function () {
            console.log("Reading date or birth.");
            return this.doB;
        },
        get: function (value) {
            // Return functie...but how?
            console.log("It was born! At %s", value)
            this.doB = value;
        },
        enumerable: true,
        configurable: true
    }
});

console.log(athlete.dayofBirth);

// Add Accessor
/*
Object.defineProperty(athlete, "acc_prop", {
    set: function (x) {
        document.write("in property set accessor" + newLine);
        this.newaccpropvalue = x;
    },
    get: function () {
        document.write("in property get accessor" + newLine);
        return this.newaccpropvalue;
    },
    enumerable: true,
    configurable: true
});
*/

// Voor meerdere properties: gebruik defineProperties (meervoud!)

//document.write(athlete.firstName);
//console.log("First name exist: " + ("firstName" in athlete)); // Does it exist?

////////////////////////

/* Simple factory function */
var createAthletes = function (data) {
    var athletes = [];

    [].forEach.call(data, function (val, index, list) {
        var athlete = createAthlete(val);
        athletes.push(athlete);
    });

    return athletes;
}

/* Factory that creates an Athlete */
var createAthlete = function (val){

    var athlete = {};



}





