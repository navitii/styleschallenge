import '../Box.css';
import Card from './Card.jsx';
function Box() {
    return(
    <>
    <div className='container'>
        <div className='row-container'>
                <div className='select-game'>
                    <i class="ri-sword-line"></i>
                    <select className='select1'>
                    <option selected value="Select a Game">Select a Game</option>
                    </select>
                </div>

            <div className='search'>
                < i class="ri-search-line"> </i> <input type="text" className='select2' placeholder='Search' />
            </div>

            <div className='select-price'>
                <div className='display-block'><label className='small'>Price</label></div>
                <i class="ri-handbag-line"></i>
                <select className='select3'>
                <option selected value="All">All</option>
                </select>
            </div>

            <div className='item-type'>
                <div className='display-block'><label className='small'>Item Type</label></div>
                <i class="ri-quill-pen-fill"></i>
                <select className='select3'>
                <option selected value="All">All</option>
                </select>
            </div>
        </div>
        <div className='center-box'>
          <div className='box'>
            <div className='row-sort'>
                <div className='text'>
                    <p className='gray'> Showing 15 of 30 </p>
                </div>
                <div className='select'>
                <i class="ri-align-justify"></i>
                    <select className='featured'>
                        <option selected value="All">Featured</option>
                    </select>
                    
                </div>
            </div>
            <div className='cards-container'>
                <Card/>
            </div>
            <div className='pagination'>
                <ul className='pagination'>
                    <li className='li1'>1</li>
                    <li className='li2'>2</li>
                    <li className='li3'>3</li>
                </ul>
            </div>
          </div>
        </div>
        <div className='center-pay'>
            <div className='payment-methods'>
                <div className='row-payment'>
                    <div className='logos1'>
                        <img className='visa-logo' src='../img/visa logo.png'/>
                        <img className='mastercard-logo' src='../img/Mastercard-logo.svg.png'/>
                        <img className='american-logo' src='../img/American-Express-Color.png'/>
                        <img className='skrill-logo' src='../img/skrill-logo.png'/>
                    </div>
                    <div className='logos2'>
                        <img className='usdt-logo' src='../img/usdt.png'/>
                        <img className='bitcoin-logo' src='../img/bitcoin-btc-logo.png'/>
                        <img className='eth-logo' src='../img/eth.png'/>
                        <img className='lite-logo' src='../img/lite.png'/>
                        <div className='text1'><a href='#' className='more'>and 50+ more</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='center-footer'>
            <div className='footer'> 
               <div className='row-logo'>
                    <div className='social-media'>
                        <img className='logo' src='../img/fb.png'/>
                        <img className='logo' src='../img/ig.png'/>
                        <img className='logo' src='../img/twitter.png'/>
                        <img className='logo' src='../img/discord.png'/>
                    </div>
               </div>

               <hr className='line' color='#5a5ed3'></hr>

               <div className='row-footer'>
                <div className='block1'>
                    <img className='logo-footer' src='chicks-logo-large.png'/>
                    <p>support@chicksgold.com</p>
                </div>

                <div className='block2'>
                    <ul>
                        <li className='title'>Chicks Gold</li>
                        <li><a className='gray' href="#">Games</a></li>
                        <li><a className='gray' href="#">About Us</a></li>
                        <li><a className='gray' href="#">Blog</a></li>
                        <li><a className='gray' href="#">Sitemap</a></li>
                    </ul>
                </div>

                <div className='block3'>
                    <ul>
                        <li className='title'>Support</li>
                        <li><a className='gray' href="#">Contact Us</a></li>
                        <li><a className='gray' href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className='block4'>
                    <ul>
                        <li className='title'>Legal</li>
                        <li><a className='gray' href="#">Privacy Policy</a></li>
                        <li><a className='gray' href="#">Terms of Service</a></li>
                        <li><a className='gray' href="#">Copyright Policy</a></li>
                    </ul>
                </div>

                <div className='block5'>
                    <img className='stars' src='../img/stars-5-1.png'/> 
                    <p className='gray'> Trustpilot Reviews  </p>
                </div>
               </div>
               <p className='gray-copyright'>© 2017 - 2023 Chicksgold.com. All Rights Reserved</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Box