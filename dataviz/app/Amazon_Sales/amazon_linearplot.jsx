const amazon_linearplot = () => {

    const data=d3.csv(filepath)
    return (
      <Linearplot data={data} />
        
        
    );
}