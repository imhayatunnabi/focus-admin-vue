<template>
  <HeaderComponent></HeaderComponent>
  <SidebarComponent></SidebarComponent>
  <div class="content-wrap">
    <div class="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 p-r-0 title-margin-right">
            <div class="page-header">
              <div class="page-title">
                <h1>Hello, <span>Welcome Here</span></h1>
              </div>
            </div>
          </div>
          <!-- /# column -->
          <div class="col-lg-4 p-l-0 title-margin-left">
            <div class="page-header">
              <div class="page-title">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li class="breadcrumb-item active">Home</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section id="main-content">
          <slot name="backend"></slot>
          <FooterComponent></FooterComponent>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponent from '../../fixed/HeaderComponent.vue'
import SidebarComponent from '../../fixed/SidebarComponent.vue'
import FooterComponent from '../../fixed/FooterComponent.vue'
export default {
  name: 'MasterComponent',
  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>
<style></style>
