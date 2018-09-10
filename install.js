const [,, ...args] = process.argv

if(args.length != 2) {
    console.error('Usage : kpay-install [apikey] [appName]')
    return
}

const fs       = require('fs')
const unzip    = require('unzip')
const request  = require('request')
const mkdirp   = require('mkdirp');
const readline = require('readline2');

const projectDir   = process.env.INIT_CWD || require('path').resolve("../../", __dirname)

const apikey  = args[0]
const appName = args[1]

console.log(`Fecthing files for ${appName}`)

request(`https://drive.google.com/uc?authuser=0&id=1q_ULyEjTROu7cLpwIa0FVjDWsgZ9F0TT&export=download`)
// request(`https://kiezelpay.com/api/merchant/library/?key=${apikey}&app=${encodeURI(appName)}`)
.on('response', (response) => {
    if(response.statusCode === 200) {

        console.log(`Installing...`)
        response.pipe(unzip.Parse())
        .on('entry', (entry) => {
            var fileName = entry.path
            if (fileName === 'app/kpay/kpay_config.js' && fs.existsSync(projectDir + '/' + fileName)) {
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                })
                rl.question('Do you want to overwrite your existing app/kpay/kpay_config.js? (y/N) ', (answer) => {
                    if(answer === 'y') {
                        entry.pipe(fs.createWriteStream(fileName))
                    }
                    else {
                        entry.autodrain()
                    }
                    rl.close()
                })
            }
            else if (entry.type === 'Directory' && fileName.includes('kpay')) {
                mkdirp.sync(projectDir + '/' + fileName)
                entry.autodrain()
            }
            else if (entry.type === 'File' && fileName.includes("kpay")) {
                entry.pipe(fs.createWriteStream(fileName))
            } else {
                entry.autodrain()
            }
        })
    }
    else {
        console.error(`ERROR : ${response.body}`)
    }
})
.on('error', (err) => console.error(err))

