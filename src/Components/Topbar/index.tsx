import "./index.scss";
import docsIcon from "../../assets/docsIcon.png";
import CommonDropdown from "../Dropdown";

type TopbarProps = {
  photoURL: string;
  setIsEdit: (isEdit: boolean) => void;
};

export default function Topbar({ photoURL, setIsEdit }: TopbarProps) {
  return (
    <div className="top-bar">
      <div className="topbar-left">
        <img
          className="docs-icon"
          src={docsIcon}
          alt="Docs Icon"
          onClick={() => setIsEdit(false)}
        />
        <p className="top-title">Docs</p>
      </div>

      <div className="dropdown-right">
        <CommonDropdown>
          <img className="top-image" src={photoURL} alt="User Avatar" />
        </CommonDropdown>
      </div>
    </div>
  );
}
