"use client";
import { useState } from "react";
import "./Search.scss";
import { useTranslation } from "@/hooks/useTranslation";

type SearchResult = {
  title: string;
  link: string;
  score?: number;
  description?: string;
};

type Props = {
  onSearch: (results: SearchResult[]) => void;
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
        const errorData = await response.json();
        throw new Error(errorData.error || "Ошибка получения данных");
      }

      const results: SearchResult[] = await response.json();
      
      // Sort results by relevance score if available
      const sortedResults = results.sort((a, b) => (b.score || 0) - (a.score || 0));
      
      onSearch(sortedResults);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Ошибка при поиске";
      setError(errorMessage);
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={t("developments.placeholder")}
        disabled={loading}
      />
      <button onClick={handleSearch} disabled={loading || !searchTerm.trim()}>
        {loading ? t("developments.search_for") : t("developments.search")}
      </button>
      {error && <div className="search_error" style={{ color: 'red', marginTop: '8px' }}>{error}</div>}
    </div>
  );
};