

import React from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" />;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>;

export default function Home() {
    return (

        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <div class="container ">

                <ul class="navbar-nav">
                    <span class="navbar-brand" href="#">
                        <img src="https://meta.vn/Data/image/2021/09/30/quoc-hoa-cua-cac-nuoc-3.jpg" alt="Logo" style={{ width: 40 }} class="rounded-pill" ></img>
                    </span>
                    <li> <a class="nav-link active" href="#">Home</a></li>
                    <li> <a class="nav-link active" href="/devices">OMS</a></li>
                    <li> <a class="nav-link active" href="/rules">Rule</a></li>
                </ul>
                <ul>
                    <span class="nav-item active dropdown ">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" style={{ color: 'ActiveBorder' }} >smartpH</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/signup">Sign up</a></li>
                            <li><a class="dropdown-item" href="/signin">Sign in</a></li>
                            <li><a class="dropdown-item" href="/logout">Log out</a></li>
                        </ul>
                    </span>
                </ul>

            </div>

        </nav>
    )
}