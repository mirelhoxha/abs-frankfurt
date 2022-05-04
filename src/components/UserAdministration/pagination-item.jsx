import Pagination from 'react-bootstrap/Pagination';
import './pagination-item.css';


const PaginationItem = () => {
    // return ( 
    // <div className='pagination'>
    //         <Pagination>
    //             <Pagination.First />
    //             <Pagination.Prev />
    //             <Pagination.Item>{1}</Pagination.Item>
    //             <Pagination.Ellipsis />
            
    //             <Pagination.Item>{10}</Pagination.Item>
    //             <Pagination.Item>{11}</Pagination.Item>
    //             <Pagination.Item active>{12}</Pagination.Item>
    //             <Pagination.Item>{13}</Pagination.Item>
    //             <Pagination.Item disabled>{14}</Pagination.Item>
            
    //             <Pagination.Ellipsis />
    //             <Pagination.Item>{20}</Pagination.Item>
    //             <Pagination.Next />
    //             <Pagination.Last />
    //         </Pagination>
    // </div>    
    // );
    return (
        <nav className='nav-pag' aria-label="Page navigation example">
            <ul className="pagination pagination-md justify-content-first">
                <li className="page-item">
                <a className="page-link r-icon" href="#" aria-label="Previous">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item">
                <a className="page-link l-icon" href="#" aria-label="Next">
                    <span aria-hidden="true" >&laquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    );
};
export default PaginationItem;