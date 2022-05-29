export default class Converter {

    // Get Short Label.
    lengthMetricShort   = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    weightMetricShort   = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    volumeMetricShort   = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    lengthUsShort       = ['mile', 'yd', 'ft', 'in'];
    weightUsShort       = ['pd', 'oz'];
    volumeUsShort       = ['qt', 'pt', 'cp', 'flOz'];
    temperatureShort    = ['c', 'f', 'k'];
    timeShort           = ['millennium', 'century', 'decade', 'y', 'm', 'week', 'd', 'h', 'min', 's', 'ms', 'μs', 'ns'];
    angleShort          = ['deg', 'rad', 'gon'];
    dataStorageShort    = ['bit', 'b', 'kb', 'mb', 'gb', 'tb', 'pb'];
    energyShort         = ['c', 'hp', 'j', 'kj', 'wh', 'kwh', 'eV'];
    // Get Full Label
    lengthMetricFull    = ['kilometer', 'hectometer', 'decameter', 'meter', 'decimeter', 'centimeter', 'millimeter'];
    weightMetricFull    = ['kilogram', 'hectogram', 'decagram', 'gram', 'decigram', 'centigram', 'milligram'];
    volumeMetricFull    = ['kiloliter', 'hectoliter', 'decaliter', 'liter', 'deciliter', 'centiliter', 'milliliter'];
    lengthUsFull        = ['mile', 'yard', 'foot', 'inch'];
    weightUsFull        = ['pound', 'ounce'];
    volumeUsFull        = ['quatre', 'pint', 'cup', 'fluid ounce'];
    temperatureFull     = ['celsius', 'fahrenheit', 'kelvin'];
    timeFull            = ['millennium', 'century', 'decade', 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'Nanosecond'];
    angleFull           = ['degree', 'radian', 'grad'];
    dataStorageFull     = ['bit', 'byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte', 'petabyte']
    energyFull          = ['calorie', 'horsepower', 'joule', 'kilojoule', 'watt~hour', 'kilowatt~hour', 'electronVolt'];

    // formulas.
    baseMeter = {
        //  Metric Sys.  
        // Length.      
        km: 10**3,                  //  Kilometer.
        hm: 10**2,                  //  Decameter.
        dam: 10**1,                 //  Hectometer.
        m: 10**0,                   //  Meter.     
        dm: 10**-1,                 //  Decimeter.
        cm: 10**-2,                 //  Centimeter.
        mm: 10**-3,                 //  Millimeter.
        // Weight.
        kg: 10**3,                  //  Kilogram.
        hg: 10**2,                  //  Hectogram.
        dag: 10**1,                 //  Decagram.
        g: 10**0,                   //  Gram.    
        dg: 10**-1,                 //  Decigram.
        cg: 10**-2,                 //  Centigram.
        mg: 10**-3,                 //  Milligram.
        // Volume.    
        kl: 10**3,                  //  Kiloliter.
        hl: 10**2,                  //  Hectoliter.
        dal: 10**1,                 //  Decaliter.
        l: 10**0,                   //  Liter.     
        dl: 10**-1,                 //  Deciliter.
        cl: 10**-2,                 //  Centiliter.
        ml: 10**-3,                 //  Milliliter.
        // US Sys.       
        // Length.
        mile: 1609.344,             //  Mile.
        yd: 0.9144,                 //  Yard.                           
        ft: 0.3048,                 //  Feet.         
        in: 0.0254,                 //  Inch.    
        // Weight.
        pd: 453.59237,              //  Pound.          
        oz: 28.349523125,           //  Ounce.               
        // Volume. 
        qt: 0.946352946,            //  Quatre.
        pt: 0.473176,               //  Pint.
        cp: 0.2365882365,           //  Cup.
        flOz: 0.0254,               //  Fluid Ounce.
    };      

    meterToUs = {                   //  From Meter / Gram / Liter To every US unit. 
        mile: 0.0006213712,         //  Mile.
        yd: 1.0936132983,           //  Yard.
        ft: 3.280839895,            //  Feet.
        in: 39.37007874,            //  Inch.
        pound: 0.0022046226,        //  Pound.
        oz: 0.0352739619,           //  Ounce .
        qt: 1.0566887074,           //  Quatre.
        pt: 2.1133764189,           //  Pint.
        cp: 4.2267548297,           //  Cup.
        flOz: 33.814038638,         //  Fluid Ounce.
    };

    dayToTime = {
        millennium: 0.2737851e-5,   //  Millennium.
        century: 0.2737851e-4,      //  Century.
        decade: 0.2737851e-3,       //  Decade.
        y: 0.0027378508,            //  Year.
        m: 0.0328767123,            //  Month.
        week: 0.1428571429,         //  Week.
        d: 1,                       //  Day.
        h: 24,                      //  Hour.
        min: 1440,                  //  Minute.
        s: 86400,                   //  Second.
        ms: 864e+5,                 //  Millisecond.
        μs: 864e+8,                 //  Microsecond.
        ns: 864e+11,                //  Nanosecond.
    }
    baseDay = {
        millennium: 365250,         //  Millennium.
        century: 36525,             //  Century.
        decade: 3652.5,             //  Decade.
        y: 365.25,                  //  Year.
        m: 30.416666667,            //  Month.
        week: 7,                    //  Week.
        d: 1,                       //  Day.
        h: 0.0416666667,            //  Hour.
        min: 0.6944444e-3,          //  Minute.
        s: 0.115741e-4,             //  Second.
        ms: 1.157407407e-8,         //  Millisecond.
        μs: 1.157407407e-11,        //  Microsecond.
        ns: 1.157407407e-14,        //  Nanosecond.
    }

    baseByte = {
        bit: .125,                  // Bit.   
        b : 1,                      // Byte.
        kb: 1024,                   // Kilobyte.
        mb: 1048576,                // Megabyte.
        gb: 1073741824,             // Gigabyte.
        tb: 1099511627776,          // Terabyte.
        pb: 1125899906842580,       // Petabyte.
    }
    byteToDataStorage = {
        bit: 8,                     // Bit.   
        b : 1,                      // Byte.
        kb: 9.765625e-4,            // Kilobyte.
        mb: 9.536743164e-7,         // Megabyte.
        gb: 9.313225746e-10,        // Gigabyte.
        tb: 9.094947017e-13,        // Terabyte.
        pb: 8.881784197e-16,        // Petabyte.
    }

    temperatureFormulas = {
        c: n => [n, (n * 1.8) + 32, (n + 273.15)],             // Celsius.
        f: n => [(n - 32) * 1.8, n, (n + 459.67) * (5 / 9)],   // Fahrenheit.    
        k: n => [(n - 273.15), (n - 273.15) * (9 / 5) + 32, n],// Kelvin.
    }

    angleFormulas = {
        deg: n => [n, n * 0.0174532925, n * 1.1111111111],      // Degree.
        rad: n => [n * 57.295779513, n, n * 63.661977237],      // Radian.
        gon: n => [n * 0.9, n  * 0.01571, n],                   // Grad.
    }

    baseKj = {
        "c": 4.1868,                // Calorie.   
        hp: 2684.519717,            // Horsepower.
        j: 0.001,                   // joule.
        kj: 1,                      // kilojoule.
        wh: 3.6,                    // Watt per hour.
        kwh: 3600,                  // Kilowatt per hour.
        eV: 1.60217733e-22,         // electronVolt.
    }
    kjToEnergy = {
        "c": 0.2388458966,          // Calorie.   
        hp: 0.3776727e-3,           // Horsepower.
        j: 1000,                    // joule.
        kj: 1,                      // kilojoule.
        wh: 0.2777777778,           // Watt per hour.
        kwh: 0.2777778e-3,          // Kilowatt per hour.
        eV: 6.241506363e+21,        // electronVolt.
    }

    convertToMetric = (n, u) => this.baseMeter[u] * n;
    metricSystem (num, unit) {
        // Meter / Gram / Liter
        // Square Meter = return**2
        // Cubic Meter = return**3
        const arr = [];
        for (let i = 3; i > -4; i--) {
            arr.push(this.baseMeter[unit]*num * 10**i);
        }
        return arr.reverse();
    }

    UsSystem (num, unit, variant) {
        // Mile / Yard / Foot / Inch
        // Square U = return**2 (length)
        // Cubic  U = return**3 (length)
        const bM = this.convertToMetric(num, unit);
        const arr = [];
        for (const u in this.meterToUs) arr.push(this.meterToUs[u] * bM)
        return {
            'l': arr.slice(0, 4),
            'w': arr.slice(4, 6),
            'v': arr.slice(6, 10)
        }[variant]
    }

    temperature (num, unit) {
        if (!unit) return [NaN, NaN, NaN]
        // Celsius / Fahrenheit / Kelvin
        return this.temperatureFormulas[unit](num);
    }

    angle (num, unit) {
        if (!unit) return [NaN, NaN, NaN]
        // Degree Radian Grad
        return this.angleFormulas[unit](num); 
    }

    time (num, unit) {
        // Nanosecond microsecond millisecond second minute hour day week month year decade century millennium
        const arr = [];
        for (const u in this.dayToTime) {
            arr.push(this.dayToTime[u] * this.baseDay[unit] * num)
        }
        return arr;
    }

    dataStorage (num, unit) {
        // Bit Byte Kilobyte Megabyte Gigabyte Terabyte Petabyte
        const arr = [];
        for (const u in this.byteToDataStorage) {
            arr.push(this.byteToDataStorage[u] * this.baseByte[unit] * num)
        }
        return arr;
    }

    energy (num, unit) {
        // Calorie Horsepower joule kilojoule (Watt per hour) (Kilowatt per hour) electronVolt
        const arr = [];
        for (const u in this.kjToEnergy) {
            arr.push(this.kjToEnergy[u] * this.baseKj[unit] * num)
        }
        return arr;
    }

}