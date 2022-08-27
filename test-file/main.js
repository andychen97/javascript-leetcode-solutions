// if (!req.body.name || !req.body.course | !req.body.score) {
//   res.send(400).json({ 'error' :'name, course, and score is a required field.'});

// if (req.body.score < 0 || req.body.score > 100) {
//   res.send(400).json({ 'error': 'score must be a integer between 0 and 100' });
// }

// const sql = `
//     insert into "grades" ("name", "course", "score")
//     values ($1, $2, $3)
//     returning *
//   `;
// const params = [req.body.name, req.body.course, req.body.score];
//   db.query(sql, params);
