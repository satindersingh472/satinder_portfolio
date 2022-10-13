<template>
  <div class="page">
    <div class="form">
      <div class="form_heading">
        <h2>Get In Touch</h2>
      </div>
      <div class="form_fields">
      <form class="actual_form" action="https://formspree.io/f/mjvzoeoy" method="post">
        <div class="one_field">
          <p>First Name<span class="star">*</span></p>
          <input type="text" ref="first_name" name="firstname"/>
        </div>
        <div class="one_field">
            <p>Last Name<span class="star">*</span></p>
            <input type="text" ref="last_name" name="lastname"/>
        </div>
        <div class="one_field">
            <p>Email<span class="star">*</span></p>
            <input type="email" ref="email" name="email">
        </div>
        <div class="one_field">
            <p>Message<span class="star">*</span></p>
            <textarea ref="text" name="message" ></textarea>
        </div>
      <input type="submit" value="submit">
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
*{
  padding:0px;
  margin: 0px;
}
.page{
  display: grid;
  place-items: center;
  margin: 10vh 0px;
}
.form{
  display: grid;
  place-items: center;
  width: 100%;
  .form_heading{
    h2{
      font-size:2rem;
      font-weight:bold;
    }
  }
  .form_fields{
    width:100%;
    display:grid;
    input[type=text],input[type=email],textarea{
      padding: 20px 0px;
      background: #FFD43B;
      border:none;
    }
  }
}
.actual_form{
  display:grid;
  gap: 10px;
   input[type=submit]{
      display: grid;
      justify-self:center;
      padding: 10px;
      margin:10px;
    }
}
.one_field{
  display: grid;
  gap: 10px;
  width: 100%;
  p{
    font-size: 1.3rem;
  }
}

@media only screen and (min-width:800px){
  .form{
    width:60vw;
  }
}

</style>
