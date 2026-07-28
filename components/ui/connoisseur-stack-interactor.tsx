"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export interface ConnoisseurItem {
  num: string;
  name: string;
  category: string;
  eyebrow: string;
  clipId: "clip-original" | "clip-hexagons" | "clip-pixels";
  image: string;
}

const defaultItems: ConnoisseurItem[] = [
  {
    num: "01",
    name: "Hamburguesas",
    category: "Hamburguesas",
    eyebrow: "La firma de la casa",
    clipId: "clip-original",
    image: "/menu/barbudos-table.jpeg",
  },
  {
    num: "02",
    name: "Cócteles",
    category: "Cócteles",
    eyebrow: "La noche empieza aquí",
    clipId: "clip-hexagons",
    image: "/menu/gin-tonics.jpeg",
  },
  {
    num: "03",
    name: "Para compartir",
    category: "Para Compartir",
    eyebrow: "Al centro sabe mejor",
    clipId: "clip-pixels",
    image: "/menu/trios.jpeg",
  },
  {
    num: "04",
    name: "Carnes",
    category: "Carnes",
    eyebrow: "Fuego, punto y carácter",
    clipId: "clip-original",
    image: "/menu/lomito-barbudos.jpeg",
  },
];

type ConnoisseurStackInteractorProps = {
  items?: ConnoisseurItem[];
  className?: string;
  onSelectCategory?: (category: string) => void;
  onViewAll?: () => void;
};

