import './styles.scss';
import {useCallback, useState} from "react";
import classnames from "classnames";
import {useDebounceHook} from "../../utils/useDebounceHook";

// select types
// less = 0
// Equals = 1
// more = 2

export const Filter = ({filterChange}) => {
    const [toggleFilterDropdown, setToggleFilterDropdown] = useState(false);

    const toggleFilter = useCallback(() => {
        setToggleFilterDropdown(prev => !prev);
    }, [])

    const [form, setForm] = useState({
       title: '',
       count: 0,
       distance: 0,
       countType: 2,
       distanceType: 2,
    });

    const inputChange = useCallback((e) => {
        setForm(prev => {
           return {
               ...prev,
               [e.target.name]: e.target.value
           }
        });
    }, [])

    // custom debounce effect hook with delay  1000ms
    useDebounceHook(() => {
        filterChange(form);
    }, [form])

    return (
        <div className={'filter'}>

            <button className={'primary-btn'} onClick={toggleFilter}>Фильтр</button>

            <div className={classnames('filter-wrapper', {opened: toggleFilterDropdown})}>

                <div className={'form-item'}>
                    <div className={'form-label'}>Поиск</div>
                    <input
                        onChange={inputChange}
                        value={form.title}
                        className={'form-input'}
                        placeholder={'введите текст'}
                        name={'title'}
                        type="search"
                    />
                </div>

                <div className={'form-item'}>
                    <div className={'form-label'}>Количество</div>
                    <input
                        onChange={inputChange}
                        value={form.count}
                        className={'form-input'}
                        placeholder={'введите количество'}
                        name={'count'}
                        minLength={1}
                        type="number"
                    />
                    <select
                        onChange={inputChange}
                        value={form.countType}
                        className={'form-select'}
                        name="countType"
                    >
                        <option value="1">Равно</option>
                        <option value="2">Больше</option>
                        <option value="0">Меньше</option>
                    </select>
                </div>

                <div className={'form-item'}>
                    <div className={'form-label'}>Расстояние</div>
                    <input
                        onChange={inputChange}
                        value={form.distance}
                        className={'form-input'}
                        placeholder={'введите номер'}
                        name={'distance'}
                        minLength={1}
                        type="number"
                    />
                    <select
                        onChange={inputChange}
                        value={form.distanceType}
                        className={'form-select'}
                        name="distanceType"
                    >
                        <option value="1">Равно</option>
                        <option value="2">Больше</option>
                        <option value="0">Меньше</option>
                    </select>
                </div>

            </div>
        </div>
    )
}
