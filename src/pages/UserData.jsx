import React from 'react';

const API ="https://jsonplaceholder.typicode.com/users";
// const search = "java";
// const API = `http://openlibrary.org/search.json?title=${search}`;

const UserData = ({user}) => {
  return (
      <>
        {
          user.map((currentUser) => {

            const { numFound } = currentUser;

            return(
                <tr>
                  <td>{numFound}</td>
                  {/*<td>{name}</td>*/}
                  {/*<td>{email}</td>*/}
                </tr>

            )

          })
        }

      </>
  )
}

export default UserData


//https://covers.openlibrary.org/b/id/240727-S.jpg


// ...singleBook,
//     // removing /works/ to get only id
//     id: (singleBook.id).replace("/works/", ""),
//     cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
// }
// });