// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let lista = ["leche", "huevos", "mayo", "coca-cola", "fernet"];
lista.push("Aceite de Girasol");
lista.pop();

let peliculas = [
    {Título: "Whiplash", Director: "Damien Chazelle", Fecha: 2014},
    {Título: "El Padrino", Director: "Francis Ford Coppola", Fecha: 1970},
    {Título: "Scarface", Director: "Brian De Palma", Fecha: 1984}
]

const nuevas = peliculas.filter((post2010) => post2010.Fecha > 2010);
const directores = peliculas.map((director) => director.Director);
const pelis = peliculas.map((film) => film.Título);
const concatDatos = directores.concat(pelis)
const propagDatos = [...directores, ...pelis]