import program from 'commander';
import colors from 'colors';
import through from 'through2';
import fs from 'fs';
import csv2json from 'csv2json';
import {promisify} from 'util';
import {extname} from 'path';

const readDir = promisify(fs.readdir);

const makeRed = (text) => {
    return colors.red(text);
}

const reverse = () => {
    const reverse = through((data, enc, cb) => {
        cb(null, data.reverse());
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};

const transform = () => {
    const toUpperCase = through((data, enc, cb) => {
        cb(null, data.toString().toUpperCase());
    });
    process.stdin.pipe(toUpperCase).pipe(process.stdout);
};

const outputFile = (filePath) => {
    if (existFile(filePath)) {
        fs.createReadStream(filePath).pipe(process.stdout);
    }
};

const convertFromFile = (filePath) => {
    if (existFile(filePath)) {
        fs.createReadStream(filePath)
            .pipe(csv2json())
            .pipe(process.stdout);
    }
};

const convertToFile = (filePath) => {
    if (existFile(filePath)) {
        fs.createReadStream(filePath)
            .pipe(csv2json())
            .pipe(fs.createWriteStream(filePath.replace('.csv', '.json')));
    }
};

const cssBundler = async (path) => {
    let files = await readDir(path);
    files = files.filter((file) => {
        return extname(file) === '.css';
    })
    console.log(files);

    /** Unrealized logic. */
};

const existFile = (path) => {
    if (!fs.existsSync(path)) {
        console.log(colors.red('The specified file is incorrect'));
        return false;
    }
    return true;
}

program
    .option('-a, --action <name>', 'A name of action')
    .option('-f, --file [name]', 'A name of file')
    .option('-p, --path [path]', 'Path to files')
    .option('-h, --help', 'Help')
    .parse(process.argv);

if (!process.argv.slice(2).length) {
    console.log(colors.red('You should use at least a key --action (-a)'));
    program.outputHelp(makeRed,);
} else if (process.argv[2] === "--help" || process.argv[2] === "-h") {
    console.log(program.outputHelp(makeRed));
} else {
    switch (program.action) {
        case 'reverse':
            reverse();
            break;
        case 'transform':
            transform();
            break;
        case 'outputFile':
            outputFile(program.file);
            break;
        case 'convertFromFile':
            convertFromFile(program.file);
            break;
        case 'convertToFile':
            convertToFile(program.file);
            break;
        case 'cssBundler':
            cssBundler(program.path);
            break;
        default:
            console.log(colors.red(`Event "${program.action}" is unknown`));
    }
}
