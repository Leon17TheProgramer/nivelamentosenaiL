const titulo = document.querySelector('.titulo');
const imagemPerfil = document.querySelector('.image-perfil');
const loginPerfil = document.querySelector('.login-perfil');
const segPerfil = document.querySelector('.seg-perfil');
const repPerfil = document.querySelector('.rep-perfil');
const bioPerfil = document.querySelector('.bio-perfil');
const locPerfil = document.querySelector('.loc-perfil');
const urlPerfil = document.querySelector('.url-perfil');

const getInfo = async () =>{
    const response = await fetch('https://api.github.com/users/Leon17TheProgramer');
    const data = await response.json();
    console.log(data);
    console.log(response);
    if(!data)
    {
        titulo.innerHTML = 'Leon Gabriel';
        imagemPerfil.setAttribute('src','https://placeholder.co/100x100');
        repPerfil.innerHTML = 'Erro';
        bioPerfil.innerHTML = `"[REDACTED]"`
        segPerfil.innerHTML = `Seguidores (Erro) e seguindo (Erro) perfis.`;
        loginPerfil.innerHTML = "Leon17TheProgramer";
        locPerfil.innerHTML = `Local: Backrooms.`;
        urlPerfil.innerHTML = `Link: Erro`;
    } else {
        titulo.innerHTML = data.name;
        imagemPerfil.setAttribute('src',data.avatar_url);
        repPerfil.innerHTML = data.public_repos;
        bioPerfil.innerHTML = `"${data.bio}"`
        segPerfil.innerHTML = `Seguidores (${data.followers}) e seguindo (${data.following}) perfis.`;
        loginPerfil.innerHTML = data.login;
        locPerfil.innerHTML = `Local: ${data.location}`;
        urlPerfil.innerHTML = `Link: ${data.url}`;
    }
}

getInfo()