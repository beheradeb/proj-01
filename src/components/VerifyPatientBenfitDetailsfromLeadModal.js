import "./VerifyPatientBenfitDetailsfromLeadModal.css";
import { useState, useEffect } from "react";
import axios from "../api/axios";
const VerifyPatientBenfitDetailsfromLeadModal = () => {
  const [htmlContent, setHtmlContent] = useState("");
  // const htmlContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>css by abyc</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /><link rel="stylesheet" href="/css/style.css" /><style>*{margin:0;padding:0;box-sizing:border-box;}body{border:1px solid black;}h1,h2{background-color:orangered;border:1px solid rgb(69,7,7);padding:1vh;}p{padding:1vh;text-indent:30px;letter-spacing:1px;line-height:20px;font-family:sans-serif;background-color:white;}footer{background-color:white;padding:1vh;background-color:orangered}header,main,footer{border:1px solid rgb(69,7,7);}</style></head><body><header><h1>Lorem ipsum dolor sit.</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatum quas ad velit delectus, sunt iusto dolorum distinctio adipisci possimus fuga aliquid numquam minima libero itaque. Enim ipsam numquam nisi? Dolor magnam sint eveniet officiis deserunt libero at aut neque, delectus tenetur debitis voluptatibus suscipit ratione consequuntur, perferendis id illo accusantium dolore exercitationem praesentium. Corrupti cumque quod ullam atque sapiente. Ullam laboriosam error quibusdam officiis, illum deserunt esse consectetur rerum quod fuga enim ipsam vitae non possimus sed rem delectus dicta commodi? Unde repudiandae illo minus neque qui accusantium cum?</p></header><main><h2>Lorem, ipsum dolor.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat atque. Accusantium fugit quos quisquam facilis delectus consequuntur dignissimos excepturi pariatur fugiat, eum maxime mollitia, voluptate harum nam, officiis quam. Similique voluptate ipsa quisquam illo. Fuga, dicta! Corporis unde sed nesciunt nam voluptatibus sit repudiandae quibusdam dolorem tenetur, temporibus eius voluptatum, exercitationem, quis reprehenderit! Molestias eveniet temporibus porro modi consequatur. Animi facere unde placeat sed deserunt pariatur corrupti perferendis. Obcaecati maiores omnis quisquam esse, consequuntur dicta eligendi! Corporis minus explicabo officia, atque natus nulla repellendus perferendis id vitae magni culpa? Possimus repellendus aliquam assumenda facilis praesentium tempora dicta hic quisquam minima ad et, neque dolor provident explicabo quod in molestiae quam ex perspiciatis. Possimus exercitationem quae earum animi quidem sint. Commodi similique sunt labore corporis inventore sequi dolorem maiores dicta necessitatibus quae. Ratione minus corporis labore ex laboriosam. Maiores et dolores in ratione ex, distinctio voluptas voluptatibus eveniet consectetur ducimus?</p><h2>Lorem, ipsum dolor.</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione libero quaerat voluptatum ullam quod modi quo! Incidunt molestias, veniam, quo fuga quas ipsum atque non, consequuntur necessitatibus nihil eius totam! Iste laborum soluta cum voluptatibus magnam. Vel iste accusantium ad explicabo quod facere. Error aspernatur adipisci ullam autem illum repudiandae, consequuntur nulla vitae reiciendis assumenda dolores est, earum iste odit. Iusto hic voluptatem, ea molestias odio alias. Voluptatem molestias labore dolorem quo deleniti tenetur repudiandae eum culpa provident voluptates soluta ipsum a in iusto, pariatur, illo sit. Repellat, quisquam quod.</p></main><footer>Lorem ipsum dolor sit.</footer></body></html>`;
  useEffect(() => {
    const fun = async () => {
      try {
        const resp = await axios.get("/test_stuff");
        setHtmlContent(resp.data[0].pdf);
      } catch (err) {
        console.log("fun error: ", err.message);
      }
    };
    fun();
  }, []);
  return (
    <div className="VerifyPatientBenfitDetailsfromLeadModal">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default VerifyPatientBenfitDetailsfromLeadModal;
