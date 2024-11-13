import { useParams } from "react-router-dom"

function ProductScreen(){
    const params = useParams();
    const {slug} = params;
    return(
        <h1>Product Screen : {slug}</h1>
    )
}

export default ProductScreen