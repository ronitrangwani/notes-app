import { useState } from "react";
import Topbar from "../Topbar";
import CreateDoc from "../CreateDoc";
import DocsList from "../DocsList";
import "./index.scss";

type DocumentProps = {
  photoURL: string;
};

export default function Document({ photoURL }: DocumentProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");

  const openDoc = (id: string) => {
    setIsEdit(!isEdit);
    setId(id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <Topbar photoURL={photoURL} setIsEdit={setIsEdit} />
      <CreateDoc id={id} isEdit={isEdit} handleEdit={handleEdit} />
      {isEdit ? <></> : <DocsList openDoc={openDoc} />}
    </div>
  );
}
