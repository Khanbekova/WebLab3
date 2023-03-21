import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: true
    }
};


const post = async (req, res) => {
    await saveFile(req.body)
    res.statusCode = 200
    res.end(JSON.stringify(req.body))
    return res
};

/*const saveFile = async (file) => {
    const newFilename = `.//public/users.json}`;
    const data = fs.readFileSync(file.filepath); //чтение содержимого временного файла
    fs.writeFileSync(newFilename, data); //сохранени файла
    await fs.unlinkSync(file.filepath); //Удаление временного файла
    return newFilename;
};*/
const saveFile = async (body) => {
    if (fs.existsSync("./public/users.json")) {
        fs.readFile("./public/users.json", {encoding: 'utf-8'}, function (err, data) {
            let d = JSON.parse(data)
            d.push(body)
            fs.writeFile("./public/users.json", JSON.stringify(d), {flag: 'w'}, function (err) {
                if (err) throw err;
                console.log("It's saved!");
            });
        });
    } else {
        fs.writeFile("./public/users.json", JSON.stringify([body]), {flag: 'w'}, function (err) {
            if (err) throw err;
            console.log("It's saved!");
        });
    }
};
export default (req, res) => {
    if (req.method === "POST") post(req, res);
    else res.status(200).send("Invalid method, use POST")
};