/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.hasTable('teams')
    .then((exist) => {
        if (!exist) {
            return knex.schema.createTable('teams', function(table) {
                table.increments('team_id').primary();
                table.string('name').notNullable();
                table.string('coach').nullable();
                table.integer('wins').notNullable().defaultTo(0);
                table.integer('losses').notNullable().defaultTo(0);
                table.integer('draws').notNullable().defaultTo(0);
                table.integer('points').notNullable().defaultTo(0);  // Puntos acumulados en la liga/torneo
                table.string('home_ground').nullable();  // Nombre del campo de juego local
                table.string('logo_url').nullable();  // URL del logo del equipo
                table.timestamps(true, true);
                
            });
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('teams');
};
