<template>
  <div class="page">
    <div class="question">
        <h1>Get In touch</h1>
      </div>
    <div class="form">
      <div class="form_fields">
        <form
          class="actual_form"
          action="https://formspree.io/f/mjvzoeoy"
          method="post"
        >
          <div class="one_field">
            <p>
              First Name
              <span class="star">*</span>
            </p>
            <input type="text" ref="first_name" name="firstname" />
          </div>
          <div class="one_field">
            <p>
              Last Name
              <span class="star">*</span>
            </p>
            <input type="text" ref="last_name" name="lastname" />
          </div>
          <div class="one_field">
            <p>
              Email
              <span class="star">*</span>
            </p>
            <input type="email" ref="email" name="email" />
          </div>
          <div class="one_field">
            <p>
              Message
              <span class="star">*</span>
            </p>
            <textarea ref="text" name="message"></textarea>
          </div>
          <input class="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}
.page {
  display: grid;
  place-items: center;
  margin: 10vh 0px;
}
.form {
  display: grid;
  place-items: center;
  width: 100%;
  .form_fields {
    width: 100%;
    display: grid;
    input[type='text'],
    input[type='email'],
    textarea {
      padding: 20px 0px;
      border: 1px solid #4b8bbe;
      border-radius: 5px;
    }
  }
}
.actual_form {
  display: grid;
  gap: 10px;
  input[type='submit'] {
    display: grid;
    justify-self: center;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #4b8bbe;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #ffd43b;
    }
  }
}
.one_field {
  display: grid;
  gap: 10px;
  width: 100%;
  p {
    font-size: 1.2rem;
  }
}
h1 {
  font-weight: bold;
  font-size: 10vw;
  color: #4b8bb4;
}

.question {
  width: 100%;
  display: grid;
  place-items: center;
  text-decoration: underline #ffd43b;
}

@media only screen and (min-width: 600px) {
  .form {
    width: 600px;
  }
  .question{
    h1{
      font-size: 5rem;
    }
  }
}
</style>
