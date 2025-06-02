import { FC } from 'react';

interface SearchBarProps {
  search: string;
  setSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ search, setSearch }) => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#374cd5",
      borderRadius: "999px",
      padding: "0.5rem 1rem",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 0 10px rgba(128, 0, 128, 0.5)",
    },
    input: {
      flex: 1,
      border: "none",
      backgroundColor: "transparent",
      color: "#E6E6FA",
      fontSize: "1rem",
      outline: "none",
      paddingLeft: "0.5rem",
    },
    icon: {
      color: "#b37bb1",
      fontSize: "1.2rem",
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.icon}>🔍</span>
      <input
        type="text"
        placeholder="Поиск..."
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
