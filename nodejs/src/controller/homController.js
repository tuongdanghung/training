import pool from "../config/connectDB"
let getHomePage = async (req, res) => {
    // viet logic o day
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('select * from users where id = ?', [id])
    return res.send(JSON.stringify(user));
}

let createPage = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    await pool.execute(`insert into users(firstName, lastName, email, address) values (?,?,?,?) `, [firstName, lastName, email, address])
    return res.redirect('/')
}

let deletePage = async (req, res) => {
    let deleteId = req.body.deleteId
    await pool.execute(`delete from users where id = ?`, [deleteId])
    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('select * from users where id = ?', [id])
    return res.render('edit.ejs', { dataUser: user[0] });
}

let updatePage = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body
    await pool.execute('update users set firstName= ?, lastName = ?, email = ?, address = ? where id = ? ', [firstName, lastName, email, address, id])
    return res.redirect('/')
}

export default { getHomePage, getDetailPage, createPage, deletePage, getEditPage, updatePage }