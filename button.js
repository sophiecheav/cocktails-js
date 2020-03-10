document.querySelector('.accept-button')
.addEventListener('click', function()
{confirm('Êtes-vous VRAIMENT sûr.e d’accepter les cookies ??');
document.getElementById('remove-button').style.display="none";
});
// aussi possible pour dernière ligne : document.querySelector('accept-button').remove();});

document.querySelector('.refuse-button')
.addEventListener('click', function()
{alert('Aaaaarrrrrrrffffff... Vous avez refusé les cookies...');
alert('C’est biiiieeeeeeen');
});

document.querySelector('.mouseenter-button')
.addEventListener('mouseenter', function()
{alert('J’ai été survolé !');
});

document.querySelector('.changecolor-button')
.addEventListener('click', function()
{document.querySelector('h1').style.color="#862019";
});
// aussi possible {document.getElementById('id de h1 > nom_site').style.color="blue";});

document.querySelector('.changepage-button')
.addEventListener('click', function()
{document.body.style.background="#40b30c";
});
// aussi possible {document.querySelector('body').style.color="green";});
