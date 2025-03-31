"use client";
import { useState } from "react";
import "./Search.scss";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  onSearch: (results: { title: string; link: string }[]) => void;
};

export const Search = ({ onSearch }: Props) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Введите запрос!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchTerm }),
      });

      if (!response.ok) {
        throw new Error("Ошибка получения данных");
      }

      const result = await response.json();
      onSearch(result);
    } catch (error) {
      setError("Ошибка при поиске");
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={t("developments.placeholder")}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? t("developments.search_for") : t("developments.search")}
      </button>
      {error && <div className="search_error">{error}</div>}
    </div>
  );
};
