import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DownloadProps {
  icon: any;
  storeName: string;
  url: string;
}

const Download: React.FC<DownloadProps> = ({ icon, storeName, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-lg bg-white text-center text-green-500 hover:bg-gray-100 transition"
    >
      <div className="flex justify-center items-center gap-2 mb-2">
        <FontAwesomeIcon className="text-green-500" icon={icon} size="2x" />
        <p className="text-sm">Télécharger sur</p>
      </div>
      <p className="text-2xl">{storeName}</p>
    </a>
  );
};

export default Download;
