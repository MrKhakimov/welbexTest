import './styles.scss'

const tableHeaderData = [
    {id: 1, name: 'Дата'},
    {id: 2, name: 'Название'},
    {id: 3, name: 'Количество'},
    {id: 4, name: 'Расстояние'},
]

const TH = ({name}) => {
    return <div className={'table-th'}>{name}</div>
}

const TD = ({name}) => {
    return <div className={'table-td'}>{name}</div>
}

const TR = ({children}) => {
    return <div className={'table-row'}>{children}</div>
}

export const Table = ({data, loading}) => {
    return (
        <div className={'table-wrapper'}>
            {
                loading ?
                    <div className={'table-center-info table-loading'}>Загрузка...</div> :
                    !data.length ? <div className={'table-center-info table-empty'}>Список пуст</div> : null
            }

            <div className={'table-head'}>
                <TR>
                    {tableHeaderData.map(el => {
                        return <TH name={el.name} key={el.id} />
                    })}
                </TR>
            </div>

            <div className={'table-body'}>
                {data.map(item => {
                    const date = new Date(item.publish_date)
                    return (
                        <TR key={item.id}>
                            <TD name={date.toLocaleDateString()} />
                            <TD name={item.title} />
                            <TD name={item.distance} />
                            <TD name={item.count} />
                        </TR>
                    );
                })}
            </div>
        </div>
    )
}
