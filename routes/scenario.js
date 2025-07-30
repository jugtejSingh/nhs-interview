var express = require('express');
var router = express.Router()
const { scenarioData, options } = require('../utils/scenarioData');

//The function to get the randomized param outputs
router.get('/', function (req, res, next) {
    const technology = req.query.technology
    const role = req.query.role
    const environment = req.query.environment
    //All 3 if just make sure all parms have been recieved and they are corect
    if (!technology || !scenarioData.technology[technology]) {
        return res.status(400).json({
            error: true,
            message: 'No technology or incorrect option given, please try hitting the /api/options API for a list of possible inputs',
            code: 400
        })
    } else if (!role || !scenarioData.role[role]) {
        return res.status(400).json({
            error: true,
            message: 'No role or incorrect option given, please try hitting the /api/options API for a list of possible inputs',
            code: 400
        })
    } else if (!environment || !scenarioData.environment[environment]) {
        return res.status(400).json({
            error: true,
            message: 'No environment or incorrect option given, please try hitting the /api/options API for a list of possible inputs',
            code: 400
        })
    }
    //Randomly find a scenario from an input, both sub category and the scenario it picks in the sub category are random
    let technologyScenario
    let roleScenario
    let environmentScenario
    try {
        technologyScenario = pickAScenario(scenarioData.technology[technology]);
        roleScenario = pickAScenario(scenarioData.role[role]);
        environmentScenario = pickAScenario(scenarioData.environment[environment]);
    } catch (e) {
        //Just throw an error if somehow theres been an error at this stage, this is highly unlikely if not impossible
        return res.status(400).json({message: "There seems to be a problem with the inputs, please retry them"})
    }
    // Yay you've successfully gotten scenarios and will send them back to the user now
    if (technologyScenario && roleScenario && environmentScenario) {
        return res.status(200).json({
            inputs: {
                technology: technology,
                role: role,
                environment: environment,
            },
            message: `${technologyScenario} ${roleScenario} ${environmentScenario}`
        })
    } else {
        // highly unlikely youll reach this bit, if not impossible
        return res.status(404).json({message: "There seems to be a problem, please try again"})
    }
});

// simple function to find options, its kind of like a readME to see how it works.
router.get('/options', function (req, res, next) {
    res.status(200).json({
        inputTypes: {
            technologies: Object.keys(scenarioData.technology),
            roles: Object.keys(scenarioData.role),
            environments: Object.keys(scenarioData.environment),
        },
        categories: Object.keys(scenarioData.technology.Cybersecurity),
        usage: "http://localhost:3000/api/scenario?technology=Cloud Computing&role=System Administrator&environment=Cloud Infrastructure" ,
})});

//The function that randomely picks a sub category and an instance from it
function pickAScenario(category) {
    let randomNum = Math.floor(Math.random() * options.length);
    const categoryPicked = category[options[randomNum]]
    let randomNumForCategory = Math.floor(Math.random() * categoryPicked.length);
    return categoryPicked[randomNumForCategory];
}

module.exports = router;
