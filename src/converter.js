export default class Converter {

    baseMeter = {
        //  Metric Sys.  
        // Length          
        km: 10**3,              //   Kilometer
        hm: 10**2,              //   Decameter
        dam: 10**1,             //   Hectometer
        m: 10**0,               //  Meter          
        dm: 10**-1,             //   Decimeter
        cm: 10**-2,             //    Centimeter
        mm: 10**-3,             //    Millimeter
        // Weight
        kg: 10**3,              //   Kilogram
        hg: 10**2,              //   Hectogram
        dag: 10**1,             //   Decagram
        g: 10**0,               //  Gram          
        dg: 10**-1,             //   Decigram
        cg: 10**-2,             //    Centigram
        mg: 10**-3,             //    Milligram
        // Volume   
        kl: 10**3,              //  Kiloliter
        hl: 10**2,              //  Hectoliter
        dal: 10**1,             //  Decaliter
        l: 10**0,               //  Liter          
        dl: 10**-1,             //  Deciliter
        cl: 10**-2,             //  Centiliter
        ml: 10**-3,             //  Milliliter
        // US Sys       
        // Length
        mile: 1609.344,         //  Mile
        yd: .9144,              //  Yard                                    
        ft: .3048,              //  Feet                  
        in: .0254,              //  Inch             
        // Weight       
        pd: 453.59237,          //  Pound                  
        oz: 28.349523125,       //  Ounce                       
        // Volume
        qt: .946352946,         //  Quatre                 
        pt: .473176,            //  Pint                                    
        cp: .2365882365,        //  Cup                    
        flOz: .0254,            //  Fluid Ounce                                    
    };      

    meterToUs = {               //  From Meter / Gram / Liter To every US unit. 
        mile: .0006213712,      //  Mile
        yd: 1.0936132983,       //  Yard
        ft: 3.280839895,        //  Feet
        in: 39.37007874,        //  Inch      
        pound: .0022046226,     //  Pound
        oz: .0352739619,        //  Ounce 
        qt: 1.0566887074,       //  Quatre
        pt: 2.1133764189,       //  Pint
        cp: 4.2267548297,       //  Cup
        flOz: 33.814038638,     //  Fluid Ounce
    };

    baseDay = {
        ns: 864e11,              //  Nanosecond
        μs: 864e8,               //  Microsecond
        ms: 864e5,               //  Millisecond
        s: 86400,                //  Second
        min: 1440,               //  Minute
        h: 24,                   //  Hour
        d: 1,                    //  Day
        week: 0.1428571429,      //  Week
        m: .0328767123,          //  Month
        y: .0027378508,          //  Year
        decade: 2737851e-4,      //  Decade
        century: 2737851e-5,     //  Century
        millennium: 2737851e-6,  //  Millennium
    }
    dayToTime = {
        ns: 1.157407407e-14,      //  Nanosecond
        μs: 1.157407407e-11,      //  Microsecond
        ms: 1.157407407e-8,       //  Millisecond
        s: 115741e-5,             //  Second
        min: 6944444e4,           //  Minute
        h: .0416666667,           //  Hour
        d: 1,                     //  Day
        week: 7,                  //  Week
        m: 30.416666667,          //  Month
        y: 365.25,                //  Year
        decade: 3652.5,           //  Decade
        century: 36525,           //  Century
        millennium: 365250,       //  Millennium
    }

    baseByte = {
        bit: .125,
        b : 1,
        kb: 1024,
        mb: 1048576,
        gb: 1073741824,
        tb: 1099511627776,
        pb: 1125899906842580,
    }
    byteToDataStorage = {
        bit: 8,
        b : 1,
        kb: 9.765625e-4,
        mb: 9.536743164e-7,
        gb: 9.313225746e-10,
        tb: 9.094947017e-13,
        pb: 8.881784197e-16,
    }

    temperatureFormulas = {
        c: n => [n, (n * 1.8) + 32, (n + 273.15)],             // Celsius.
        f: n => [(n - 32) * 1.8, n, (n + 459.67) * (5 / 9)],   // Fahrenheit.    
        k: n => [(n - 273.15), (n - 273.15) * (9 / 5) + 32, n],// Kelvin.
    }

    angleFormulas = {
        deg: n => [n, n * 0.0174532925, n * 1.1111111111],
        rad: n => [n * 57.295779513, n, n * 63.661977237],
        gon: n => [n * 0.9, n  * 0.01571, n],
    }

    baseKj = {
        "c": 4.1868,
        hph: 2684.519717,
        jh: 0.001,
        kjh: 1,
        wh: 3.6,
        kwh: 3600,
        eV: 1.60217733e-22,
    }
    kjToEnergy = {
        "c": 0.2388458966,
        hph: 0.3776727e-3,
        jh: 1000,
        kjh: 1,
        wh: 0.2777777778,
        kwh: 0.2777778e-3,
        eV: 6.241506363e+21,
    }

    convertToMetric = (n, u) => this.baseMeter[u] * n;
    metricSystem (n, u) {
        // Meter / Gram / Liter
        // Square Meter = return**2
        // Cubic Meter = return**3
        const bM = this.convertToMetric(n, u);
        const arr = [];
        for (let i = 3; i > -4; i--) arr.push(bM*10**i);
        return arr.reverse();
    }

    UsSystem (n, u, t) {
        // Mile / Yard / Foot / Inch
        // Square U = return**2 (length)
        // Cubic  U = return**3 (length)
        const bM = this.convertToMetric(n, u);
        const arr = [];
        for (const u in this.meterToUs) arr.push(this.meterToUs[u] * bM)
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

    convertToDay = (n, u) => this.baseDay[u] * n;
    time (n, u) {
        // Nanosecond microsecond millisecond second minute hour day week month year decade century millennium
        const bT = this.convertToDay(n, u);
        const arr = [];
        for (const u in this.dayToTime) arr.push(this.dayToTime[u] * bT)
        return arr;
    }

    angle = (n, u) => {
        if (!u) return [NaN, NaN, NaN]
        // Degree Radian Grad
        return this.angleFormulas[u](n); 
    }

    convertToByte = (n, u) => this.baseByte[u] * n;
    dataStorage = (n, u) => {
        // Bit Byte Kilobyte Megabyte Gigabyte Terabyte Petabyte
        const bB = this.convertToByte(n, u);
        const arr = [];
        for (const u in this.byteToDataStorage) arr.push(this.byteToDataStorage[u] * bB)
        return arr;
    }

    convertToKj = (n, u) => this.baseKj[u] * n;
    energy = (n, u) => {
        // 
        const bkj = this.convertToKj(n, u);
        const arr = [];
        for (const u in this.kjToEnergy) arr.push(this.kjToEnergy[u] * bkj)
        return arr;
    }

    // Get Short Label.
    getLengthMetric = () => ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    getWeightMetric = () => ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    getVolumeMetric = () => ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    getLengthUs = () => ['mile', 'yd', 'ft', 'in'];
    getWeightUs = () => ['pd', 'oz'];
    getVolumeUs = () => ['qt', 'pt', 'cp', 'flOz'];
    getTemperature = () => ['c', 'f', 'k'];
    getTime = () => ['ns', 'μs', 'ms', 's', 'min', 'h', 'd', 'week', 'm', 'y', 'decade', 'century', 'millennium']
    getAngle = () => ['deg', 'rad', 'gon'];
    getDataStorage = () => ['bit', 'b', 'kb', 'mb', 'gb', 'tb', 'pb'];
    getEnergy = () => ['c', 'hph', 'jh', 'kjh', 'wh', 'kwh', 'eV'];
    // Get Full Label
    getLengthMetricFull = () => ['kilometer', 'hectometer', 'decameter', 'meter', 'decimeter', 'centimeter', 'millimeter'];
    getWeightMetricFull = () => ['kilogram', 'hectogram', 'decagram', 'gram', 'decigram', 'centigram', 'milligram'];
    getVolumeMetricFull = () => ['kiloliter', 'hectoliter', 'decaliter', 'liter', 'deciliter', 'centiliter', 'milliliter'];
    getLengthUsFull = () => ['mile', 'yard', 'foot', 'inch'];
    getWeightUsFull = () => ['pound', 'ounce'];
    getVolumeUsFull = () => ['quatre', 'pint', 'cup', 'fluid ounce'];
    getTemperatureFull = () => ['celsius', 'fahrenheit', 'kelvin'];
    getTimeFull = () => ['Nanosecond', 'microsecond', 'millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century', 'millennium']
    getAngleFull = () => ['degree', 'radian', 'grad'];
    getDataStorageFull = () => ['bit', 'byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte', 'petabyte']
    getEnergyFull = () => ['calorie', 'horsepower~hour', 'joule~hour', 'kilojoule~hour', 'watt~hour', 'kilowatt~hour', 'electronVolt'];
}


// Bugs:
// Fix Time.
// Test Energy.