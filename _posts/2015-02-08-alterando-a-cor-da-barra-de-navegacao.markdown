---
layout: post
title:  "Alterando a cor da barra de navegação com o theme-color"
date:   2015-02-08 14:34:25
categories: html
tags: 
image: /assets/article_images/2015-02-08-alterando-a-cor-da-barra-de-navegacao/534421887_e17afcac3a_o.jpg
---
O primeiro post do meu blog será sobre uma meta tag que nos possibilita colorir a barra de ferramentas do sistema operacional móvel e do navegador. Esta meta tag foi desenvolvida para substituir as soluções proprietárias como `msapplication-navbutton-color` para o Internet Explorer e `apple-mobile-web-app-status-bar-style` para o Safari mobile.

# Sintaxe
A sintaxe é muito simples, você terá apenas que definir uma nova meta tag com o atributo name `theme-color` e o valor deve ser qualquer cor válida do CSS.
{% highlight html %}
<meta name="theme-color" value="red">
{% endhighlight %}

Você pode informar um valor hexadecimal, RGB ou o [nome da cor][color-name].

![Exemplo no Chrome 39 para o Android Lollipop](/assets/article_images/2015-02-08-alterando-a-cor-da-barra-de-navegacao/chrome-android-39.png "Exemplo no Chrome 39 para o Android Lollipop")

# Exemplo
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="theme-color" content="#0000ff">

  <title>theme-color</title>
</head>
<body>
</body>
</html>
{% endhighlight %}

Acesse <a href="http://jsbin.com/wavenu/3/" target="_blank" title="esta URL">esta URL</a> no seu celular ou escaneie o QR code para ver o exemplo funcionando.
<div id="qrcode-jsbin" class="js-qrcode" data-url="http://jsbin.com/wavenu/3/"></div>

# Suporte
Hoje apenas o Google Chrome 39 para o Android Lollipop e o Firefox OS 2.1 possuem suporte para esta tag.

| Propriedade &nbsp;&nbsp;&nbsp; | ![](/assets/images/browsers/chrome-android_32x32.png "Chrome Android")&nbsp;&nbsp;&nbsp; | ![](/assets/images/browsers/firefox_32x32.png "Firefox OS")&nbsp;&nbsp;&nbsp; | ![](/assets/images/browsers/opera_32x32.png "Opera")&nbsp;&nbsp;&nbsp; | ![](/assets/images/browsers/internet-explorer_32x32.png "Internet Explorer")&nbsp;&nbsp;&nbsp; | ![](/assets/images/browsers/safari_32x32.png "Safari")&nbsp;&nbsp;&nbsp;
| :-------------: |  :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |
theme-color &nbsp;&nbsp;&nbsp; | 39&nbsp;&nbsp;&nbsp; | 2.1&nbsp;&nbsp;&nbsp; | ---&nbsp;&nbsp;&nbsp; | ---&nbsp;&nbsp;&nbsp; | ---&nbsp;&nbsp;&nbsp; |

# Referências
- [http://updates.html5rocks.com/2014/11/Support-for-theme-color-in-Chrome-39-for-Android][html5rocks]
- [https://github.com/whatwg/meta-theme-color][whatwg]


[color-name]: http://www.crockford.com/wrrrld/color.html
[whatwg]: https://github.com/whatwg/meta-theme-color
[html5rocks]: http://updates.html5rocks.com/2014/11/Support-for-theme-color-in-Chrome-39-for-Android