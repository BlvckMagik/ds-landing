import React, { useRef, useState } from "react";

interface FileInputButtonProps {
  onFileSelect: (file: File | null) => void; // Пропс для передачі файлу в батьківський компонент
}

const FileInputButton: React.FC<FileInputButtonProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Відкрити діалог вибору файлу
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFileName(file.name); // Зберегти назву файлу
      onFileSelect(file); // Передати файл у батьківський компонент
    } else {
      setFileName(null);
      onFileSelect(null); // Очистити файл
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Прихований інпут для вибору файлу */}
      <input
        ref={fileInputRef}
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Кастомна кнопка */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        Завантажити резюме
      </button>

      {/* Відображення назви файлу */}
      {fileName && (
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Завантажений файл: <strong>{fileName}</strong>
        </span>
      )}
    </div>
  );
};

export default FileInputButton;
