class Converter {

    baseM = {               //  Based on Metric System.
        mm: 10**-3,         //  Millimeter / Milligram / Milliliter
        cm: 10**-2,         //  Centimeter / Centigram / Centiliter
        dm: 10**-1,         //  Decimeter  / Decigram  / Deciliter
        m: 10**0,           //  Meter      / Gram      / Liter          
        hm: 10**1,          //  Hectometer / Hectogram / Hectoliter
        dm: 10**2,          //  Decameter  / Decagram  / Decaliter
        km: 10**3,          //  Kilometer  / Kilogram  / Kiloliter
        ml: 1609.344,       //  Mile
        yd: 0.9144,         //  Yard                                    
        ft: 0.3048,         //  Feet                   // Length
        inch: 0.0254,       //  Inch                                    
        qt: 0.946352946,    //  Quatre                 // US Sys
        pint: 0.473176,     //  Pint                                    
        cup: 0.0254,        //  Cup                    // Volume
        flOz: 0.0254,       //  Fluid Ounce                                    
        pound: 453.59237,   //  Pound                  // Weight
        oz: 28.349523125,   //  Ounce
    };

    mToUs = {               // From Meter / Gram / Liter To every US unit. 
        ml: 0.0006213712,   //  Mile
        yd: 1.0936132983,   //  Yard                                    
        ft: 3.280839895,    //  Feet                   // Length
        inch: 39.37007874,  //  Inch                                    
        qt: 1.0566882094,   //  Quatre                 // US Sys
        pint: 2.1133764189, //  Pint                                    
        cup: 33.814022702,  //  Cup                    // Volume
        flOz: 33.814022702, //  Fluid Ounce                                    
        pound: 0.0022046226,//  Pound                  // Weight
        oz: 0.0352739619,   //  Ounce
    };
 
    convertToMetric = (n, u) => this.baseM[u] * n;

    metricSystem (n, u) {

        // Meter / Gram / Liter
        // Square Meter = return**2
        // Cubic Meter = return**3
    
        const bM = this.convertToMetric(n, u);

        const arr = [];
    
        for (let i = 3; i > -4; i--) arr.push(bM*10**i);
    
        return arr;
    }

    UsSystem (n) {

        // Mile / Yard / Foot / Inch
        // Square U = return**2 (length)
        // Cubic  U = return**3 (length)

        const arr = [];

        for (const u in this.mToUs) {
            arr.push(this.mToUs[u] * n);
        };

        return arr;
    }

    temperature (n, u) {

        // Celsius / Fahrenheit / Kelvin
    
        const formulas = {
            celsius: () => [(n * 1.8) + 32, (n + 273.15)],
            fahrenheit: () => [(n - 32) * 1.8, (n + 459.67) * (5 / 9)],
            kelvin: () => [(n - 273.15), (n - 273.15) * (9 / 5) + 32],
        }
    
        return formulas[u]()
    }

    getLengthMetric () {
        return ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']
    }
    getWightMetric () {
        return ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg']
    }
    getLengthMetric () {
        return ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml']
    }
    getLengthUs () {
        return ['ml', 'yd', 'ft', 'in']
    }
    getLengthUs () {
        return ['pd', 'oz']
    }
    getLengthUs () {
        return ['qt', 'pt', 'cp', 'fl.oz']
    }

    getLengthMetric () {
        return [
            'kilometer', 'hectometer', 'decameter', 
            'meter', 'decimeter', 'centimeter', 'millimeter']
    }
    getWightMetric () {
        return ['kilogram', 'hectogram', 'decagram', 
                'gram', 'decigram', 'centigram', 'milligram']
    }
    getLengthMetric () {
        return ['kiloliter', 'hectoliter', 'decaliter', 
                'liter', 'deciliter', 'centiliter', 'milliliter']
    }
    getLengthUs () {
        return ['mile', 'yard', 'foot', 'inch']
    }
    getLengthUs () {
        return ['pound', 'ounce']
    }
    getLengthUs () {
        return ['quatre', 'pint', 'cup', 'fluid ounce']
    }
}

export default Converter;