import React from 'react'

const HomeBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
                <a class="navbar-brand" >
                    <h3 class="text-white">
                        Lookoo!
                    </h3>
                </a>
                <button class="navbar-toggler bg-success" style={{ color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item ms-1 me-1">
                            <a class="nav-link text-white bg-dark bg-gradient rounded-1" href="/match">MATCHER</a>
                        </li>
                        <li class="nav-item ms-1 me-1">
                            <a class="nav-link text-white bg-dark bg-gradient rounded-1" href="/services">PRODUCTS</a>
                        </li>
                        <li class="nav-item ms-1 me-1">
                            <a class="nav-link text-white bg-dark bg-gradient rounded-1" aria-current="page" href="/blog">BLOGS</a>
                        </li>
                        <li class="nav-item ms-1 me-1">
                            <a class="nav-link text-white bg-dark bg-gradient rounded-1" aria-current="page" href="/about">ABOUT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default HomeBar