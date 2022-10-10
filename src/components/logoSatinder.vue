<template>
    <div>
<h2>{S@t<span class="blue">i</span>n<img class="vscode" src="@/assets/vscode.png"/>e<span class="r">r</span>_S<span class="yellow">i</span>n<span class="g">G</span>h}</h2>
      
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.blue{
    color: #4b8bbe;
}
.yellow{
    color: #FFD43B;
}
.g{
  background: linear-gradient(#4285F4,#DB4437,#F4B400,#4285F4,#0F9D58);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.r{
  color: #61DBFB;
}
.vscode{
    height: 25px;
    transform: rotate(180deg);
}
h2,.blue,.yellow,.g,.r{
    font-weight: bold;
    font-size: 2rem;
  }
</style>