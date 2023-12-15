import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Helmet } from "../components/Helmet";
import { useEffect, useState } from "react";
import { RotatingLoader } from "../components/rotating-loader";
import { RotatingHeader } from "../components/rotating-header";

export default function Draw() {
  const [serverData, setServerData] = useState<any>();
  const [images, setImages] = useState([]);
  const [id, setId] = useState("");
  const [fetchAttempt, setFetchAttempt] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getServerData = async () => {
      const endpoint = "/api/jobs?";
      const query = new URLSearchParams({ id: id });
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(endpoint + query, options);
      const data = await response.json();
      if (data.success === true) {
        setServerData(data.data);
      }
    };
    if (id) {
      getServerData();
    }
  }, [id, fetchAttempt]);

  useEffect(() => {
    if (serverData && serverData.images?.length > 0) {
      setImages(serverData.images);
      setLoading(false);
    } else {
      setTimeout(() => {
        setFetchAttempt((f) => f + 1);
      }, 3000);
    }
  }, [serverData]);

  useEffect(() => {
    console.log("serverData", serverData);
  }, [serverData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const JSONdata = JSON.stringify({
      prompt: event.target.prompt.value,
    });

    const endpoint = "api/jobs";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const data = await response.json();
    if (data.success === true) {
      setId(data.id);
    }
  };

  const positionDataVisible = serverData?.queue.position > 0;
  const position = `Your position in the queue is: ${serverData?.queue.position}`;

  return (
    <div className="page">
      <Helmet page="" />

      <Header />
      <Banner />
      <div className="dark-section">
        <div className="content">
          <h1>Try it out</h1>

          <form className="hero-input-container" onSubmit={handleSubmit}>
            <input
              type="text"
              id="prompt"
              name="prompt"
              placeholder="Flying pigs on mars in the style of Picasso"
              className="hero-input"
            />
            <button type="submit">Submit</button>
          </form>
          {positionDataVisible && <aside style={{ marginLeft: "auto" }}>{position}</aside>}
          <div className="splash" style={{ justifyContent: "center" }}>
            <div className={`splish`}>{<RotatingLoader />}</div>
          </div>
          <div className="image-container">
            {images.map((image) => {
              return (
                <Image key={image.id} src={image.uri} alt={image.job_id} width={500} height={500} />
              );
            })}
          </div>
          <div />
        </div>
        <Footer />
      </div>
    </div>
  );
}
