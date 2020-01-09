import React from 'react';
import MaterialTable from 'material-table';
import API from '../../lib/API';


export default function SermonTable() {
    
    const [state, setState] = React.useState({
        columns: [
            { title: 'Date', field: 'sermonDate' },
            { title: 'Book', field: 'bookBible' },
            { title: 'Title', field: 'title' },
            { title: 'Speaker', field: 'speaker' },
        ],
        data: []
    });

    React.useEffect(()=> {
        API.Sermons.get().then(results => {
            setState({...state, data: results.data})
        })
    }, [])

    return (
        <MaterialTable
            title="Sermons"
            columns={state.columns}
            data={state.data}
            // editable={{
            //     onRowAdd: newData =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 setState(prevState => {
            //                     const data = [...prevState.data];
            //                     data.push(newData);
            //                     return { ...prevState, data };
            //                 });
            //             }, 600);
            //         }),
            //     onRowUpdate: (newData, oldData) =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 if (oldData) {
            //                     setState(prevState => {
            //                         const data = [...prevState.data];
            //                         data[data.indexOf(oldData)] = newData;
            //                         return { ...prevState, data };
            //                     });
            //                 }
            //             }, 600);
            //         }),
            //     onRowDelete: oldData =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 setState(prevState => {
            //                     const data = [...prevState.data];
            //                     data.splice(data.indexOf(oldData), 1);
            //                     return { ...prevState, data };
            //                 });
            //             }, 600);
            //         }),
            // }}
        />
    );
}
