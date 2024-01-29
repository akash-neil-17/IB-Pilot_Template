 class Sidebar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div id="bdSidebar"
        class="d-flex flex-column flex-shrink-0 p-3 text-black offcanvas-md offcanvas-start"
        style="width: 280px;">
        <a href="#" class="navbar-brand">
            <div class="text-center">
                <a href="./dashboard.html">   <img src="../img/rupali-logo.png" alt="Rupali Bank Logo" id="navLogo"></a>
            </div>
        </a>

        <ul class="mynav nav nav-pills mb-auto mt-5">
            <li class="nav-item mb-1 active">
                <!-- <a href="#" class="active">
                    <i src="../icon/home-2.svg"></i>
                    My Account
                </a> -->
                <a href="./dashboard.html">
                    <img src="../icon/home-2.svg">
                    My Account
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="./newloan.html" class="">
                    <img src="../icon/wallet-check.svg">
                    Payment

                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="./newfundTransfer.html" class="">
                    <!-- <i class="isax-profile-2user"></i> -->
                    <img src="../icon/empty-wallet-change.svg">
                    Fund Transfer
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="#" class="">
                    <!-- <i class="fa-solid fa-star"></i> -->
                    <img src="../icon/profile-2user.svg">
                    Beneficiary
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="#" class="">
                    <img src="../icon/mobile.svg">
                    <!-- <i class="fa-solid fa-cart-shopping"></i> -->
                    Mobilr Recharge
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="#" class="">
                    <img src="../icon/receipt.svg">
                    <!-- <i class="fa-solid fa-user"></i> -->
                    Utility Bill
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="#" class="">
                    <img src="../icon/empty-wallet.svg">
                    <!-- <i class="fa-solid fa-user"></i> -->
                    Account Services
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="#" class="">
                    <img src="../icon/cards.svg">
                    <!-- <i class="fa-solid fa-user"></i> -->
                    Card Services
                </a>
            </li>
        </ul>

        <div>
            <ul class="mynav nav nav-pills mb-auto mt-5">
                <li class="nav-item mb-1">
                    <a href="#" class="">
                        <img src="../icon/setting-3.svg">
                        <!-- <i class="isax-smart-home2"></i> -->
                        Settings
                    </a>
                </li>
                <li class="nav-item mb-1">
                    <a href="../index.html" class="">
                        <img src="../icon/logout.svg">
                        <!-- <i class="isax-empty-wallet-change"></i> -->
                        Logout

                    </a>
                </li>
                <li class="nav-item mb-1">
            <!--
                    <div style="display: inline; float: inline-end;">Your last login time: {&nbsp}

                        <span id="currentTime" style="display: inline; float: inline-end;"></span>
                    </div>
                    -->
                </li>
                <li>

                </li>
            </ul>
            <footer class="text-center fs-6 fw-lighter lh-sm copyRt"> Copyrights 2024 SIL Bank V 1.0.0.0</footer>

        </div>
    </div>
        `
        
    }
 };
 class SmallNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="p-2 d-md-none d-flex text-white bg-dark fixed-top ">
        <a "href="#" class="text-white" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar">
            <img src="../img/rupali-logo.png" style="height: 30px; align:center;">
        </a>
        <span class="mx-3">INTERNET BANKING</span>
    </div>
        `
    }
 };
 class Aboutus extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<div class="row text-center">
        <div class="col-lg-9 col-md-12 col-sm-12 p-3">
            <div class="btn-group d-flex" role="group">
                <button type="button" class="btn btn-primary"
                    style="background-color:rgba(46, 157, 220, 0.05);border: none;"><span
                        style="color: black;">About Us</span> </button>
                <button type="button" class="btn btn-primary"
                    style="background-color:rgba(46, 157, 220, 0.05);border: none;"><span
                        style="color: black;">FAQs</span> </button>
                <button type="button" class="btn btn-primary"
                    style="background-color:rgba(46, 157, 220, 0.05);border: none;"><span
                        style="color: black;">Locate Us</span> </button>
                <button type="button" class="btn btn-primary"
                    style="background-color:rgba(46, 157, 220, 0.05);border: none;"><span
                        style="color: black;">Contact Us</span> </button>
                <ul class="mynav nav nav-pills flex-row">
                    <li class="nav-item mb-1">
            
                        <a href="#">
                            <img src="../icon/sms-notification.svg"/>


                        </a>
                    </li>
                    <li class="nav-item mb-1">
                        <a href="#" class="">
                            <img src="../icon/notification.svg"/>

                        </a>
                    </li>
                </ul>



            </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-12 float-end text-center">
            <div class="row" style="display: flex;
            width: 100%;
            padding: 10px 19px;
            justify-content: flex-end;
            align-items: center;
            background: var(--White, #FFF);">
                <div class="col-7 text-end">
                    <span style="color: var(--Medium-Gray, #E0E0E0);
                    font-family: Poppins;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;">Welcome</span>
                    <br/>
                    <span style="color: var(--Almost-Black, #333);
                    font-family: Poppins;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;">Master Yoda</span>
                </div>
                <div class="col-2 float-end" style="width: 44px;
                height: 44px;border-radius: 10px;
                border: 2px solid var(--Medium-Gray, #E0E0E0);
                background: url(<path-to-image>), lightgray 50% / cover no-repeat;">
                    <img src="../icon/profile-2user.svg"/>

                </div>
            </div>
        </div>
    </div>`
        
    }
 };
 class AD extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
    
                        <div class="row"style="height:100%; align-self:end;">
                            <!-- BIG AD -->
                            <div class="col-xl-9 col-lg-12 col-mb-12 col-sm-12 text-start">
                                <img src="../img/bigAD.png" alt="BIG AD" style="width:100%;">
                            </div>
                            <!-- SM AD -->
                            <div class="col-xl-3 col-lg-12 col-mb col-sm text-end">
                                <img src="../img/smallAD.png" alt="SMALL AD" style="width:100%;">
                            </div>
                        </div>



                  
        `
    }
 };
customElements.define("app-sidebar",Sidebar);
customElements.define("app-smallnavbar",SmallNavbar);
customElements.define("app-aboutus",Aboutus);
customElements.define("app-ad",AD);