import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from 'redux2/localeSlice';

export const LangSwitcher = () => {
    const dispatch= useDispatch()
  const lang = useSelector(state => state.locale.lang);
  return (
    <div>
      <select value={lang} onChange={e=>dispatch(changeLang(e.target.value))}>
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
};
