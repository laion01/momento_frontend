import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

const post = async (req, res) => {
  // console.log(req, res);
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    console.log("files", files.file.originalFilename, files.file.filepath);
    const filename = await saveFile(files.file);
    return res.status(201).send({ filename });
  });
};

const saveFile = async (file) => {
  console.log("uploading file ", `/images/colors/${file.originalFilename}_{timestamp}`);
  const data = fs.readFileSync(file.filepath);
  const timestamp = (new Date()).getTime();
  fs.writeFileSync(`./public/images/colors/${timestamp}_${file.originalFilename}`, data);
  const filename = `/images/colors/${timestamp}_${file.originalFilename}`;
  await fs.unlinkSync(file.filepath);
  return filename;
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
