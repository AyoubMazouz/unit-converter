class Converter {

    baseM = {               //  Based on Metric System.
        km: 10 ** 3,          //  Millimeter / Milligram / Milliliter
        hm: 10 ** 2,          //  Centimeter / Centigram / Centiliter
        dam: 10 ** 1,          //  Decimeter  / Decigram  / Deciliter
        m: 10 ** 0,           //  Meter      / Gram      / Liter          
        dm: 10 ** -1,         //  Hectometer / Hectogram / Hectoliter
        cm: 10 ** -2,         //  Decameter  / Decagram  / Decaliter
        mm: 10 ** -3,         //  Kilometer  / Kilogram  / Kiloliter

        kg: 10 ** 3,          //  Millimeter / Milligram / Milliliter
        hg: 10 ** 2,          //  Centimeter / Centigram / Centiliter
        dag: 10 ** 1,          //  Decimeter  / Decigram  / Deciliter
        g: 10 ** 0,           //  Meter      / Gram      / Liter          
        dg: 10 ** -1,         //  Hectometer / Hectogram / Hectoliter
        cg: 10 ** -2,         //  Decameter  / Decagram  / Decaliter
        mg: 10 ** -3,         //  Kilometer  / Kilogram  / Kiloliter

        kl: 10 ** 3,          //  Millimeter / Milligram / Milliliter
        hl: 10 ** 2,          //  Centimeter / Centigram / Centiliter
        dal: 10 ** 1,          //  Decimeter  / Decigram  / Deciliter
        l: 10 ** 0,           //  Meter      / Gram      / Liter          
        dl: 10 ** -1,         //  Hectometer / Hectogram / Hectoliter
        cl: 10 ** -2,         //  Decameter  / Decagram  / Decaliter
        ml: 10 ** -3,         //  Kilometer  / Kilogram  / Kiloliter

        mile: 1609.344,       //  Mile
        yd: 0.9144,         //  Yard                                    
        ft: 0.3048,         //  Feet                   // Length
        in: 0.0254,       //  Inch             

        pd: 453.59237,   //  Pound                  // Weight
        oz: 28.349523125,   //  Ounce                       

        qt: 0.946352946,    //  Quatre                 // US Sys
        pt: 0.473176,     //  Pint                                    
        cp: 0.2365882365,        //  Cup                    // Volume
        flOz: 0.0254,       //  Fluid Ounce                                    
    };

    mToUs = {               // From Meter / Gram / Liter To every US unit. 
        mile: 0.0006213712,   //  Mile
        yd: 1.0936132983,   //  Yard                                    
        ft: 3.280839895,    //  Feet                   // Length
        in: 39.37007874,  //  Inch                              
        pound: 0.0022046226,//  Pound                  // Weight
        oz: 0.0352739619,   //  Ounce      
        qt: 1.0566887074,   //  Quatre                 // US Sys
        pt: 2.1133764189, //  Pint                                    
        cp: 4.2267548297,  //  Cup                    // Volume
        flOz: 33.814038638, //  Fluid Ounce                                    
    };

    convertToMetric = (n, u) => this.baseM[u] * n;

    metricSystem(n, u) {

        // Meter / Gram / Liter
        // Square Meter = return**2
        // Cubic Meter = return**3

        const bM = this.convertToMetric(n, u);

        const arr = [];

        for (let i = 3; i > -4; i--) arr.push(bM * 10 ** i);

        return arr.reverse();
    }

    UsSystem(n, u, t) {

        // Mile / Yard / Foot / Inch
        // Square U = return**2 (length)
        // Cubic  U = return**3 (length)

        const bM = this.convertToMetric(n, u);

        const arr = [];

        for (const u in this.mToUs) {
            arr.push(this.mToUs[u] * bM);
        };

        return {
            'l': arr.slice(0, 3),
            'w': arr.slice(4, 6),
            'v': arr.slice(7, 9)
        }[t]
    }

    temperature(n, u) {

        // Celsius / Fahrenheit / Kelvin

        const formulas = {
            celsius: () => [(n * 1.8) + 32, (n + 273.15)],
            fahrenheit: () => [(n - 32) * 1.8, (n + 459.67) * (5 / 9)],
            kelvin: () => [(n - 273.15), (n - 273.15) * (9 / 5) + 32],
        };

        return formulas[u]();
    }

    getLengthMetric = () => ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    getWeightMetric = () => ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    getVolumeMetric = () => ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    getLengthUs = () => ['mile', 'yd', 'ft', 'in'];
    getWeightUs = () => ['pd', 'oz'];
    getVolumeUs = () => ['qt', 'pt', 'cp', 'flOz'];


    getLengthMetricFull = () => ['kilometer', 'hectometer', 'decameter', 'meter', 'decimeter', 'centimeter', 'millimeter'];
    getWeightMetricFull = () => ['kilogram', 'hectogram', 'decagram', 'gram', 'decigram', 'centigram', 'milligram'];
    getVolumeMetricFull = () => ['kiloliter', 'hectoliter', 'decaliter', 'liter', 'deciliter', 'centiliter', 'milliliter'];
    getLengthUsFull = () => ['mile', 'yard', 'foot', 'inch'];
    getWeightUsFull = () => ['pound', 'ounce'];
    getVolumeUsFull = () => ['quatre', 'pint', 'cup', 'fluid ounce'];
}

export default Converter;