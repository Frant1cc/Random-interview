import {useState} from 'react';

// 封装 Input 组件
const Upload = ({type = 'file',}) => {
    const [fileContent, setFileContent] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileName = file.name.toLowerCase();
      const fileExtension = fileName.split(".").pop();
      if (fileExtension === "md") {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            console.log(reader.result)
            setFileContent(reader.result as string);
          }
        };
        reader.readAsText(file);
      } else {
        alert("请上传md文件");
      }
    }
    console.log(file)
  };
  return (
    <input
      type={type}
      onChange={handleFileChange}
      max={1}
    />
  );
};

export default Upload;