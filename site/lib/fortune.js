var fortunes = ["Conquer your fears or thhey will conquer you.",
                "River need springs.",
                "Do not fear what you don't know.",
                "You will have a pleasant surprise.",
                "Whenever possible, keep it simple."
               ];
exports.getFortine = function(){

    return fortunes[Math.floor(Math.random()*fortunes.length)];
};