import Pagination from 'react-bootstrap/Pagination';
import './pagination-item.css';


const PaginationItem = () => {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item page-prev">
                    <a className="page-link l-icon" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item page-next">
                    <a className="page-link r-icon" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default PaginationItem;