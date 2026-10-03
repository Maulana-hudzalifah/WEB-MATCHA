import Image from "next/image";
import { wa_link } from "../config.js";

export default function Hero() {
    return (<section className="hero" id="home">
        <h1 className="hero-title">Hello welcome, mathcex</h1>
        <div className="hero-content">
            <figure className="hero-figure">
                <Image
                    className="hero-img"
                    src="/lokasi.jpg"
                    alt="lokasi"
                    width={800}
                    height={500}
                    priority
                    style={{width: "100%", height:"100%"}}

                />
                <figcaption className= "hero-caption">
                    aku ki karo matcha wes koyok dulur
                </figcaption>
            </figure>

            <p className="hero-text">
                matcha.exe mengadopsi tema seperti anonymous melalui topeng
                balaclava hitam, sebuah gimmick ala hacker jalanan untuk
                menyembunyikan identitasnya dari pandangan publik sehingga setiap
                gelas matcha premium yang disajikan terasa seperti sebuah "file
                rahasia" yang berhasil dieksekusi langsung dari laboratorium
                digital jalanan.
            </p>
        </div>

        <a className="btn" href={wa_link} target="_blank" rel="noopener noreferrer">CALL ME</a>
    </section>);
}

