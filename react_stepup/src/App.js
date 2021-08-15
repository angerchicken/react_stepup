import { useState, useCallback } from "react";
import { ChildArea } from './components/ChildArea';

export const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const onChangetext = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);
  return (
    <>
      <input value={text} onChange={onChangetext} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </>
  );
}
