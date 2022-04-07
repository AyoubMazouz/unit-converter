class Converter {

    baseM = {
        //  Metric Sys.  
        // Length          
        km: 10**3,          //   Kilometer
        hm: 10**2,          //   Decameter
        dam: 10**1,          //   Hectometer
        m: 10**0,           //  Meter          
        dm: 10**-1,         //   Decimeter
        cm: 10**-2,         //    Centimeter
        mm: 10**-3,         //    Millimeter
        // Weight
        kg: 10**3,        //   Kilogram
        hg: 10**2,        //   Hectogram
        dag: 10**1,       //   Decagram
        g: 10**0,         //  Gram          
        dg: 10**-1,       //   Decigram
        cg: 10**-2,       //    Centigram
        mg: 10**-3,       //    Milligram
        // Volume
        kl: 10**3,        //  Kiloliter
        hl: 10**2,        //  Hectoliter
        dal: 10**1,       //  Decaliter
        l: 10**0,         //  Liter          
        dl: 10**-1,       //  Deciliter
        cl: 10**-2,       //  Centiliter
        ml: 10**-3,       //  Milliliter
        // US Sys
        // Length
        mile: 1609.344,     //  Mile
        yd: 0.9144,         //  Yard                                    
        ft: 0.3048,         //  Feet                  
        in: 0.0254,         //  Inch             
        // Weight
        pd: 453.59237,      //  Pound                  
        oz: 28.349523125,   //  Ounce                       
        // Volume
        qt: 0.946352946,    //  Quatre                 
        pt: 0.473176,       //  Pint                                    
        cp: 0.2365882365,   //  Cup                    
        flOz: 0.0254,       //  Fluid Ounce                                    
    };

    mToUs = {               //  From Meter / Gram / Liter To every US unit. 
        mile: 0.0006213712, //  Mile
        yd: 1.0936132983,   //  Yard
        ft: 3.280839895,    //  Feet
        in: 39.37007874,    //  Inch      
        pound: 0.0022046226,//  Pound
        oz: 0.0352739619,   //  Ounce 
        qt: 1.0566887074,   //  Quatre
        pt: 2.1133764189,   //  Pint
        cp: 4.2267548297,   //  Cup
        flOz: 33.814038638, //  Fluid Ounce
    };

    baseD = {
        ns: 864e11,                 //  Nanosecond
        μs: 864e8,                  //  Microsecond
        ms: 864e5,                  //  Millisecond
        s: 86400,                   //  Second
        min: 1440,                  //  Minute
        h: 24,                      //  Hour
        d: 1,                       //  Day
        week: 0.1428571429,         //  Week
        m: 0.0328767123,            //  Month
        y: 0.0027378508,            //  Year
        decade: 0.2737851e-3,       //  Decade
        century: 0.2737851e-4,      //  Century
        millennium: 0.2737851e-5,   //  Millennium
    }

    dToTime = {
        ns: 1.157407407e-14,        //  Nanosecond
        μs: 1.157407407e-11,        //  Microsecond
        ms: 1.157407407E-8,         //  Millisecond
        s: 0.115741e-4,             //  Second
        min: 0.6944444e3,           //  Minute
        h: 0.0416666667,            //  Hour
        d: 1,                       //  Day
        week: 7,                    //  Week
        m: 30.416666667,            //  Month
        y: 365.25,                  //  Year
        decade: 3652.5,             //  Decade
        century: 36525,             //  Century
        millennium: 365250,         //  Millennium
    }

    temperatureFormulas = {
        c: n => [n, (n * 1.8) + 32, (n + 273.15)],             // Celsius.
        f: n => [(n - 32) * 1.8, n, (n + 459.67) * (5 / 9)],   // Fahrenheit.    
        k: n => [(n - 273.15), (n - 273.15) * (9 / 5) + 32, n],// Kelvin.
    }

    convertToMetric = (n, u) => this.baseM[u] * n;
    metricSystem (n, u) {

        // Meter / Gram / Liter
        // Square Meter = return**2
        // Cubic Meter = return**3

        const bM = this.convertToMetric(n, u);

        const arr = [];

        for (let i = 3; i > -4; i--) arr.push(bM * 10 ** i);

        return arr.reverse();
    }

    UsSystem (n, u, t) {

        // Mile / Yard / Foot / Inch
        // Square U = return**2 (length)
        // Cubic  U = return**3 (length)

        const bM = this.convertToMetric(n, u);

        const arr = [];

        for (const u in this.mToUs) arr.push(this.mToUs[u] * bM)

        return {
            'l': arr.slice(0, 4),
            'w': arr.slice(4, 6),
            'v': arr.slice(6, 10)
        }[t]
    }

    temperature(n, u) {

        if (!u) return [NaN, NaN, NaN]

        // Celsius / Fahrenheit / Kelvin

        return this.temperatureFormulas[u](n);
    }

    convertToDays = (u, n) => this.baseD[u] * n;
    time (n, u) {

        // Nanosecond microsecond millisecond second minute hour day week month year decade century millennium

        const bT = this.convertToDays(u, n);

        const arr = [];

        for (const u in this.dToTime) arr.push(this.dToTime[u] * bT)

        return arr;
    }

    getLengthMetric = () => ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    getWeightMetric = () => ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    getVolumeMetric = () => ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    getLengthUs = () => ['mile', 'yd', 'ft', 'in'];
    getWeightUs = () => ['pd', 'oz'];
    getVolumeUs = () => ['qt', 'pt', 'cp', 'flOz'];

    getTemperature = () => ['c', 'f', 'k'];
    getTime = () => ['ns', 'μs', 'ms', 's', 'min', 'h', 'd', 'week', 'm', 'y', 'decade', 'century', 'millennium']

    getLengthMetricFull = () => ['kilometer', 'hectometer', 'decameter', 'meter', 'decimeter', 'centimeter', 'millimeter'];
    getWeightMetricFull = () => ['kilogram', 'hectogram', 'decagram', 'gram', 'decigram', 'centigram', 'milligram'];
    getVolumeMetricFull = () => ['kiloliter', 'hectoliter', 'decaliter', 'liter', 'deciliter', 'centiliter', 'milliliter'];
    getLengthUsFull = () => ['mile', 'yard', 'foot', 'inch'];
    getWeightUsFull = () => ['pound', 'ounce'];
    getVolumeUsFull = () => ['quatre', 'pint', 'cup', 'fluid ounce'];

    getTemperatureFull = () => ['celsius', 'fahrenheit', 'kelvin'];
    getTimeFull = () => ['Nanosecond', 'microsecond', 'millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century', 'millennium']

}

export default Converter;