const db = require('../db')

class welbexController {
    async cratePost(req, res) {
        const {name, distance, count} = req.body
        const post = await db.query('INSERT INTO welbex (title, distance, count) values ($1, $2, $3) RETURNING *', [name, distance, count])
        res.json(post.rows[0])
    }

    async filterPost(req, res) {
        const PageSize = 5;
        const {count, name, page, distance, distance_type, count_type} = req.query
        const firstPageIndex = Math.abs((page - 1)) * PageSize;

        //query

        const query  =
            'SELECT * from welbex WHERE'
            + ` (distance ${distance_type === '1' ? '=' : distance_type === '2' ? '>' : '<'} $1)`
            + ` AND (count ${count_type === '1' ? '=' : count_type === '2' ? '>' : '<'} $2)`
            + ` AND (title LIKE $3)`

        const posts = await db.query(query, [parseFloat(distance), parseFloat(count), `%${name}%`])

        console.log('dsf', query, distance, typeof distance, typeof distance_type)

        const filtered = await db.query(query + ` LIMIT $4 OFFSET $5`,
            [parseFloat(distance), parseFloat(count), `%${name}%`, PageSize, firstPageIndex])

        console.log("filtered", posts)

        const data = {
            data: filtered.rows ? filtered.rows : [],
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(posts.rowCount / PageSize),
                totalItems: posts.rowCount,
                itemsInPages: PageSize,
            }
        }

        res.json(data)
    }

    async deletePost(req, res) {
        const id = req.params.id
        await db.query('DELETE FROM person where id = $1', [id])
        res.json({
            id: id,
            message: `post ${id} deleted`
        })
    }
}
module.exports = new welbexController()