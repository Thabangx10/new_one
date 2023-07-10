<template>
  <section class="adminpage">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/bw0BSv85/comic-logo.jpg"
            class="logo"
            alt="Logo"
            width="100"
            height="80"
          />
        </a>
        <button
          class="navbar-toggler bg-black"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link"
                  >Products</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/admin" class="nav-link">Admin</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
.navbar .navbar-brand .logo {
  margin-right: 10px;
}

.navbar .navbar-nav .nav-item .nav-link {
  color: rgb(42, 42, 42);
  margin-inline: 10px;
}

.navbar .navbar-nav .nav-item .nav-link:hover {
  color: rgb(6, 6, 6);
}

.navbar-toggler {
  border-color: transparent;
}

.navbar-toggler:focus,
.navbar-toggler:hover {
  text-decoration: none;
  outline: none;
}

.offcanvas-header {
  padding: 1rem;
  background-color: #333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.offcanvas-body {
  padding: 1rem;
}
</style>
  