export function ConnoisseurStackInteractor({
  items = defaultItems,
  className,
  onSelectCategory,
  onViewAll,
}: ConnoisseurStackInteractorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const reduceMotionRef = useRef(false);

  const createLoop = useCallback(
    (index: number) => {
      const item = items[index];
      const paths =
        containerRef.current?.querySelectorAll<SVGGraphicsElement>(
          `#${item.clipId} .clip-piece`,
        ) ?? [];

      masterTimelineRef.current?.kill();

      imageRef.current?.setAttribute("href", item.image);
      mainGroupRef.current?.setAttribute(
        "clip-path",
        `url(#${item.clipId})`,
      );

      if (reduceMotionRef.current) {
        gsap.set(paths, { scale: 1, transformOrigin: "50% 50%" });
        return;
      }

      gsap.set(paths, { scale: 0, transformOrigin: "50% 50%" });

      masterTimelineRef.current = gsap
        .timeline({ repeat: -1, repeatDelay: 0.9 })
        .to(paths, {
          scale: 1,
          duration: 0.78,
          stagger: { amount: 0.38, from: "random" },
          ease: "expo.out",
        })
        .to(paths, {
          scale: 1.035,
          duration: 1.45,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
          stagger: { amount: 0.16, from: "center" },
        })
        .to(paths, {
          scale: 0,
          duration: 0.58,
          stagger: { amount: 0.28, from: "edges" },
          ease: "expo.in",
        });
    },
    [items],
  );

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mediaQuery.matches;

    const context = gsap.context(() => {
      createLoop(0);

      if (!reduceMotionRef.current) {
        gsap.fromTo(
          ".connoisseur-intro",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
        );
        gsap.fromTo(
          ".connoisseur-menu-item",
          { autoAlpha: 0, x: -30 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.09,
            delay: 0.18,
            ease: "power3.out",
          },
        );
        gsap.fromTo(
          visualRef.current,
          { autoAlpha: 0, scale: 0.92, rotateY: -8 },
          {
            autoAlpha: 1,
            scale: 1,
            rotateY: 0,
            duration: 1.1,
            delay: 0.2,
            ease: "expo.out",
          },
        );
        gsap.to(backgroundRef.current, {
          scale: 1.06,
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => {
      masterTimelineRef.current?.kill();
      context.revert();
    };
  }, [createLoop]);

  useEffect(() => {
    createLoop(activeIndex);
  }, [activeIndex, createLoop]);

  function activate(index: number) {
    setActiveIndex(index);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotionRef.current || !visualRef.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(visualRef.current, {
      rotateY: x * 9,
      rotateX: y * -7,
      x: x * 16,
      y: y * 10,
      duration: 0.7,
      ease: "power2.out",
      transformPerspective: 1200,
    });
  }

  function resetPerspective() {
    if (reduceMotionRef.current || !visualRef.current) return;
    gsap.to(visualRef.current, {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }

  const activeItem = items[activeIndex];

  return (
    <section
      id="inicio"
      ref={containerRef}
      className={cn("connoisseur-hero", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPerspective}
      aria-labelledby="connoisseur-title"
    >
      <div
        ref={backgroundRef}
        className="connoisseur-background"
        aria-hidden="true"
      />
      <div className="connoisseur-shade" aria-hidden="true" />
      <div className="connoisseur-grain" aria-hidden="true" />

      <div className="connoisseur-content">
        <div className="connoisseur-copy">
          <div className="connoisseur-intro">
            <p className="connoisseur-kicker">
              <span />
              Bar · Restaurante · Costa Rica
            </p>
            <h1 id="connoisseur-title">
              La noche
              <em>tiene sabor.</em>
            </h1>
            <p>
              Entrá por lo que se te antoja. Quedate por la comida, los tragos
              y las historias que empiezan alrededor de la mesa.
            </p>
          </div>

          <nav className="connoisseur-nav" aria-label="Categorías destacadas">
            <ul>
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={`${item.num}-${item.category}`}>
                    <button
                      type="button"
                      className={cn(
                        "connoisseur-menu-item",
                        isActive && "is-active",
                      )}
                      onPointerEnter={() => activate(index)}
                      onFocus={() => activate(index)}
                      onClick={() => onSelectCategory?.(item.category)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="connoisseur-number">{item.num}</span>
                      <span className="connoisseur-label">
                        <small>{item.eyebrow}</small>
                        <strong>{item.name}</strong>
                      </span>
                      <span className="connoisseur-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="connoisseur-view-all"
            onClick={onViewAll}
          >
            Ver todo el menú
            <span aria-hidden="true">↓</span>
          </button>
        </div>

        <div className="connoisseur-visual-shell" aria-live="polite">
          <div className="connoisseur-orbit orbit-outer" aria-hidden="true" />
          <div className="connoisseur-orbit orbit-inner" aria-hidden="true" />
          <div ref={visualRef} className="connoisseur-visual">
            <span className="connoisseur-index">
              {activeItem.num} / {String(items.length).padStart(2, "0")}
            </span>
            <svg
              viewBox="0 0 500 500"
              role="img"
              aria-label={`Fotografía destacada de ${activeItem.name}`}
            >
              <defs>
                <clipPath id="clip-original">
                  <path
                    className="clip-piece"
                    d="M480.6,235H19.4c-6,0-10.8-4.9-10.8-10.8v-9.5c0-6,4.9-10.8,10.8-10.8h461.1c6,0,10.8,4.9,10.8,10.8v9.5C491.4,230.2,486.6,235,480.6,235z"
                  />
                  <path
                    className="clip-piece"
                    d="M483.1,362.4H16.9c-4.6,0-8.3-3.7-8.3-8.3v-1.8c0-4.6,3.7-8.3,8.3-8.3h466.1c4.6,0,8.3,3.7,8.3,8.3v1.8C491.4,358.7,487.7,362.4,483.1,362.4z"
                  />
                  <path
                    className="clip-piece"
                    d="M460.3,336.3H39.7c-17.2,0-31.1-13.9-31.1-31.1v-31.5c0-17.2,13.9-31.1,31.1-31.1h420.7c17.2,0,31.1,13.9,31.1,31.1v31.5C491.4,322.4,477.5,336.3,460.3,336.3z"
                  />
                  <path
                    className="clip-piece"
                    d="M459.2,196.2H40.8v-35c0-47.5,38.5-86,86-86h246.5c47.5,0,86,38.5,86,86V196.2z"
                  />
                  <path
                    className="clip-piece"
                    d="M441.9,424.9H58.1c-9.6,0-17.3-7.8-17.3-17.3v-37.4h418.5v37.4C459.2,417.1,451.5,424.9,441.9,424.9z"
                  />
                </clipPath>

                <clipPath id="clip-hexagons">
                  <rect
                    className="clip-piece"
                    x="20"
                    y="20"
                    width="200"
                    height="280"
                    rx="12"
                  />
                  <rect
                    className="clip-piece"
                    x="20"
                    y="320"
                    width="200"
                    height="160"
                    rx="12"
                  />
                  <rect
                    className="clip-piece"
                    x="240"
                    y="20"
                    width="240"
                    height="140"
                    rx="12"
                  />
                  <rect
                    className="clip-piece"
                    x="240"
                    y="180"
                    width="110"
                    height="160"
                    rx="12"
                  />
                  <rect
                    className="clip-piece"
                    x="370"
                    y="180"
                    width="110"
                    height="160"
                    rx="12"
                  />
                  <rect
                    className="clip-piece"
                    x="240"
                    y="360"
                    width="240"
                    height="120"
                    rx="12"
                  />
                </clipPath>

                <clipPath id="clip-pixels">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <rect
                      key={index}
                      className="clip-piece"
                      x={(index % 3) * 160 + 20}
                      y={Math.floor(index / 3) * 160 + 20}
                      width="140"
                      height="140"
                      rx="4"
                    />
                  ))}
                </clipPath>
              </defs>

              <g
                ref={mainGroupRef}
                clipPath={`url(#${items[0].clipId})`}
              >
                <image
                  ref={imageRef}
                  href={items[0].image}
                  width="500"
                  height="500"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
            <div className="connoisseur-caption">
              <span>Selección Barbudos</span>
              <strong>{activeItem.name}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="connoisseur-scroll-cue" aria-hidden="true">
        <span />
        Descubrí más
      </div>
    </section>
  );
}
