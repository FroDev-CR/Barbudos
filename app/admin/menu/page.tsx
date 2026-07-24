"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";

type UploadState = {
  loading: boolean;
  message: string;
  error: boolean;
};

export default function MenuAdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [category, setCategory] = useState("Todos");
  const [productKey, setProductKey] = useState(MENU_ITEMS[0].id);
  const [preview, setPreview] = useState("");
  const [currentImages, setCurrentImages] = useState<Record<string, string>>({});
  const [uploadState, setUploadState] = useState<UploadState>({
    loading: false,
    message: "",
    error: false,
  });

  useEffect(() => {
    fetch("/api/menu-images")
      .then((response) => response.json())
      .then((result: { images?: Record<string, string> }) =>
        setCurrentImages(result.images ?? {}),
      )
      .catch(() => setCurrentImages({}));
  }, []);

  const products = useMemo(
    () =>
      category === "Todos"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.category === category),
    [category],
  );

  const selectedItem =
    MENU_ITEMS.find((item) => item.id === productKey) ?? MENU_ITEMS[0];
  const displayImage = preview || currentImages[selectedItem.id] || "";

  function changeCategory(nextCategory: string) {
    setCategory(nextCategory);
    const firstProduct =
      nextCategory === "Todos"
        ? MENU_ITEMS[0]
        : MENU_ITEMS.find((item) => item.category === nextCategory);
    if (firstProduct) setProductKey(firstProduct.id);
    setPreview("");
    setUploadState({ loading: false, message: "", error: false });
  }

  async function submitImage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("image") as HTMLInputElement;
    const image = fileInput.files?.[0];

    if (!adminKey || !image) {
      setUploadState({
        loading: false,
        message: "Ingresá la clave y seleccioná una fotografía.",
        error: true,
      });
      return;
    }

    setUploadState({ loading: true, message: "Subiendo fotografía...", error: false });
    const payload = new FormData(form);
    payload.set("productKey", productKey);

    try {
      const response = await fetch("/api/admin/menu-images", {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: payload,
      });
      const result = (await response.json()) as {
        imageUrl?: string;
        message?: string;
        error?: string;
      };
      if (!response.ok || !result.imageUrl) {
        throw new Error(result.error || "No pudimos subir la fotografía.");
      }

      setCurrentImages((images) => ({ ...images, [productKey]: result.imageUrl! }));
      setPreview("");
      fileInput.value = "";
      setUploadState({
        loading: false,
        message: result.message || "Fotografía actualizada.",
        error: false,
      });
    } catch (error) {
      setUploadState({
        loading: false,
        message: error instanceof Error ? error.message : "Intentá de nuevo.",
        error: true,
      });
    }
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <a className="brand" href="/">
          <span className="brand-mark">B</span>
          <span>BARBUDOS</span>
        </a>
        <a className="admin-back-link" href="/">← Volver al menú</a>
      </header>

      <section className="admin-shell">
        <div className="admin-intro">
          <p className="eyebrow">ADMINISTRACIÓN DEL MENÚ</p>
          <h1>Fotografías listas cuando ustedes lo estén.</h1>
          <p>
            Elegí un producto, seleccioná su fotografía y publicala. La imagen
            aparecerá automáticamente en el menú sin cambiar el código.
          </p>
        </div>

        <div className="admin-layout">
          <form className="upload-form" onSubmit={submitImage}>
            <div className="form-heading">
              <span className="form-kicker">NUEVA FOTOGRAFÍA</span>
              <h2>Subir o reemplazar</h2>
            </div>

            <label>
              Clave administrativa
              <input
                type="password"
                value={adminKey}
                onChange={(event) => setAdminKey(event.target.value)}
                placeholder="Clave configurada en Vercel"
                autoComplete="current-password"
                required
              />
            </label>

            <label>
              Categoría
              <select
                value={category}
                onChange={(event) => changeCategory(event.target.value)}
              >
                {MENU_CATEGORIES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label>
              Producto
              <select
                name="productKey"
                value={productKey}
                onChange={(event) => {
                  setProductKey(event.target.value);
                  setPreview("");
                  setUploadState({ loading: false, message: "", error: false });
                }}
              >
                {products.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Texto alternativo
              <input
                name="altText"
                defaultValue={selectedItem.name}
                key={selectedItem.id}
                placeholder="Descripción breve de la fotografía"
              />
            </label>

            <label className="file-picker">
              Fotografía
              <input
                name="image"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (preview) URL.revokeObjectURL(preview);
                  setPreview(file ? URL.createObjectURL(file) : "");
                }}
                required
              />
              <span>JPG, PNG, WebP o AVIF · máximo 5 MB</span>
            </label>

            <button className="button button-full" disabled={uploadState.loading}>
              {uploadState.loading ? "Subiendo..." : "Publicar fotografía"}
            </button>

            {uploadState.message && (
              <p
                className={`admin-message ${uploadState.error ? "error" : "success"}`}
                role="status"
              >
                {uploadState.message}
              </p>
            )}
          </form>

          <aside className="upload-preview">
            <span className="mini-label">VISTA PREVIA</span>
            <div className={`preview-frame ${displayImage ? "has-image" : ""}`}>
              {displayImage ? (
                <img src={displayImage} alt={`Vista previa de ${selectedItem.name}`} />
              ) : (
                <div>
                  <strong>{selectedItem.name.slice(0, 2).toUpperCase()}</strong>
                  <span>La fotografía aparecerá aquí</span>
                </div>
              )}
            </div>
            <div className="preview-copy">
              <div>
                <h3>{selectedItem.name}</h3>
                <strong>{selectedItem.price}</strong>
              </div>
              <p>{selectedItem.description}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
