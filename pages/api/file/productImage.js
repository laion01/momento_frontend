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
    console.log("files", files);
    const filename = await saveFile(files.file);
    return res.status(201).send({ filename });
  });
};

const saveFile = async (file) => {
  const timestamp = (new Date()).getTime();
  console.log("uploading file ", `/images/products/${file.originalFilename}_${timestamp}`);
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/images/products/${timestamp}_${file.originalFilename}`, data);
  const filename = `/images/products/${timestamp}_${file.originalFilename}`;
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
