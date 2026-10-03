"use client";

import { useState } from "react";
import Image from "next/image";

export default function MenuCard({ name, desc, price, img }) {
  const [active, setActive] = useState(false);

  return (
    <article
      className={`menu-card ${active ? "is-active" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onClick={() => setActive(!active)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(!active);
        }
      }}
    >
      <div className="menu-card-media">
        {img && (
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 300px"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <h3 className="menu-card-name">{name}</h3>
      <p className="menu-card-desc">{desc}</p>
      <span className="menu-card-price">
        Rp {price.toLocaleString("id-ID")}
      </span>
    </article>
  );
}