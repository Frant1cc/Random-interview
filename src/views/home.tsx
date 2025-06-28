import Upload from "../components/upload/upload";
function Home() {


  return (
    <>
    <Upload type="file" />

        <div>
          <h3>文件内容：</h3>
          <pre></pre>
        </div>

    </>
  );
}

export default Home;
