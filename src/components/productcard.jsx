// write product card here

import Button from "./button";

function productCard(){
const productImage = 'https://dlcdnwebimgs.asus.com/files/media/8CF497C8-1A77-404F-ABF1-85822D3BE077/v1/img/gaming/pd.jpg'
const productName = 'Asus Strix G18'
const Price = '189000'
    return(
        <div>
            <p>{productName}</p>
           <img style={{ width: "300px" }}
           src={productImage} />
            <p>{Price}</p>
            <Button/>
        </div>
    );
}

export default productCard;




// product image
// - product name 
// - price