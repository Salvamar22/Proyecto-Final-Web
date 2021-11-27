const TabContainer = ( {className="", tabIndex, tabController, children} ) => {
    return (
        (tabIndex === tabController) &&
            <div className={className}>
                { children}
            </div>
    )
}

export default TabContainer;
