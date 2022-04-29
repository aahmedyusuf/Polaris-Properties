const Pool = require("pg").Pool;
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

function Connect() {
    pool.connect(function (err, result) {

        if (err) {
            console.log("Error Connecting to the database");
        } else {
            console.log("Sucessfully connected to the database");
        }
    })
}

async function CreateUser(username, password, type){
    try {
        const response1 = await pool.query(`INSERT INTO users(username, password, type) VALUES($1, $2, $3)`, [username, password, type]);

        if(type == 'seller'){
            const response = await pool.query(`INSERT INTO sellers(username, items_sold, money_earned) VALUES($1, $2, $3)`, [username, "0", "0"]);
        }

        return 'sucess';
    } catch {
        return 'failed';
    }
}

async function UpdateSeller(username, money_earned){
    try {
        const query = `update sellers set items_sold = items_sold+ ${1} , money_earned = money_earned+ ${money_earned} where username = '${username}'`;
        const response  = await pool.query(query);

        return 'sucess';
    } catch {
        return 'failed';
    }
}

async function Get_AllProperties(){
    try{

        const query = `select * from property`;
        const response = await pool.query(query);
        return response.rows;
    }catch{
        return "failed";
    }
}

async function Get_Property(amount,state,city,zipcode,type,rooms,bathrooms ){
    try{

        amount = amount.length == 0 ? 'amount':amount;
        state = state.length == 0 ? 'state':state;
        city = city.length == 0 ? 'city':city;
        zipcode = zipcode.length == 0 ? 'zipcode':zipcode;
        type = type.length == 0 ? 'type':type;
        rooms = rooms.length == 0 ? 'rooms':rooms;
        bathrooms = bathrooms.length == 0 ? 'bathrooms':bathrooms;

        const query = `select * from property where amount = ${amount} And state = ${state} And city = ${city} & zipcode = ${zipcode} & type = ${type} & room = ${rooms} & bathrooms = ${bathrooms}`;

        const response = await pool.query(query);
    }catch{
        return "failed";
    }
}



module.exports = {Connect, CreateUser,UpdateSeller, Get_Property, Get_AllProperties}