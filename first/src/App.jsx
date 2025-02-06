import "./App.css"
import navbarImg from './assets/navbar.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import img9 from './assets/img9.png';
import img11 from './assets/img11.png';
import img12 from './assets/img12.png';
import img13 from './assets/img13.png';
import img14 from './assets/img14.png';
import img15 from './assets/img15.png';
import img16 from './assets/img16.png';
import img17 from './assets/img17.png';
import img18 from './assets/img18.png';
export default function App(){
  return <>
  <div className="navbar">
<div className="imgNav">
  <img src={navbarImg} alt="navbar" />
</div>
<div className="textNav">
  <p className="p1">Business areas</p>
  <p className="p1">Featured imahes</p>
  <p className="p1">Gear cage</p>
  <p className="p1">Contact</p>
  <p className="p2">Get template</p>
</div>
  </div>

<img src={img1} alt="mountine" className="img1"/>

<div className="container1">
  <h5 className="h5_1">Photographer & Filmmaker</h5>
  <h1 className="h1_1">Aperture Studios</h1>
  <p className="p_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
</div>

<div className="container2">
<img src={img2} alt="mountine" className="img2"/>
<img src={img3} alt="mountine" className="img3"/>
<img src={img4} alt="mountine" className="img4"/>
<img src={img5} alt="mountine" className="img5"/>
</div>

<div className="container3">
  <h2 className="h2_1">What we do.</h2>
  <p className="p_2">The areas that we're specialized in.</p>
</div>

<div className="container4">
 <div className="content1">
  <img src={img6} alt="mountine" className="img6"/>
  <img src={img7} alt="mountine" className="img7"/>
 </div>
 <div className="content2">
  <img src={img8} alt="mountine" className="img8"/>
  <img src={img9} alt="mountine" className="img9"/>
 </div>
</div>

<div className="container5">

<p className="p_3">Monstera Leafs <br /> Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
{/* 
<div className="content3">
<img src={img2} alt="mountine" className="img2"/>
<img src={img3} alt="mountine" className="img3"/>
<img src={img4} alt="mountine" className="img4"/>
<img src={img5} alt="mountine" className="img5"/>

</div> */}
</div>

<div className="container6">
  <div className="content3">
    <div className="text1">
    <h6 className="h6_1">The Gear cage</h6>
    <h2 className="h2_2">The tools that we use.</h2>
    <p className="p_4">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
  <img src={img11} alt="" />
  </div>
  </div>
  <div className="content4">
<img src={img12} alt="" className="img12" />
  </div>
</div>

<div className="container7">
  <p className="p_3">Monstera Leafs <br /> Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
</div>
<div className="container8">
  <h2 className="h2_3">Past clients</h2>
  <p className="p_4">Trusted by your favourite companies</p>
<div className="content5">
  <img src={img14} alt="mountine" className="img14"/>
  <img src={img15} alt="mountine" className="img14"/>
  <img src={img16} alt="mountine" className="img14"/>
  <img src={img17} alt="mountine" className="img14"/>
  <img src={img18} alt="mountine" className="img14"/>
</div>
</div>
<div className="container9">
  <p className="p_3">Monstera Leafs <br /> Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
</div>

<div className="container10">
  <h1 className="h1_3">Need help with photography <br /> or videography?</h1>
  <p className="p_5">We're here for you!</p>
  <img src={img11} alt="" />
</div>

<footer>
        <div class="end1">
            <div class="part1">
                <p>Menu</p>
                <p>New arrivals</p>
                <p>New arrivals</p>
                <p>New arrivals</p>
                <p>Popular this week</p>
                <p>All products</p>
            </div>
            <div class="part2">
              <p>Categories</p>
              <p>Crockery</p>
              <p>Furniture</p>
              <p>Homeware</p>
              <p>Plant pots</p>
              <p>Chairs</p>
              <p>Crockery</p>
            </div>
            <div class="part3">
                <p>Our company</p>
                <p>About us</p>
                <p>Vacancies</p>
                <p>Contact us</p>
                <p>Privacy</p>
                <p>Returns policy</p>
            </div>
            <div class="part4">
                <p>Join our mailing list</p>
                <div class="part44">
                    <input type="text" placeholder="your@email.com"/>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
        <div class="end2">
            <div class="the1">
                <p>Copyright 2022 Avion LTD</p>
            </div>
            <div class="the2">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-skype"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest"></i>
            </div>
        </div>
    </footer>
</>
}