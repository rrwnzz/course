import '../css/footer.css'
export default function Footer(){
    return(
        <div id='footer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
            <div>
                <h2>Quick Links</h2>
                <ul>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li>QA</li>
                </ul>
            </div>
            <div>
                <h2>Main Menu</h2>
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Menu</li>
                    <li>Courses</li>
                </ul>
            </div>
            <div id='whohleFooter'>
                <h2>Payment</h2>
                <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrTDxeHgBWrog8NZyWJ8NHWAGbxedAz3m5g&s'></img>
                <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcDFyEg-wapq0n8xyzBu-tpUICJKnkGOVTg&s'></img>
                <img width={50} src='https://totaltele.com/wp-content/uploads/2022/08/m-pesa.png'></img>
                <img width={50} src='https://cdn.bitrefill.com/content/cn/b_rgb%3AFFFFFF%2Cc_pad%2Ch_720%2Cw_1280/v1557745925/airtel.webp'></img>
                <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KrmppgvS53xRbVYbffw1FRGUBpny9FMmpg&s'></img>
                <img width={50} src='https://www.weareplanet.com/sites/default/files/2025-02/62b1e77b56b6848f8bec9031.png'></img>
            </div>
           <div id='Social'>
                <h2>Soical Media</h2>
                <i class="fa-brands fa-facebook">
                    <p>facebook</p>
                </i>
                <i class="fa-brands fa-instagram">
                    <p>instagram</p>
                </i>
                <i class="fa-brands fa-linkedin">
                    <p>Linkedlne</p>
                </i>
           </div>
        </div>
    )
}