import { useGetUsers } from './useGetUsers'

export const UsersList: React.FC = () => {
  const { usersData, isLoading, error } = useGetUsers()
  console.log({ usersData, isLoading, error })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error.</p>
  }

  if (!usersData) {
    return null
  }

  return (
    <section
      style={{
        maxWidth: '40rem',
        margin: '0 auto',
      }}
    >
      <h2>Users</h2>

      <table
        style={{ width: '100%', borderSpacing: 0, borderCollapse: 'collapse' }}
      >
        <thead>
          <tr>
            <th></th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersData.data.map(
            ({ avatar, email, first_name, last_name, id }) => {
              const cellStyle = {
                padding: '1rem 0.5rem',
              }

              return (
                <tr key={id} style={{ borderBottom: '1px solid' }}>
                  <td style={cellStyle}>
                    <img
                      src={avatar}
                      alt={`${first_name} ${last_name} avatar`}
                      style={{
                        borderRadius: '50%',
                        height: '5rem',
                        width: '5rem',
                      }}
                    />
                  </td>
                  <td style={cellStyle}>{first_name}</td>
                  <td style={cellStyle}>{last_name}</td>
                  <td style={cellStyle}>{email}</td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </section>
  )
}
