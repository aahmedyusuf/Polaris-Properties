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

async function Create_Property(username, title, description, url, amount, state, city, zipcode, type, rooms, bathrooms,sale_type ){
    try{
        console.log(username);
        const response1 = await pool.query(`INSERT INTO property (username, title, description,url,amount,state,city,zipcode,type,rooms,bathrooms,sale_type,sold) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, 
        [username,title, description,url, amount, state, city, zipcode, type, rooms, bathrooms, sale_type, 'false']);

        return 'true';
    }catch{
        return 'false';
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

async function Get_Property(amount,state,city,type,rooms){
    try{
        amountOP=amount;
        amountOP = amountOP.length!=0 ? '<=':'=';
        console.log('amount = ' + amount);
        amount = amount.length!=0 ? `${amount}`:'amount';
        state = state.length!=0 ? `\'${state}\'`:'state';
        city = city.length!=0? `\'${city}\'`:'city';
        type = type.length!=0? `\'${type}\'`:'type';
        rooms = rooms.length!=0 ? `\'${rooms}\'`:'rooms';
        

        const query = `select * from property where amount ${amountOP} ${amount} And lower(state) = lower(${state}) And lower(city) = lower(${city}) And lower(type) = ${type} AND rooms = ${rooms}`;
        console.log(query);

        const response = await pool.query(query);

        return response.rows;
    }catch{
        return "failed";
    }
}

async function Get_Property_id(id){
    try{

        const query = `select * from property where id = ${id}`;
        const response = await pool.query(query);

        return response.rows;
    }catch{
        return 'false';
    }
}

async function VerifyUser(username, password, type){
    try{
        const query = `select * from users where username = '${username}' And password = '${password}' And type = '${type}'`;
        const response = await pool.query(query);
        
        console.log(response.rows);

        if(response.rows.length > 0){
            return 'true';
        }else{
            return 'false';
        }
    }catch{
        return 'false';
    }
}

async function Get_MyProperties(username){
    try{

        const query = `select * from property where username = '${username}'`;
        const response = await pool.query(query);
        return response.rows;
    }catch{
        return "failed";
    }
}
async function Buy_Property(id){
    try{
        const query = `UPDATE property SET sold = 'true' WHERE id = ${id}`;
        console.log(query);
        const response = await pool.query(query);
        return 'true';
    }catch{
        return 'false';
    }
}

async function Admin_Panel(){
    try{
        const query_totalP = 'SELECT COUNT(id) AS value FROM property';
        const query_totalSold = `SELECT COUNT(sold) AS value FROM property where sold = 'true'`;
        const query_unSold = `SELECT COUNT(sold) AS value FROM property where sold = 'false'`;
        const query_totalHouse = `SELECT COUNT(type) AS value FROM property where lower(type) = lower('house')`
        const query_Apartments = `SELECT COUNT(type) AS value FROM property where lower(type) = lower('apartment')`

        const response1 = await pool.query(query_totalP);
        const response2 = await pool.query(query_totalSold);
        const response3 = await pool.query(query_unSold);
        const response4 = await pool.query(query_totalHouse);
        const response5 = await pool.query(query_Apartments);

        const reponse = {
            total:response1.rows[0].value,
            sold:response2.rows[0].value,
            unsold:response3.rows[0].value,
            house:response4.rows[0].value,
            apartments:response5.rows[0].value,
        }
        return reponse;

    }catch{
        return 'something went wrong';
    }
}

module.exports = {Connect, CreateUser,UpdateSeller, Get_Property, Get_AllProperties,VerifyUser,Create_Property,Get_MyProperties, Buy_Property,Get_Property_id,Admin_Panel}