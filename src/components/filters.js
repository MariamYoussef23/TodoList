function Filters ({updateFilter, uncheckAll, checkAll}) {
    return (
        <div>
            <button onClick={() => updateFilter('All')}>All </button>
            <button onClick={() => updateFilter('Completed')}>Completed </button>
            <button onClick={() => updateFilter('Incomplete')}>Incomplete </button>
            <button onClick={checkAll}>Mark all as Completed </button>
            <button onClick={uncheckAll}>Mark all as Incomplete </button>
        </div>

    )
}

export default Filters 