import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [users] = useState([
        { id: 1, name: 'Jou Doe'},
        { id: 2, name: 'John Doe'}
    ])

    const [projects] = useState([
        { id: 1, name: 'Project 1', userId : 1},
        { id: 2, name: 'Project 2', userId : 2}
    ])

    // function to get the username by id
    const getUserName = (id) => {
        const user = users.find(user => user.id === id);
        return user ? user.name : 'Unknown user';
    }

    return (
        <AppContext.Provider value={{ users, projects, getUserName }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useAppContext }