<template>
  <div>
    <div class="form">
      <div class="form_heading">
        <h2>Get In Touch</h2>
      </div>
      <form action="https://formspree.io/f/mjvzoeoy" method="post">
      <div class="form_fields">
        <div class="one_field">
          <p>First Name<span class="star">*</span></p>
          <input type="text" ref="first_name" name="firstname" placeholder="First Name" />
        </div>
        <div class="one_field">
            <p>Last Name<span class="star">*</span></p>
            <input type="text" ref="last_name" name="lastname" placeholder="Last Name"/>
        </div>
        <div class="one_field">
            <p>Email<span class="star">*</span></p>
            <input type="email" ref="email" name="email" placeholder="email">
        </div>
        <div class="one_field">
            <p>Message<span class="star">*</span></p>
            <textarea ref="text" name="message" ></textarea>
        </div>
      </div>
      <input type="submit" value="submit">
      </form>
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
.form{
  display: grid;
  place-items: center;
}

</style>
