app.component('header-display', {
    template: `
     <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-white">
     <a class="navbar-brand ml-2 font-weight-bold" href="#"> <img src="img/Group 16 (1).svg" alt=""> <span style="font-family: 'Lora', serif; font-weight:500; margin-left: 20px;">Fojeh</span> </a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse"  id="navbarNav">
         <ul class="navbar-nav ml-auto">
             <li class="nav-item active mx-2">
             <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item mx-2">
             <a class="nav-link" href="about.html">About</a>
             </li> 
             <li class="nav-item dropdown mx-2">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Services
                 </a>
                 <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 <a class="dropdown-item" href="hall.html">Hall</a>
                 <a class="dropdown-item" href="lodging.html">Lodging</a>
                 <a class="dropdown-item" href="restaurant.html">Restaurant</a>
                 </div>
             </li>
             <li class="nav-item mx-4">
                 <a class="nav-link custom-button text-white text-center" style="background-color: #ff304f; padding: 10px 40px; border-radius: 25px;" href="contact.html">Contact Us</a>
             </li>
         </ul>
     </div>
     </nav>

     <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
     <ol class="carousel-indicators">
       <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
       <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
       <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
     </ol>
     <div class="carousel-inner">
       <div class="carousel-item active" style="background-image:linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5)), url(./img/log1.png);">
        
         <div class="carousel-caption d-none d-md-block">
           <h2>LARGE HALL UP TO 500 CAPACITY</h2>
           <!-- <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
         </div>

         <div class="carousel-caption d-block d-sm-none">
             <h4>LARGE HALL UP TO 500 CAPACITY</h4>
             <!-- <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
           </div>
       </div>
       <div class="carousel-item" style="background-image: linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5)), url(./img/about-pic.png);">
         
         <div class="carousel-caption d-none d-md-block">
           <h2  class="text-uppercase">  Open sit out bar with exquisite garden view</h2>
           <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->
         </div>


         <div class="carousel-caption d-block d-sm-none">
             <h4 class="text-uppercase">  Open sit out bar with exquisite garden view</h4>
             <!-- <4p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
         </div>
       
       </div>
       <div class="carousel-item" style="background-image: linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5)),url(./img/log2.png);">
        
             <div class="carousel-caption d-none d-md-block">
                 <h2 class="text-uppercase">Restaurant</h2>
             </div>

             <div class="carousel-caption d-block d-sm-none">
                 <h4 class="text-uppercase">Restaurant</h4>
                 <!-- <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
            </div>
       </div>
       </div>
     </div>
     <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="sr-only">Previous</span>
     </a>
     <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="sr-only">Next</span>
     </a>
   </div>



 <!-- <div class="background-hero">
     <div class="container">
          <h1>LARGE HALL UP TO 500 CAPACITY</h1>  
          <p>FOR WEDDINGS, BIRTHDAYS, MEEETING, END OF YEAR PARTIES.</p> 
          <a href="" class="btn btn-primary">Learn More</a>
     </div>
 </div>  -->

<!-- End of Header section -->

<div class="d-flex">
 
                   
</div>

<section class="welcome">  
    <div class="">
        <div class="container">
            <h4 class="custom-font">MORE THAN YOU CAN IMAGINE</h4>
           <div class="row">
               <div class="col-sm-12 col-md-8 col-lg-8">
                 <p>Welcome to fojeh event center, we are to serve you with great and
                     amazing services <br> from event hall, restaurant & bars, accommodations.
                 </p>
               </div>
               <div class="col-sm-12 col-md-4 col-lg-4">
                 <div>  <a href="contact.html" class=" btn" style="background-color: red; color:white; padding: 10px 40px; border-radius: 30px; border: 2px solid #ff304f;"> Book Now</a>
                 </div>
               </div>
           </div>
        </div>
    </div>
</section>

     </div>
    `
})